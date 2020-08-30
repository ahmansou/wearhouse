import React from 'react';
import classes from './CartItem.module.css';
import {Delete} from '@material-ui/icons';

const cartItem = (props) => (
	<div className={classes.CartItem} >
		<div className={classes.Image} 
			style={{backgroundImage: `url(${props.cartItem.prd.image})`}}></div>
		<div className={classes.Content} >
			<p>{props.cartItem.prd.name}</p>
			<p>{props.cartItem.prd.price} <span> x {props.cartItem.qnt}</span></p>
		</div>
		<div className={classes.Close} 
			onClick={() => props.removeFromCart(props.cartItem.prd)} >
			<Delete />
		</div>
	</div>
) 

export default cartItem;