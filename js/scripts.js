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

      var sentenceArray = sentenceInput.split(" ");
      console.log(sentenceArray);

      var textOutput = sentenceArray.forEach(function(word){
        if (word[0] === "a" || word[0] === "e" || word[0] === "i" || word[0] === "o" || word[0] === "u"){
          // return word + "way";
          console.log(word + "way");
        } else {
          return console.log("nope");
        };
        // return console.log(word + "way");


      });


      // var result = textOutput();
      // console.log(result);

      // function(){
      //
      //
      //
      //
      //
      //   for (var i = 0; i < sentenceArray.length; i++){
      //     if (sentenceArray[0].includes("a") || sentenceArray[0].includes("e")){
      //       return sentenceArray + "way";
      //     } else {
      //       return "hello";
      //     }
      //
      //
      //
      //
      //   };
      //
      //   if (sentenceArray[0] === "a" || sentenceArray[0] === "e" || sentenceArray[0] === "i" || sentenceArray[0] === "o" || sentenceArray[0] === "u") {
      //     return sentenceInput + "way";
      //   } else {
      //       return "hello";
      //   };
      //
      // };

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
