import React from 'react'
import Products from '../product'



function CardComp(value) {
  return (
	<div className='parent'>
		<div className='Container'>		
			<img src={Products[value.name].img_path} alt='img' className='img_'/>
			<h1>{Products[value.name].name}</h1>
			<h4>{Products[value.name].descrption}</h4>
			<h2>{Products[value.name].price}$</h2>
		</div>
	</div>
	
  );
}

export default CardComp;