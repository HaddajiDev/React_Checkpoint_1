import React from 'react'
import CardComp from './components/CardComp';

import './style.css';

function App() {
  return (
    <div>
      <div className='title_con'>
        <h1 className='title_s'>Animal store</h1>
      </div>
      
      <div className='comp_conatainer'>
        <CardComp name='0' />
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