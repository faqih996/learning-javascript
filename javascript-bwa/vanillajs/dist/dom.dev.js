"use strict";

// ambil dari html
// console.log(document.getElementById("foo"));
// innerText = "Bar";
//merubah tulisan by id
//document.getElementById("foo").innerText = "Bar";
var div = document.getElementsByClassName("foo");
console.log(div);

for (var index = 0; index < div.length; index++) {
  var element = div[index];
  console.log(element);
}