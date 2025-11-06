;(function () {

	'use strict';
/*To see the fully documented code and configurable code, go to the
original template repo at:
https://github.com/aprestoes/minimalist-landing-page/tree/dev
*/

var emailCodes = [99, 111, 110, 116, 97, 99, 116, 64, 100, 97, 110, 105, 101, 108, 98, 97, 108, 97, 46, 99, 97];

var headersBlack = [ //headersBlack + headersBlue, e.g. "Hi, I'm Dan"
  "Hi, I'm "
];

var headersBlue = [ //Descriptive and re-affirming words here
  "Dan. 👋",
  "a programmer. 💻",
  "a tutor. 🎓",
  "a photographer. 📷",
  "a traveller. 🌎",
  "a camp counsellor. ⛺️",
  "a musician. 🎵"
];
  
var rotatingParagraphs = [
  "Graduated with an Honours Bachelor of Computer Science and a minor in Applied Linguistics from Carleton University. <span>Whew.</span>",
  "<span>Beep, boop, bop.</span> Experienced with languages such as Java, Javascript, and Python. Check out my Github projects (including this website) down below.",
  "Fully <span>TEFL</span> (Teaching English as a Foreign Language) certified with teaching experience. Taught English throughout Italy and Austria during the summer of 2019.",
  "<span>Analog and digital.</span> Always capturing shots of cool places, people, and things. View some of my photos by clicking the camera icon.", //You can add lightboxes here too
  "4 continents, 17 countries, 44 provinces/states/regions, countless cities, but <span>who's counting?</span>",
  "Campfires, code, and capture the flag. I've worked at STEM camps, English camps, and traditional summer camps. I also have certs from the ACA and American Red Cross. <span>No biggie.</span>",
  "Guitar, drums, bass, and ukulele. Jazz band, concert band, guitar ensemble, musical orchestra, and <span>(of course)</span> a high school rock band."
];

var codesToStrings = function(arr) {
  return String.fromCharCode(...arr);
}
  
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

  //Show keys help text
  var helpElement = jQuery("<p>").addClass("help-text").attr("id", "keys-text").appendTo($("#keys-div"));
};

var tnsSlider;

var startTinySlider = function () {
  tnsSlider = tns({
    mode: "gallery",
    controls: false,
    arrowKeys: true,
    nav: false,
    autoplay: true,
    autoplayResetOnVisibility: false,
    autoplayButtonOutput: false,
    autoplayTimeout: 6000,
    mouseDrag: true
  });
}

var startButtonListeners = function () {
  //Add buttons
  const socialBar = $("#social-bar");
  $("<a>").addClass("fas fa-envelope").attr("id", "email-btn").attr("href", "").prependTo(socialBar);
  $("#email-btn").attr("href", "mailto:" + codesToStrings(emailCodes));
  
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

//On start
$(document).ready(function(){
  addRotatingWords();
  startTinySlider();
  startButtonListeners();
});

}());
