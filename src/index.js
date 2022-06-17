import React from "react";
import ReactDOM from "react-dom";
//imported dfault can change the import name if want
// import pi from "./math.js";

// to import all - the constant pi and the functions
import pi, { doublePi, triplePi } from "./math.js";

// can import everything with this statement.
// import * as pi from <filename>

ReactDOM.render(
  <ul>
    {/* //use the constant */}
    <li>{pi}</li>
    {/* use the function add () */}
    <li>{doublePi()}</li>
    <li>{triplePi()}</li>
  </ul>,
  document.getElementById("root")
);
