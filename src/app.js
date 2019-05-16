

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



const templateTwo = (
  <div>
    <h1>{user.name ? user.name : 'Anonymous'}</h1>
    {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
    {getLocation(user.location)}
  </div>
)





const appRoot = document.getElementById('app')


ReactDOM.render(template,appRoot)