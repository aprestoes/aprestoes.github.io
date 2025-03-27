;(function () {

	'use strict';
/*To see the fully documented code and configurable code, go to the
original template repo at:
https://github.com/aprestoes/minimalist-landing-page/tree/dev
*/

var headersBlack = [ //headersBlack + headersBlue, e.g. "Hi, I'm Dan"
  "Hi, I'm "
];

var headersBlue = [ //Descriptive and re-affirming words here
  "Dan.",
  //"a student.",
  "a programmer.",
  "a tutor.",
  "a photographer.",
  "a traveller.",
  "a camp counsellor.",
  "a musician."
];
  
var rotatingParagraphs = [
  "Recent Honours Bachelor of Computer Science graduate from Carleton University with a minor in applied linguistics. <span>Whew.</span>",
  //"More stuff",
  "<span>Beep, boop, bop.</span> Experienced with languages such as Java, Javascript, and Python. Check out my Github projects (including this website) down below.",
  "Fully <span>TEFL</span> (Teaching English as a Foreign Language) certified with teaching experience. Taught English throughout Italy and Austria during the summer of 2019.",
  "Analog and digital. Always capturing shots of cool places, people, and things. View some of my photos by clicking the camera icon.", //You can add lightboxes here too
  "4 continents, 14 countries, 38 provinces/states/regions, countless cities, but still <span>counting.</span>",
  "Summer camp, STEM camp, English camp. Also with relevant training from the American Camp Association and the Canadian Red Cross.",
  "Guitar, drums, bass, and ukulele. Jazz band, concert band, guitar ensemble, musical orchestra, and <span>(of course)</span> a high school rock band."
];
  
var addRotatingWords = function() {
  
  var wordsDiv = $("#rotating-words");
  var paragraphsDiv = $("#rotating-paragraphs");
  var largestArrayLength;

  largestArrayLength = Math.max(headersBlack.length, headersBlue.length, rotatingParagraphs.length);
  
  for (var index = 0; index < largestArrayLength; index++) {
    //Temp variables
    var headerBeginning;
    var headerEnd;
    var paragraph = rotatingParagraphs[0]; //Default

    if (index >= headersBlack.length) { //Use last element
      headerBeginning = headersBlack[headersBlack.length - 1];
    } else {
      headerBeginning = headersBlack[index];
    }

    if (index >= headersBlue.length) {
      headerEnd = headersBlue[headersBlue.length - 1];
    } else {
      headerEnd = headersBlue[index];
    }
    
    if (index >= rotatingParagraphs.length) {
      paragraph = rotatingParagraphs[rotatingParagraphs.length - 1];
    } else {
      paragraph = rotatingParagraphs[index];
    }
    
    //Add headers
    var newDiv = jQuery("<div>").addClass("item");
    
    var newElement = jQuery("<h4>").append(headerBeginning);
    var blueElement = jQuery("<a>").text(headerEnd).addClass("highlighted-words").appendTo(newElement);

    $(newElement).appendTo(newDiv);
    $(newDiv).appendTo(wordsDiv);


    //Add paragraphs
    var newPElement = jQuery("<p>").html(paragraph).appendTo(newDiv);
  }
};

var tnsSlider;

var startTinySlider = function () {
  tnsSlider = tns({
    mode: "gallery",
    controls: false,
    arrowKeys: true,
    nav: false,
    autoplay: true,
    autoplayButton: "#play-button",
    autoplayResetOnVisibility: false,
    autoplayTimeout: 6000,
    autoplayText: ["<a class='fas fa-pause floating-button' href=''></a>", "<a class='fas fa-play floating-button' href=''></a>"],
    //Empty
    mouseDrag: true
  });
}

var startButtonListeners = function () {
  const preferDark = window.matchMedia("(prefers-color-scheme: dark)");

  if (preferDark.matches) { //If user sets dark mode in OS, set dark on load.
    $('#dark-button').toggleClass('far fas');
    $('body').toggleClass('dark');
  }

  $('#dark-button').click(function(e) {
    e.preventDefault();
    $('#dark-button').toggleClass('far fas');
    $('body').toggleClass('dark');
  });

  $('#play-button').click(function(e) {
    e.preventDefault;
    e.stopPropagation;

    return false;
  });

  $(document).keydown(function(e) {
    if (e.keyCode == 32) { //Spacebar pause
      document.getElementById("play-button").click(); //Must use DOM instead of jQuery
    }
  });

  //Help button
  $("#help-button").click(function(e) {
    e.preventDefault();
  });

  $("#help-button").hover(function() {
    $("#keys-text").fadeIn();
  })

  $("#help-button").mouseleave(function() {
    $("#keys-text").fadeOut();
  });

  if ($(window).width() < 500) {
    $("#keys-text").text("Swipe on headers to change slides.");
  }

  $("#keys-text").fadeOut(7000);
};

//Event Listeners

//On start
$(document).ready(function(){
  addRotatingWords();
  startTinySlider();
  startButtonListeners();
});

}());
