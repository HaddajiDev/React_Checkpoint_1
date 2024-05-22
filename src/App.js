import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import CardComp from './components/CardComp';

import './style.css';
import NavBar from './components/NavBar';

function App() {
  const name="ahmed";
  return (
    <div>     
      <NavBar />
      <div className='comp_conatainer'>
        <CardComp name='0'  nom={name}/>
        <CardComp name='1' />
        <CardComp name='2' />
        <CardComp name='3' />
        <CardComp name='4' />
        <CardComp name='5' />
      </div>
    </div>
    
  );
}

export default App