import React from 'react';
import './style.css';
import Greet from './components/Greet';
import { Welcome } from './components/Welcome';
import { Test } from './components/Testclass';
export default function App() {
  let name = 'Suraj';

  return (
    <div>
      <Welcome />
      <Greet />
      <Test />
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}
