"use strict";

var App = function App() {
  var testing = React.createElement(
    "div",
    null,
    "test this"
  );
  ReactDOM.render(testing, document.getElementById("app"));
};

App();
