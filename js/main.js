;(function () {

	'use strict';

const sentenceBeginning = "Hi, I'm "; //sentenceBeginning + word[i]
  
const words = [ //Descriptive and re-affirming words here
    "Dan.",
    "a student.",
    "a programmer.",
    "a camp counsellor.",
    "a musician.",
    "a traveller.",
    "a goof."
  ];
  
var addRotatingWords = function() {
  
  var wordsDiv = document.getElementById("rotating-words");
  
  function addElement(word) {
    var newDiv = document.createElement("div");
    newDiv.className = 'item';
    
    var newElement = document.createElement("h4");
    var textBeginning = document.createTextNode(sentenceBeginning);
    var wordElement = document.createElement("a");
    var textWord = document.createTextNode(word);
    
    newElement.appendChild(textBeginning);
    wordElement.appendChild(textWord);
    newElement.appendChild(wordElement);
    
    newDiv.appendChild(newElement);
    wordsDiv.appendChild(newDiv);
  }
  
  /*var links = [ //Links for the corresponding elements in words array.
  ];*/
  
  words.forEach(element => addElement(element));
};

var startTinySlider = function () {
  tns({
    mode: 'gallery', //carousel is also nice
    controls: false,
    nav: false,
    autoplay: true,
    autoplayButtonOutput: false,
    mouseDrag: true
  });
}


$(document).ready(function(){
  addRotatingWords();
  //startOwlCarousel();
  startTinySlider();
});

}());