//File: scrabble.js
//4610 Assignment 9: Recreate Scrabble
//Michael Zurawski, UMass Lowell Computer Science, michael_zurawski@student.uml.edu
//updated by Mike on December 1, at 6:00 PM
//Purpose: Create a Scrabble game
//Sources: 
// http://stackoverflow.com/questions/941206/jquery-add-image-inside-of-div-tag
// https://stackoverflow.com/questions/10863658/load-image-with-jquery-and-append-it-to-the-dom
// http://stackoverflow.com/questions/2390789/how-to-replace-all-dots-in-a-string-using-javascript
// http://ejohn.org/blog/dictionary-lookups-in-javascript/
// https://regex101.com/
// https://jqueryui.com/
// Credits to Jesse Heines, Jason Downing, W3schools, and Stack Overflow

// Credits to Jesse Heines for the data structure
var ScrabbleTiles = [];
ScrabbleTiles[0] = {"letter": "A", "value": 1, "original_distribution": 9, "number_remaining": 9};
ScrabbleTiles[1] = {"letter": "B", "value": 3, "original_distribution": 2, "number_remaining": 2};
ScrabbleTiles[2] = {"letter": "C", "value": 3, "original_distribution": 2, "number_remaining": 2};
ScrabbleTiles[3] = {"letter": "D", "value": 2, "original_distribution": 4, "number_remaining": 4};
ScrabbleTiles[4] = {"letter": "E", "value": 1, "original_distribution": 12, "number_remaining": 12};
ScrabbleTiles[5] = {"letter": "F", "value": 4, "original_distribution": 2, "number_remaining": 2};
ScrabbleTiles[6] = {"letter": "G", "value": 2, "original_distribution": 3, "number_remaining": 3};
ScrabbleTiles[7] = {"letter": "H", "value": 4, "original_distribution": 2, "number_remaining": 2};
ScrabbleTiles[8] = {"letter": "I", "value": 1, "original_distribution": 9, "number_remaining": 9};
ScrabbleTiles[9] = {"letter": "J", "value": 8, "original_distribution": 1, "number_remaining": 1};
ScrabbleTiles[10] = {"letter": "K", "value": 5, "original_distribution": 1, "number_remaining": 1};
ScrabbleTiles[11] = {"letter": "L", "value": 1, "original_distribution": 4, "number_remaining": 4};
ScrabbleTiles[12] = {"letter": "M", "value": 3, "original_distribution": 2, "number_remaining": 2};
ScrabbleTiles[13] = {"letter": "N", "value": 1, "original_distribution": 6, "number_remaining": 6};
ScrabbleTiles[14] = {"letter": "O", "value": 1, "original_distribution": 8, "number_remaining": 8};
ScrabbleTiles[15] = {"letter": "P", "value": 3, "original_distribution": 2, "number_remaining": 2};
ScrabbleTiles[16] = {"letter": "Q", "value": 10, "original_distribution": 1, "number_remaining": 1};
ScrabbleTiles[17] = {"letter": "R", "value": 1, "original_distribution": 6, "number_remaining": 6};
ScrabbleTiles[18] = {"letter": "S", "value": 1, "original_distribution": 4, "number_remaining": 4};
ScrabbleTiles[19] = {"letter": "T", "value": 1, "original_distribution": 6, "number_remaining": 6};
ScrabbleTiles[20] = {"letter": "U", "value": 1, "original_distribution": 4, "number_remaining": 4};
ScrabbleTiles[21] = {"letter": "V", "value": 4, "original_distribution": 2, "number_remaining": 2};
ScrabbleTiles[22] = {"letter": "W", "value": 4, "original_distribution": 2, "number_remaining": 2};
ScrabbleTiles[23] = {"letter": "X", "value": 8, "original_distribution": 1, "number_remaining": 1};
ScrabbleTiles[24] = {"letter": "Y", "value": 4, "original_distribution": 2, "number_remaining": 2};
ScrabbleTiles[25] = {"letter": "Z", "value": 10, "original_distribution": 1, "number_remaining": 1};
ScrabbleTiles[26] = {"letter": "_", "value": 0, "original_distribution": 2, "number_remaining": 2};

// Could not figure out how to use a letter to get a value in the ScrabbleTiles data structure, so I made this
var LetterNumber = [] ;
LetterNumber["A"] = {"value" : 1};
LetterNumber["B"] = {"value" : 3};
LetterNumber["C"] = {"value" : 3};
LetterNumber["D"] = {"value" : 2};
LetterNumber["E"] = {"value" : 1};
LetterNumber["F"] = {"value" : 4};
LetterNumber["G"] = {"value" : 2};
LetterNumber["H"] = {"value" : 4};
LetterNumber["I"] = {"value" : 1};
LetterNumber["J"] = {"value" : 8};
LetterNumber["K"] = {"value" : 5};
LetterNumber["L"] = {"value" : 1};
LetterNumber["M"] = {"value" : 3};
LetterNumber["N"] = {"value" : 1};
LetterNumber["O"] = {"value" : 1};
LetterNumber["P"] = {"value" : 3};
LetterNumber["Q"] = {"value" : 10};
LetterNumber["R"] = {"value" : 1};
LetterNumber["S"] = {"value" : 1};
LetterNumber["T"] = {"value" : 1};
LetterNumber["U"] = {"value" : 1};
LetterNumber["V"] = {"value" : 4};
LetterNumber["W"] = {"value" : 4};
LetterNumber["X"] = {"value" : 8};
LetterNumber["Y"] = {"value" : 4};
LetterNumber["Z"] = {"value" : 10};
LetterNumber["_"] = {"value" : 0};

// Global variables
var score = 0;
var dictionaryWord = "";
var turn = 7;

// http://stackoverflow.com/questions/941206/jquery-add-image-inside-of-div-tag
function generateTiles() {
  // Vairables for generate tiles
  var randomLetter = "";
  var letter_piece_ID = "";
  var decrementLetter;
  
  // Generate 7 scrabble tiles
  for (var i = 0; i < 7; i++) {
    // https://www.kirupa.com/html5/picking_random_item_from_array.htm
    randomLetter = ScrabbleTiles[Math.floor(Math.random() * ScrabbleTiles.length)];
    
    // If remaining tiles are equal to zero, get another one
    if (ScrabbleTiles[randomLetter.number_remaining] === 0) {
      randomLetter = ScrabbleTiles[Math.floor(Math.random() * ScrabbleTiles.length)];
    }

    // Decrement number of tiles remaining
    ScrabbleTiles[randomLetter.number_remaining] - 1;
    
    // Append tiles to 'tile_here' div
    $("#tile_here").append("<img id='letter_piece" + i + "' src='assets/images/scrabble_letter_" + randomLetter.letter + ".jpg' style='width:65px;height:65px;'/>");
    
    // Give tile a unique ID
    letter_piece_ID = "#letter_piece" + i;
    
    // https://stackoverflow.com/questions/10863658/load-image-with-jquery-and-append-it-to-the-dom
    $(letter_piece_ID).css("top", -110);
    $(letter_piece_ID).css("position", "relative");
    
    // Make all the tiles draggable
    $(letter_piece_ID).draggable();
    // This code will make peice snap back, commetned out for now
//    {
//      snap: ".normal_tile, .double_word, .double_word",
//      snapMode: "outer",
//      revert: "invalid"
//    }
  }
}

// Determines the scrabble letter placed on game board tile
function droppableTileBoard() {
  $(".normal_tile").droppable({
    drop: function( event, ui ) {
//      $( this ).addClass( "ui-state-highlight" ).find( "p" ).html( "Dropped!" );
//      $(this).css("background-color", "red");
      // Figure out what the tile is that was placed on board piece
      var letterDraggable = ui.draggable.attr("src");
      var parsedLetter = parseLetter(letterDraggable);
      var getNumber = LetterNumber[parsedLetter].value;
      // Center the tile to the board piece, commented out for now
//      ui.draggable.position({
//          my: "center",
//          at: "center",
//          of: $(this)
//      });
      // Add letter to lookup string
      dictionaryWord += parsedLetter;
      // Update the score
      updateScore(getNumber);
    }
  });
  $(".normal_tile").droppable({
    out: function( event, ui ) {
//      $(this).css("background-color","yellow");
      var letterDraggable = ui.draggable.attr("src");
      var parsedLetter = parseLetter(letterDraggable);
      var getNumber = LetterNumber[parsedLetter].value;
      var newstr = "/" + parsedLetter +"/g";
      // Remove letter from lookup string
      dictionaryWord = dictionaryWord.replace(parsedLetter, '');
      // Update the score
      decrementScore(getNumber);
    }
  });
  
  // Handle double letters
  $(".double_letter").droppable({
    drop: function( event, ui ) {
//      $( this ).addClass( "ui-state-highlight" ).find( "p" ).html( "Dropped!" );
//      $(this).css("background-color", "red");
      // Figure out what the tile is that was placed on board piece
      var letterDraggable = ui.draggable.attr("src");
      var parsedLetter = parseLetter(letterDraggable);
      var getNumber = LetterNumber[parsedLetter].value;
      // Add letter to lookup string
      dictionaryWord += parsedLetter;
      // Update the score
      updateScore(getNumber * 2);
    }
  });
  $(".double_letter").droppable({
    out: function( event, ui ) {
//      $(this).css("background-color","yellow");
      var letterDraggable = ui.draggable.attr("src");
      var parsedLetter = parseLetter(letterDraggable);
      var getNumber = LetterNumber[parsedLetter].value;
      // Remove letter from lookup string
      dictionaryWord = dictionaryWord.replace(parsedLetter, '');
      // Update the score
      decrementScore(getNumber * 2);
    }
  });
  
  // Handle double words
  $(".double_word").droppable({
    drop: function( event, ui ) {
//      $( this ).addClass( "ui-state-highlight" ).find( "p" ).html( "Dropped!" );
//      $(this).css("background-color", "red");
      // Figure out what the tile is that was placed on board piece
      var letterDraggable = ui.draggable.attr("src");
      var parsedLetter = parseLetter(letterDraggable);
      var getNumber = LetterNumber[parsedLetter].value;
      // Add letter to lookup string
      dictionaryWord += parsedLetter;
      // Update the score
      updateScore(getNumber * 2);
    }
  });
  $(".double_word").droppable({
    out: function( event, ui ) {
//      $(this).css("background-color","yellow");
      var letterDraggable = ui.draggable.attr("src");
      var parsedLetter = parseLetter(letterDraggable);
      var getNumber = LetterNumber[parsedLetter].value;
      // Remove letter from lookup string
      dictionaryWord = dictionaryWord.replace(parsedLetter, '');
      // Update the score
      decrementScore(getNumber * 2);
    }
  });
  
}

// Function uses regex to parse letter from src string so we know what was dropped on tile
function parseLetter(srcString) {
  // Use regex to remove url and get Letter of tile
  // http://stackoverflow.com/questions/2390789/how-to-replace-all-dots-in-a-string-using-javascript
  var getLetterString = srcString.replace(/[a-z]/g, '').replace(/\//g, '');
  getLetterString = getLetterString.replace(/_/g, '');
  getLetterString = getLetterString.replace(/\./g,'');
  getLetterString = getLetterString.replace(/\s/g, '');
  // alert(getLetterString);
  return getLetterString;
}

// Function updates the score by adding on to it
function updateScore(updateNumber) {
  score = score + updateNumber;
  var element = document.getElementById("score_here");
  element.innerHTML = "SCORE " + score;
}

// Function decrements the score by subtracting from it
function decrementScore(updateNumber) {
  score = score - updateNumber;
  var element = document.getElementById("score_here");
  element.innerHTML = "SCORE " + score;
}

// Function resets the score back to 0
function resetScore() {
  score = 0;
  var element = document.getElementById("score_here");
  element.innerHTML = "SCORE " + score;
}

// Function clears the look up string
function resetString() {
  dictionaryWord = "";
}

// Function resets the valid text back to its original form
function resetValidText() {
  var newString = "VALID?"
  var element = document.getElementById("valid_here");
  element.innerHTML = newString;
}

// Function removes all image tags so we can get new ones
function removeIMG() {
  var parent = document.getElementById("tile_here");
  for (var i = 0; i < 7; i++) {
    var child = document.getElementById("letter_piece" + i);
    parent.removeChild(child);
  }
}

// Function initializes turn coutnerr
function turnCounter() {
  turn = 7;
  var newString = "TURN " + turn;
  var element = document.getElementById("turn_here");
  element.innerHTML = newString;
}

// Function decreases the turn counter
function decrementTurnCounter() {
  turn = turn - 1;
  var newString = "TURN " + turn;
  var element = document.getElementById("turn_here");
  element.innerHTML = newString;
}

// Gets called when the submit buttong is pressed, check if word is valid
function submitWord() {
  // Change text on page
  var valid = findWord(dictionaryWord);
  var element = document.getElementById("valid_here");
  element.innerHTML = valid;
}

// The dictionary lookup object
var dict = {};

// Credits to http://ejohn.org/blog/dictionary-lookups-in-javascript/ and Jason Downing for modifying this  
// Check if word is valid, if so, submit it
function loadDictionary() {
  // Do a jQuery Ajax request for the text dictionary
  $.get( "dict/dict.txt", function( txt ) {
    // Get an array of all the words
    var words = txt.split( "\n" );

    // And add them as properties to the dictionary lookup
    // This will allow for fast lookups later
    for ( var i = 0; i < words.length; i++ ) {
        dict[ words[i] ] = true;
    }
  });  
}

// Modified to only pass in one word, which can then be verified.
function findWord( word ) {
  // See if it's in the dictionary
  if ( dict[ word ] ) {
      // If it is, return that word
      return word + " is valid!";
  }

  // Otherwise, it isn't in the dictionary.
  return dictionaryWord + " is not a valid word!";
}




 







