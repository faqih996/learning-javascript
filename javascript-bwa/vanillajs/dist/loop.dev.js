"use strict";

var namaMantan = ["kiki", "ayu", "ezra"]; //pakai [0/1/2] untuk melihat salah satu. sama dengan id di php
//atau menggunakan (namaMantan.lenght) untuk melihat jumlah mantan
//console.log(namaMantan);

namaMantan.forEach(function (item, index, array) {
  console.log(item, index, array);
});
namaMantan.push("harutya"); //duplikat array

var namaMantanLama = namaMantan.slice();
namaMantan.pop(); // console.log("nama mantan: ", namaMantan);
// console.log("Nama Mantan Lama:", namaMantanLama);
//perulangan for
// for (let index = 0; index < namaMantan.length; index++) {
//   const element = namaMantan[index];
//   console.log(element);
// }
// perulangan while
// let index = 0;
// while (index < namaMantan.length) {
//   const element = namaMantan[index];
//   console.log(element);
//   index++;
// }
//menggunakan map
// console.log(
//   namaMantan
//     .map(function (mantan, ke) {
//       return `${mantan} adalah mantan ke ${ke + 1}`;
//     })
//     .join(", ")
// );

console.log(namaMantan.filter(function (mantan, ke) {
  return mantan == "ezra";
}).map(function (mantan, ke) {
  return "".concat(mantan, " adalah mantan ke ").concat(ke + 1);
}).join(", "));