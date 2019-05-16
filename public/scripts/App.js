'use strict';

var add = function add(a, b) {
  console.log(arguments);
  return a + b;
};

console.log(add(55, 1));

var user = {
  name: 'Luis',
  cities: ['New York', 'Dublin', 'Philidelphia'],
  printPlacesLived: function printPlacesLived() {
    var _this = this;

    console.log(this.name);
    console.log(this.cities);
    this.cities.forEach(function (city) {
      console.log(_this.name + ' has lived in ' + city);
    });
  }
};
user.printPlacesLived();
