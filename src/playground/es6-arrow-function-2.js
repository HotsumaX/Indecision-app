const add = function (a,b) {
  console.log(arguments)
  return a + b 
}

console.log(add(55, 1))

const user = {
  name:'Luis',
  cities:['New York', 'Dublin','Philidelphia'],
  printPlacesLived() {
    //console.log(this.name)
    //console.log(this.cities)
    return this.cities.map(city =>  this.name + ' has lived in ' + city + '!' )
    return cityMessages


    // this.cities.forEach((city) => {
    //   console.log(this.name + ' has lived in ' + city )
    // })
  }
}
console.log(user.printPlacesLived())

const multiplier = {
  numbers : [1,2,3],
  multiplyBy : 2,
  multiply() {
    return this.numbers.map(number =>{
      return number * this.multiplyBy
    })
  }
}

console.log(multiplier.multiply())


