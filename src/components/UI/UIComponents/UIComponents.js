import React from 'react';
import classes from './UIComponents.module.css';
import { Menu, NavigateNext, NavigateBefore } from '@material-ui/icons';

export const Separator = () => (
	<div className={classes.Separator} ></div>
)

export const Logo = () => (
	<p className={classes.Logo} >WEAR<span>house</span></p>
)

export const OpenMenu = () => (
	<Menu className={classes.OpenMenu} />
)

export const RightArrow = (props) => (
	<div 
		className={classes.Arrows} 
		onClick={() => props.coverImageHandler(2)} >
		<NavigateNext />
	</div>
)

export const LeftArrow = (props) => (
	<div 
		className={classes.Arrows} 
		onClick={() => props.coverImageHandler(1)} >
		<NavigateBefore />
	</div>
)

export const OneInputForm = (props) => (
	<form className={classes.OneInputForm} >
		<input placeholder={props.placeholder} />
		<button>{props.buttonTexts}</button>
	</form>
)

export const OutStock = () => (
	<div className={classes.OutStock} ><p>Out of stock</p></div>
)

// export const QuantityInput = () => ()