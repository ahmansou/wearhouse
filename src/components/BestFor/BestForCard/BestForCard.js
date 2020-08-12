import React from 'react';
import classes from './BestForCard.module.css';

const bestForCard = (props) => (

	<div className={classes.BestForCard} >
		{/* <div 
		style={{backgroundImage: `url(${props.image})`}}
		></div> */}
		<img src={props.image} alt={props.altern} />
		<h2>{props.text}</h2>
		<p>{props.altern}</p>
	</div>
);

export default bestForCard;