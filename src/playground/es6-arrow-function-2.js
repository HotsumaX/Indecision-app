const add = function (a,b) {
  console.log(arguments)
  return a + b 
}

console.log(add(55, 1))

const user = {
  name:'Luis',
  cities:['New York', 'Dublin','Philidelphia'],
  printPlacesLived: function (){
    console.log(this.name)
    console.log(this.cities)
    this.cities.forEach((city) => {
      console.log(this.name + ' has lived in ' + city )
    })
  }
}
user.printPlacesLived()