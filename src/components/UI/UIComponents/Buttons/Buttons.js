import React from 'react';
import classes from './Buttons.module.css';
import Arrow from '../../../../assets/rightArrow.svg';
import AddToCartIcon from '../../../../assets/addCart.svg';

export const RedButton = (props) => (
	<div 
		className={classes.RedButton} >
			<p>{props.children}</p>
			<img className={classes.RedButtonImg} src={Arrow} alt='' />
	</div>
);

export const AddToCartButton = (props) => (
	<div 
		className={classes.AddToCartButton} >
			<p>{props.children}</p>
			<img className={classes.AddToCartImg} src={AddToCartIcon} alt='' />
	</div>
);