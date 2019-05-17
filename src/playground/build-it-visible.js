


let visible = false

const handleChange = () => {
  visible = !visible
  render()
   console.log(visible)
}

const appRoot = document.getElementById('app')

const render = () => {
  const test = (
  <div>
    <h1>Visibility Toggle</h1>
  <button onClick={handleChange}>Show Details</button>
  { visible === true ? <h1>some stuff goes here</h1> : null }
  </div>
     ) 
  
  ReactDOM.render(test,appRoot)
}


render()