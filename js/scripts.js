// Biz Logic
// var textOutput = function(){
//  switch (textInput) {
//    case 2:
//     return "This is a number";
//       break;
//    default:
//     return textInput + "?";
//   }
// };


//this is our code
// $(document).ready(function() {
//   $("#blanks form").submit(function(event) {
//     event.preventDefault();
//       var sentenceInput = $("input#sentence").val();
//       // console.log(sentenceInput);
//
//       var sentenceArray = sentenceInput.split(" ");
//       // console.log(sentenceArray);
//
//       var textOutput = sentenceArray.forEach(function(word){
//         if (word[0] === "a" || word[0] === "e" || word[0] === "i" || word[0] === "o" || word[0] === "u"){
//           return word + "way";
//           console.log(word + "way");
//         } else {
//           return console.log("nope");
//         };
//         // return console.log(word + "way");
//
//       });
//
// var result = $(".result").append(textOutput());
//
//   });
// });
//end of our code





//UI Logic
// var textInput = prompt("Add text");
// console.log(textInput);
//
// var result = textOutput();
// // $(".result").attr(result);
// console.log(result);


// switch (sentenceArray[0]) {
//   case "a" || "e" || "i" || "o" || "u":
//    return sentenceInput + "way";
//      break;
//   default:
//    return sentenceInput + "?";
//  }




var firstFunction = function(phrase) {
  var phraseArray = phrase.split(" ");
  console.log(phraseArray);
  var newArray=phraseArray.map(translate);

  //pause + step into the other function
  phrase = newArray.join(" ");
  console.log(phrase);
  return phrase;
}

function translate(word) {
  for(var i=0; i<word.length; i++) {
    if (!"AEIOUaeiou".includes(word[0])) {
      if (((word.substr(0,1)==="q")||("Q"===word.substr(0,1)))&&
          ((word.substr(1,1)==="u")||("U"===word.substr(1,1)))) {
          word = word.substr(2) + word.substr(0,2);
      } else {
        word = word.substr(1) + word.substr(0,1);
      }
    } else {
      word+="ay";
      return word;
    }
  }
}

$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var userInput = $("#phrase").val();

    var result = $("#results").text(firstFunction(userInput));
  });
});
