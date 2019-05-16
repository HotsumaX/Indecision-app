

console.log("app.js is running")

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

  const appRoot = document.getElementById('app')
const info = {
  title: 'Indecision App',
  par: "this is some info",
  item1: 'Item one',
  item2: 'Item two',
  options:[]
}

const onFormSubmit = (e) => { 
  e.preventDefault()
  console.log("form submitted!")
  const option = e.target.elements.option.value
  console.log(option)
  if (option) {
    info.options.push(option)
    e.target.elements.option.value = ""
    render()
  }
}

const onRemoveAll =() =>{
  info.options = []
  render()
}

const numbers = [55,101,1000]

const render= () =>{
  const template = (
<div>
  <h1>{info.title && info.title}</h1> 
  {info.par && <p>{info.par}</p>}
  {info.options.length > 0 ? 'Here are you options': 'No Options'}
  <p>{info.options.length}</p>
  <button onClick={onRemoveAll}>Remove All</button>
  {/* {
    numbers.map(number => {
      return <p key={number}>Number: {number}</p>
    })
  } */}
  <ol>
    {/* <li>{info.item1}</li>
    <li>{info.item2}</li> */}

    {info.options.map(option =>{
      return <li key={option}>{option}</li>
    })}
  </ol>

    <form onSubmit={onFormSubmit} >
      <input type="text" name="option" />
      <button>Add Option</button>
    </form>
  </div>)
   ReactDOM.render(template, appRoot) 
  }


 

  render()
