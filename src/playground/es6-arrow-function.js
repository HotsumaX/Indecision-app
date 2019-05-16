// const square = function (x) {
//   return x * x
// }
// // const squareArrow = (x) => {
// //   return x * x 
// // }

// const squareArrow = (x) => x * x 
 
// console.log(square(8))
// console.log('this is the second component', squareArrow(9))
let fullName = "Luis Laborde"

const getFirstName = (fullName) =>{
  return fullName.split(' ')[0]
}

console.log(getFirstName(fullName))