'use strict';

console.log("app.js is running");

var user = {
  name: 'Luis',
  age: 17,
  location: 'raleigh'
};

function getLocation(location) {
  if (location) {
    return React.createElement(
      'p',
      null,
      'Location: ',
      location
    );
  } else {
    return undefined;
  }
}

var appRoot = document.getElementById('app');

var info = {
  title: 'Indecision App',
  par: "this is some info",
  item1: 'Item one',
  item2: 'Item two',
  options: []
};

var onFormSubmit = function onFormSubmit(e) {
  e.preventDefault();
  console.log("form submitted!");
  var option = e.target.elements.option.value;
  console.log(option);
  if (option) {
    info.options.push(option);
    e.target.elements.option.value = "";
    render();
  }
};

var onRemoveAll = function onRemoveAll() {
  info.options = [];
  render();
};

var onMakeDecision = function onMakeDecision() {
  var randomNum = Math.floor(Math.random() * info.options.length);
  var option = info.options[randomNum];
  alert(option);
};

var numbers = [55, 101, 1000];

var render = function render() {
  var template = React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      info.title && info.title
    ),
    info.par && React.createElement(
      'p',
      null,
      info.par
    ),
    info.options.length > 0 ? 'Here are you options' : 'No Options',
    React.createElement('br', null),
    React.createElement(
      'button',
      { disabled: info.options.length === 0, onClick: onMakeDecision },
      'what should I do'
    ),
    React.createElement('br', null),
    React.createElement(
      'button',
      { onClick: onRemoveAll },
      'Remove All'
    ),
    React.createElement(
      'ol',
      null,
      info.options.map(function (option) {
        return React.createElement(
          'li',
          { key: option },
          option
        );
      })
    ),
    React.createElement(
      'form',
      { onSubmit: onFormSubmit },
      React.createElement('input', { type: 'text', name: 'option' }),
      React.createElement(
        'button',
        null,
        'Add Option'
      )
    )
  );
  ReactDOM.render(template, appRoot);
};

render();
