const person = {
  firstName: "Faqih",
  lastName: "Syakir",
  fullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
  weight: 90,
  height: 172,
  weightIdeal: function () {
    const heightMinus100 = this.height - 100;
    return heightMinus100 - (heightMinus100 * 10) / 100;
  },
  needDiet: function () {
    const weightIdeal = this.weightIdeal();
    if (weightIdeal - 5 > this.weight)
      return (
        "you need more protein, need more " + (weightIdeal - this.weight) + "kg"
      );
    else if (weightIdeal + 5 < this.weight)
      return (
        " you neeed a mayo diet, need reduce" +
        (this.weight - weightIdeal) +
        "kg"
      );
    return "you are in a good shape";
  },
};

console.log(person.fullName());
console.log(person.weightIdeal());
console.log(person.needDiet());

// const countries = {
//   ID: {
//     province: ["bali", "medan", "banten", "jawa barat"],
//     city: ["berastagi", "gianyar", "bandung", "tangerang selatan"],
//   },
//   MY: {
//     province: ["selanggor"],
//   },
// };

//ini kalo print semua
//console.log(countries.ID);

//ini kalo print isinya dari ID contoh : city
// console.log(countries.ID.city);

//ini buat memberi pesan not found jika ada yang tidak ada
// console.log(countries?.TH?.province ?? "NOT FOUND");
