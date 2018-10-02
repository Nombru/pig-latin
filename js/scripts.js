// Biz Logic
var textOutput = function(){
  return textInput + "!";
};

//UI Logic
var textInput = prompt("Add text");
console.log(textInput);

var result = textOutput();
console.log(result);
