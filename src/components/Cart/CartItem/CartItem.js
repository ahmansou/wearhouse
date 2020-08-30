import React from 'react';
import classes from './CartItem.module.css';
import {Delete, Add, Remove} from '@material-ui/icons';

const cartItem = (props) => (
	<div className={classes.CartItem} >
		<div className={classes.Image} 
			style={{backgroundImage: `url(${props.cartItem.prd.image})`}}></div>
		<div className={classes.Content} >
			<p>{props.cartItem.prd.name}</p>
			<p>{props.cartItem.prd.price} <span> x {props.cartItem.qnt}</span></p>
			<div className={classes.AddRemove} >
				<div 
					className={classes.AddRemoveBtn} 
					onClick={() => props.cartQuantityHandler(props.cartItem.prd, 0)} ><Remove /></div>
				<div 
					className={classes.AddRemoveBtn} 
					onClick={() => props.cartQuantityHandler(props.cartItem.prd, 1)} ><Add /></div>
			</div>
		</div>
		<div className={classes.Close} 
			onClick={() => props.removeFromCart(props.cartItem.prd)} >
			<Delete />
		</div>
	</div>
) 

export default cartItem;