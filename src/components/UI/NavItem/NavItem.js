import React from 'react';
import classes from './NavItem.module.css';

const navItem = (props) => (
	<li className={classes.NavItem} onClick={props.cartHandler}>
		<a
			onClick={props.onClick}
			href={props.link}
			> {props.children} </a>
	</li>
)

export default navItem;