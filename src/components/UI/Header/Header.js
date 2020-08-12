import React from 'react';
import classes from './Header.module.css';
import NavItem from '../NavItem/NavItem';
import {Logo, Search, Profile, Cart} from "../UIComponents/UIComponents";

const header = (props) => (
	<header className={classes.Header} >
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
				<NavItem><Profile /></NavItem>
				<NavItem><Cart /></NavItem>
			</ul>
		</div>
	</header>
)

export default header;