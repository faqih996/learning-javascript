
const namaMantan = ["kiki", "ayu", "ezra"];


//pakai [0/1/2] untuk melihat salah satu. sama dengan id di php
//atau menggunakan (namaMantan.lenght) untuk melihat jumlah mantan
//console.log(namaMantan);


namaMantan.forEach(function(item, index, array){
    console.log(item, index, array);
});

namaMantan.push('harutya');


//duplikat array 
const namaMantanLama = namaMantan.slice();

namaMantan.pop();

console.log("nama mantan: ", namaMantan);

console.log("Nama Mantan Lama:", namaMantanLama);

//HAPUS DATA TERAKHIR
//namaMantan.pop();

//console.log(namaMantan);

//HAPUS DATA PERTAMA
//namaMantan.shift();

//console.log(namaMantan);

//menghapus nama tertentu dengan cara 1
//namaMantan.splice(namaMantan.indexOf("kiki"), 1)
//console.log(namaMantan);

//mencari dia ini mantan keberapa
//console.log(namaMantan.indexOf("ezra") + 1);


//menghapus nama tertentu
//const indexKiki = namaMantan.indexOf("kiki");
//console.log(indexKiki);
//namaMantan.splice(indexKiki, 1);

//console.log(namaMantan);



