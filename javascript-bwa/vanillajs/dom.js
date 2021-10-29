// ambil dari html
// console.log(document.getElementById("foo"));
// innerText = "Bar";

//merubah tulisan by id
//document.getElementById("foo").innerText = "Bar";
const div = document.getElementsByClassName("foo");

console.log(div);

for (let index = 0; index < div.length; index++) {
  const element = div[index];

  console.log(element);
}
