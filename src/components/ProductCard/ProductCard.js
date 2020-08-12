import React from 'react';
import classes from './ProductCard.module.css';
import {RedButton} from '../UI/UIComponents/Buttons/Buttons';

const productCard = (props) => (
	<div className={classes.ProductCard} >
		<img src={props.image} alt='' />
		<p>{props.name}</p>
		<p className={classes.Price} >${props.price}</p>
		<RedButton>Add to cart</RedButton>
	</div>
);

export default productCard;