var newString = "";
var str = "saya belajar javascript";
var word = "";
var c;
var stack = [];

for (var i = 0; i < str.length; i++) {
  c = str[i];
  word += c;
  if (c == " " || i == str.length - 1) {
    stack.push(word);
    word = "";
  }
}
while ((x = stack.pop())) {
  newString += x + " ";
}
console.log(newString)