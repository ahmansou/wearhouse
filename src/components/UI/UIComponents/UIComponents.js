import React from 'react';
import classes from './UIComponents.module.css';
import SearchIcon from '../../../assets/search.svg';
import ProfileIcon from '../../../assets/profile.svg';
import CartIcon from '../../../assets/cart.svg';
import rightArrow from '../../../assets/rightArrow.svg';
import leftArrow from '../../../assets/leftArrow.svg';

export const Separator = () => (
	<div className={classes.Separator} ></div>
)

export const Logo = () => (
	<p className={classes.Logo} >WEAR<span>house</span></p>
)

export const Search = () => (
	<img className={classes.Search} src={SearchIcon} alt='' />
)

export const Profile = () => (
	<img className={classes.Profile} src={ProfileIcon} alt='' />
)

export const Cart = () => (
	<img className={classes.Cart} src={CartIcon} alt='' />
)

export const RightArrow = (props) => (
	<div 
		className={classes.Arrows} 
		onClick={() => props.coverImageHandler(2)} >
		<img className={classes.Cart} src={rightArrow} alt='' />
	</div>
)

export const LeftArrow = (props) => (
	<div 
		className={classes.Arrows} 
		onClick={() => props.coverImageHandler(1)} >
		<img className={classes.Cart} src={leftArrow} alt='' />
	</div>
)

