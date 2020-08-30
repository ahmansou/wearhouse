import React from 'react';
import classes from './Buttons.module.css';
import { ShoppingCart, ArrowForwardIos } from '@material-ui/icons';

export const RedButton = (props) => (
	<div 
		className={classes.RedButton} >
			<p>{props.children}</p>
			<ArrowForwardIos className={classes.RedButtonImg}
				style={{ fontSize: 30 }}
			/>
	</div>
);

export const BlackButton = (props) => (
	<div
		className={classes.BlackButton}
	>{props.children}</div>
)

export const AddToCartButton = (props) => (
	<div 
		className={classes.AddToCartButton}
		onClick={props.addToCart} >
			<p>{props.children}</p>
			<ShoppingCart />
	</div>
);