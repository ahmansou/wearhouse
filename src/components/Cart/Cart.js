import React from 'react';
import classes from './Cart.module.css';
import CartItem from './CartItem/CartItem';
import Aux from '../../hoc/Aux';
import {BlackButton} from '../UI/UIComponents/Buttons/Buttons';
import {Close} from '@material-ui/icons';

const cartModal = (props) =>{ 
	let cartClass = [classes.CartModal, classes.CartModalClose];
	if (props.showCart)
		cartClass = [classes.CartModal, classes.CartModalOpen];

	return (
		<div className={cartClass.join(' ')} >
			<div className={classes.CartTitle} >
				<h1>Your Cart</h1>
				<div className={classes.Close} onClick={props.cartHandler} >
					<Close />
				</div>
			</div>
			<div className={classes.CartList} >
			{ props.cart.length ?
				props.cart.map((product, index) =>{
					return <CartItem 
						cartItem={product}
						cartQuantityHandler={props.cartQuantityHandler}
						removeFromCart={props.removeFromCart} />
				}) 
				: <p>Please add products to your cart</p> }
			</div>
			{ props.cart.length ?	
			<div className={classes.CheckoutSec} >
				<p className={classes.TotalPrice} >
					<span>Total Price : </span>
					<span>$ {props.totalCartPrice.toFixed(2)}</span>
				</p>
				<BlackButton>Checkout</BlackButton>
			</div>	
			: null }
		</div>
	);
}

export default cartModal;