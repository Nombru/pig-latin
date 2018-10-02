// Biz Logic
var textOutput = function(){
 switch (textInput) {
   case "hello":
    return textInput + "!";
      break;
   default:
    return textInput + "?";
  }
};

//UI Logic
var textInput = prompt("Add text");
console.log(textInput);

var result = textOutput();
console.log(result);
