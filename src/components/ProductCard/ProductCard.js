import React from 'react';
import classes from './ProductCard.module.css';
import {AddToCartButton} from '../UI/UIComponents/Buttons/Buttons';

const productCard = (props) => (
	<div className={classes.ProductCard} >
		<div className={classes.Option}>
			<p>dsds</p>
			<p>lala</p>
			<p>dada</p>
		</div>
		<img className={classes.Image} src={props.image} alt='' />
		<p className={classes.Name} >{props.name}</p>
		<p className={classes.Price} >${props.price}</p>
		<AddToCartButton>Add to cart</AddToCartButton>
	</div>
);

export default productCard;