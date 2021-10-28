"use strict";

var person = {
  firstName: "Faqih",
  lastName: "Syakir",
  fullName: function fullName() {
    return "".concat(this.firstName, " ").concat(this.lastName);
  },
  weight: 100,
  height: 172,
  isWeightIdeal: function isWeightIdeal() {
    var heightMinus100 = this.height - 100;
    return heightMinus100 - heightMinus100 * 10 / 100 < this.weight;
  }
};
console.log(person.fullName());
console.log(person.isWeightIdeal());
var countries = {
  ID: {
    province: ["bali", "medan", "banten", "jawa barat"],
    city: ["berastagi", "gianyar", "bandung", "tangerang selatan"]
  },
  MY: {}
}; //ini kalo print semua
//console.log(countries.ID);
//ini kalo print isinya dari ID contoh : city

console.log(countries.ID.city); //ini buat nyari
//console.log(countries?.ID?.province ?? "NOT FOUND");