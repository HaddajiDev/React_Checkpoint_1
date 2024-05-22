import React from 'react'
import Products from '../product'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function CardComp(props) {
  return (
	<div className='parent'>
		<div className='Container'>		
			<Card style={{ width: '18rem' }}>
      			<Card.Img variant="top" src={Products[props.name].img_path} />
      			<Card.Body>
        			<Card.Title>{Products[props.name].name}</Card.Title>
        			<Card.Text>{Products[props.name].descrption}</Card.Text>       			        
        			<Button variant="primary">Buy Now</Button>					
      			</Card.Body>
    		</Card>
		</div>
	</div>
	
  );
}

export default CardComp;