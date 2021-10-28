const person = {
  firstName: "Faqih",
  lastName: "Syakir",
  fullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
  weight: 100,
  height: 172,
  isWeightIdeal: function () {
    const heightMinus100 = this.height - 100;
    return heightMinus100 - (heightMinus100 * 10) / 100 < this.weight;
  },
};

console.log(person.fullName());
console.log(person.isWeightIdeal());

const countries = {
  ID: {
    province: ["bali", "medan", "banten", "jawa barat"],
    city: ["berastagi", "gianyar", "bandung", "tangerang selatan"],
  },
  MY: {
    province: ["selanggor"],
  },
};

//ini kalo print semua
//console.log(countries.ID);

//ini kalo print isinya dari ID contoh : city
console.log(countries.ID.city);

//ini buat memberi pesan kalo ada yang tidak ada
console.log(countries?.TH?.province ?? "NOT FOUND");
