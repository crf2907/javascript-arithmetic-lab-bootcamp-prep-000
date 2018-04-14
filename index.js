var a, b
function add(a,b){
  return (a+b)
}
function subtract(a,b){
  return (a-b)
}
function multiply(a,b){
  return (a*b)
}
function divide(a,b){
  return (a/b)
}
function inc(a){
  console.log(a++)
  return (a)
}
function dec(a){
  console.log(a--)
  return (a)
}
var integer
function makeInt(a){ //Parse a as an integer and return that integer.
  integer = parseInt(a, 10);
  return integer;
}
var decimal
function preserveDecimal(a){
  decimal = parseFloat(a,10);
  return decimal;
}
