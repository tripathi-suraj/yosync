import React from 'react';

//1.Using simple function
// function Greet() {
//   return <h1>Hello Suraj</h1>;
// }

// 2. Using Arraow Function(prefer it)
const Greet = (props) => <h1>Hello {props.name}</h1>;
export default Greet;
