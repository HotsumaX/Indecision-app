// const templateTwo = (
//   <div>
//     <h1>{user.name ? user.name : 'Anonymous'}</h1>
//     {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
//     {getLocation(user.location)}
//   </div>
// )
let count = 0

const addOne = () =>{
  count++
  renderCounterApp()
  console.log("add one ")
}
const minusOne=()=>{
  count--
  renderCounterApp()
  console.log("minus two ")
}
const reset = () => {
  count = 0
  renderCounterApp()
  console.log(" reset number")
}

const appRoot = document.getElementById('app')

const renderCounterApp = () => {
  const templateTwo = (
  <div>
    <h1>Count: {count}</h1>
    <button id="id" className='button' onClick={addOne}>+1</button>
    <button id="id" className='button' onClick={minusOne}>-1</button>
    <button id="id" className='button' onClick={reset}>Reset Count</button>
  </div>
)
ReactDOM.render(templateTwo,appRoot)
}

renderCounterApp()