"use strict";

console.log("app.js is running");

var info = {
  title: 'Indecision App',
  par: "this is some info",
  item1: 'Item one',
  item2: 'Item two',
  options: ['one', 'two']
};

var template = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    info.title && info.title
  ),
  info.par && React.createElement(
    "p",
    null,
    info.par
  ),
  info.options.lenghth > 0 ? 'here are you options' : 'no options',
  React.createElement(
    "ol",
    null,
    React.createElement(
      "li",
      null,
      info.item1
    ),
    React.createElement(
      "li",
      null,
      info.item2
    )
  )
);

var user = {
  name: 'Luis',
  age: 17,
  location: 'raleigh'
};

function getLocation(location) {
  if (location) {
    return React.createElement(
      "p",
      null,
      "Location: ",
      location
    );
  } else {
    return undefined;
  }
}

// const templateTwo = (
//   <div>
//     <h1>{user.name ? user.name : 'Anonymous'}</h1>
//     {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
//     {getLocation(user.location)}
//   </div>
// )
var count = 0;

var addOne = function addOne() {
  count++;
  renderCounterApp();
  console.log("add one ");
};
var minusOne = function minusOne() {
  count--;
  renderCounterApp();
  console.log("minus two ");
};
var reset = function reset() {
  count = 0;
  renderCounterApp();
  console.log(" reset number");
};

var appRoot = document.getElementById('app');

var renderCounterApp = function renderCounterApp() {
  var templateTwo = React.createElement(
    "div",
    null,
    React.createElement(
      "h1",
      null,
      "Count: ",
      count
    ),
    React.createElement(
      "button",
      { id: "id", className: "button", onClick: addOne },
      "+1"
    ),
    React.createElement(
      "button",
      { id: "id", className: "button", onClick: minusOne },
      "-1"
    ),
    React.createElement(
      "button",
      { id: "id", className: "button", onClick: reset },
      "Reset Count"
    )
  );
  ReactDOM.render(templateTwo, appRoot);
};

renderCounterApp();
