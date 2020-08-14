import React from 'react';
import classes from './Drawer.module.css';
import NavItem from '../../NavItem/NavItem';

const drawer = (props) => {
	let drawerClass = [classes.Drawer, classes.Close];
	if (props.show)
		drawerClass = [classes.Drawer, classes.Open];
	return (
		<div className={drawerClass.join(' ')} >
			<ul>
				<NavItem>Categories</NavItem>
				<NavItem>Sport</NavItem>
				<NavItem>Men</NavItem>
				<NavItem>Women</NavItem>
				<NavItem>Kids</NavItem>
				<NavItem>Profile</NavItem>
				<NavItem>Cart</NavItem>
			</ul>
		</div>
	);
}

export default drawer;