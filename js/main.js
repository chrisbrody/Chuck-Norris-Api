// array for jokes
var jokeArray = new Array;
// element to display jokes
var viewalljokesdiv = document.getElementById("viewalljokesdiv");

// ajax request
$.ajax({
  // url for chuck norris api
  url: "http://api.icndb.com/jokes/",
  // when data is returned, do this
  success: function(data) {
    // store single items based on data.value
    var items = data.value;

    // loop through array
    for (var i = 0; i < items.length; i++) {
      // add individual jokes to jokearray
      jokeArray.push(items[i]);
    };
  }
});

// confirm jokeArray is full of jokes
console.log(jokeArray);



// function to display all jokes
function viewalljokes() {
  changeColors()
  // loop through jokeArray
  for (var i = 0; i < jokeArray.length; i++) {
    // create elements to add text too
    var el = document.createElement("div");

    // update the html inside of the new div
    el.innerHTML = "<blockquote>" + jokeArray[i].joke + "</blockquote>";

    // add joke to HTML
    viewalljokesdiv.appendChild(el);
  };
};
// add event to element with id="viewalljokes"
document.getElementById("viewalljokes").addEventListener("click", viewalljokes, false);



// function to hide jokes
function hidealljokes() {
  // remove HTML from element with id="viewalljokesdiv"
  viewalljokesdiv.innerHTML = "";
};
// add event to element with id="hidealljokes"
document.getElementById("hidealljokes").addEventListener("click", hidealljokes, false);



// function for random jokes
function randomjoke(){
  changeColors()
  // get random number based on length of joke array
  var random = Math.floor(Math.random() * jokeArray.length);

  // find random joke
  // console.log(jokeArray[random].joke)

  // create element to display jokes
  var el = document.createElement("div");

  // remove old joke(s)
  viewalljokesdiv.innerHTML = "";

  // add new joke text to new element
  el.innerHTML = "<blockquote>" + jokeArray[random].joke + "</blockquote>";

  // add joke to HTML
  viewalljokesdiv.appendChild(el);
};
// add event to element with id="newrandomjokes"
document.getElementById("newrandomjokes").addEventListener("click", randomjoke, false);
// add event to show a joke when a key is pressed
document.addEventListener("keypress", function() {
  // get a random joke when any key is pressed
  randomjoke();
});



// create color for background
var nextHue = Math.floor(Math.random() * 360);
// add background on load
changeColors();

function changeColors() {
  var hue = nextHue,
      sat = 65,
      loval = 60,
      hival = 75,
      dark = hsl2rgb(hue, sat, loval),
      light = hsl2rgb(hue, sat, hival);

  // set background for body and element with id="content"
  document.body.style.backgroundColor = 'rgb(' + light.r +','+ light.g +','+ light.b + ')';
  document.getElementById("content").style.backgroundColor = 'rgb(' + dark.r +','+ dark.g +','+ dark.b + ')';
  nextHue = (nextHue + 10) % 360;
}

function hsl2rgb(h, s, l) {

    var r, g, b, m, c, x

    if (!isFinite(h)) h = 0
    if (!isFinite(s)) s = 0
    if (!isFinite(l)) l = 0

    h /= 60
    if (h < 0) h = 6 - (-h % 6)
    h %= 6

    s = Math.max(0, Math.min(1, s / 100))
    l = Math.max(0, Math.min(1, l / 100))

    c = (1 - Math.abs((2 * l) - 1)) * s
    x = c * (1 - Math.abs((h % 2) - 1))

    if (h < 1) {
        r = c
        g = x
        b = 0
    } else if (h < 2) {
        r = x
        g = c
        b = 0
    } else if (h < 3) {
        r = 0
        g = c
        b = x
    } else if (h < 4) {
        r = 0
        g = x
        b = c
    } else if (h < 5) {
        r = x
        g = 0
        b = c
    } else {
        r = c
        g = 0
        b = x
    }

    m = l - c / 2
    r = Math.round((r + m) * 255)
    g = Math.round((g + m) * 255)
    b = Math.round((b + m) * 255)
    return { r: r, g: g, b: b };
}
