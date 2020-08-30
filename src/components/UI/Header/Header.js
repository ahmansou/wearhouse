import React from 'react';
import classes from './Header.module.css';
import NavItem from '../NavItem/NavItem';
import {Logo} from "../UIComponents/UIComponents";
import CartModal from '../../Cart/Cart';
import BackDrop from '../BackDrop/BackDrop';
import { PersonOutline, Search, ShoppingCart} from '@material-ui/icons';

const header = (props) => (
	<header className={classes.HeaderH} >
		<div className={classes.Header} >
			<div className={classes.RowLogo} >
				<Logo />
			</div>
			<div className={classes.RowMenu} >
				<ul>
					<NavItem>Categories</NavItem>
					<NavItem>Sport</NavItem>
					<NavItem>Men</NavItem>
					<NavItem>Women</NavItem>
					<NavItem>Kids</NavItem>
				</ul>
			</div>
			<div className={classes.RowCart} >
				<ul>
					<NavItem><Search /></NavItem>
					<NavItem><PersonOutline /></NavItem>
					<NavItem cartHandler={props.cartHandler} ><ShoppingCart /></NavItem>
				</ul>
			</div>
			{props.showCart ? <BackDrop drawerHandler={props.cartHandler} /> : null}
			{/* {props.showCart ?  */}
			<CartModal 
				cart={props.cart} 
				cartHandler={props.cartHandler}
				showCart={props.showCart}
				removeFromCart={props.removeFromCart}
				calculTotalCartPrice={props.calculTotalCartPrice}
				totalCartPrice={props.totalCartPrice}
				cartQuantityHandler={props.cartQuantityHandler}
				 /> 
				 {/* : null } */}
		</div>
	</header>
)

export default header;