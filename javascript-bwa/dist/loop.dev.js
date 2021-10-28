"use strict";

var namaMantan = ["kiki", "ayu", "ezra"]; //pakai [0/1/2] untuk melihat salah satu. sama dengan id di php
//atau menggunakan (namaMantan.lenght) untuk melihat jumlah mantan
//console.log(namaMantan);

namaMantan.forEach(function (item, index, array) {
  console.log(item, index, array);
});
namaMantan.push("harutya"); //duplikat array

var namaMantanLama = namaMantan.slice();
namaMantan.pop();
console.log("nama mantan: ", namaMantan);
console.log("Nama Mantan Lama:", namaMantanLama);