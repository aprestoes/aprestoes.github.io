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
  "a teacher.",
  "a photographer.",
  "a traveller.",
  "a camp counsellor.",
  "a musician."
];
  
var rotatingParagraphs = [
  "Currently studying at Carleton University for computer science with a specialization in software engineering and a minor in applied linguistics. <span>Whew.</span>",
  //"More stuff",
  "<span>Beep, boop, bop.</span> Check out my Github projects (including this website) down below.",
  "Fully <span>TEFL</span> (Teaching English as a Foreign Language) certified. Taught English throughout Italy and Austria during Summer 2019.",
  "Analog and digital. An avid hobbyist who loves taking capturing shots of cool places, people, and things. View some of my favourite photos by clicking <a href='images/image1.jpg' data-lightbox='photography' data-title='STM Metro. Montreal, QC - Olympus Trip 35, Ilford HP5'>here.</a><a href='images/image2.jpg' data-lightbox='photography' data-title='Gatineau, QC. Olympus Trip 35, Ilford HP5'></a><a href='images/image3.jpg' data-lightbox='photography' data-title='Gatineau, QC. - Olympus Trip 35, Ilford HP5'></a><a href='images/image4.jpg' data-lightbox='photography' data-title='Montreal, QC - Olympus Trip 35, Ilford HP5'></a>", //You can add lightboxes here too
  "3 continents, 10 countries, 27 provinces/states/regions, countless cities, but still <span>counting.</span>",
  "Summer camp, STEM camp, English camp. Also with relevant training from the American Camp Association, the National Child Traumatic Stress Network, and the Canadian Red Cross.",
  "Guitar, drums, bass, and ukulele. Jazz band, concert band, guitar ensemble, musical orchestra, and (of course) a high school rock band."
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
    var newDiv = jQuery("<div>").attr("id", "slide" + index).addClass("item");
    
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
    autoplayTimeout: 6000,
    autoplayText: ["", ""], //Empty
    mouseDrag: true
  });


  $(document).keydown(function(e) {
    /*if (e.keyCode == 32) { //Spacebar pause
      $("#play-button").click();
    } else*/ if (!(tnsSlider.autoplay) && (e.keyCode == 37 || e.keyCode == 39)) { //If already paused, keep it paused on keys
      tnsSlider.pause();
    }
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
    $(this).toggleClass("fa-play fa-pause");

    return false;
  });

  //Gallery link listener

  //Help button
  /*$("#help-button").click(function(e) {
    e.preventDefault();
  });

  $("#help-button").hover(function() {
    $("#overlay").show();
  })

  $("#help-button").mouseleave(function() {
    $("#overlay").hide();
  });*/
};

//Event Listeners

//On start
$(document).ready(function(){
  addRotatingWords();
  startTinySlider();
  startButtonListeners();
});

}());
