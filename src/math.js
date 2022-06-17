//created a new module for export

//single default
const pi = 3.1414962;

function doublePi() {
  return pi * 2;
}

function triplePi() {
  return pi * 3;
}

//export a single item
export default pi;

//export multiple exports non-default
export { doublePi, triplePi };
