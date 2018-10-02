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

$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    event.preventDefault();
      var sentenceInput = $("input#sentence").val();
      console.log(sentenceInput);
      var sentenceArray = sentenceInput.split("");
      console.log(sentenceArray);

      var textOutput = function(){
        if (sentenceArray[0] === "a" || sentenceArray[0] === "e") {
          return sentenceInput + "way";
        } else {
            return "hello";
        };

      };
        var result = textOutput(sentenceArray);
        console.log(result);
  });

});


//UI Logic
// var textInput = prompt("Add text");
// console.log(textInput);
//
// var result = textOutput();
// console.log(result);


// switch (sentenceArray[0]) {
//   case "a" || "e" || "i" || "o" || "u":
//    return sentenceInput + "way";
//      break;
//   default:
//    return sentenceInput + "?";
//  }
