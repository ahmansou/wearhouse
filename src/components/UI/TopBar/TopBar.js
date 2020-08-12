import React from 'react';
import classes from './TopBar.module.css';
import NavItem from '../NavItem/NavItem';
import {Separator} from '../UIComponents/UIComponents';

const topBar = () => (
	<div className={classes.TopBar} >
		<ul className={classes.Left} >
			<NavItem>Sitemap</NavItem>
			<Separator />
			<NavItem>Contact Us</NavItem>
		</ul>
		<ul className={classes.Right} >
			<NavItem>English</NavItem>
			<Separator />
			<NavItem>Wishlist</NavItem>
			<Separator />
			<NavItem>Compare</NavItem>
		</ul>
	</div>
);

export default topBar;