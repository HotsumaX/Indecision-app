

console.log("app.js is running")

const info = {
  title: 'Indecision App',
  par: "this is some info",
  item1: 'Item one',
  item2: 'Item two',
  options:['one','two']
}

const template = (
<div>
  <h1>{info.title && info.title}</h1> 
  {info.par && <p>{info.par}</p>}
  {info.options.lenghth > 0 ? 'here are you options': 'no options'}
  <ol>
    <li>{info.item1}</li>
    <li>{info.item2}</li>
  </ol>
  </div>)

  const user = {
    name: 'Luis',
    age: 17,
    location: 'raleigh',
  }

  function getLocation(location)  {
    if (location){
      return <p>Location: {location}</p>
    }else{
      return undefined
    }
  } 



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