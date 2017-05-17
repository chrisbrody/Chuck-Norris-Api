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
