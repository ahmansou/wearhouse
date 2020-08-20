import React from 'react';
import classes from './Drawer.module.css';
import {Logo}  from '../../UIComponents/UIComponents';
import {ArrowDropDown} from '@material-ui/icons';

const drawer = (props) => {
	let drawerClass = [classes.Drawer, classes.Close];
	if (props.show)
		drawerClass = [classes.Drawer, classes.Open];

	let categoriesClass = [classes.CategoriesDrawerClose, classes.CategoriesDrawer];
	if (props.showCat)
		categoriesClass = [classes.CategoriesDrawerOpen, classes.CategoriesDrawer];
	 
	return (
		<div className={drawerClass.join(' ')} >
			<ul>
				<li><Logo style={{color: "#FFFFFF"}} /></li>
				<li onClick={props.categoriesHandler} >
					Categories <ArrowDropDown />
				</li>
				<li className={categoriesClass.join(' ')} >
					<ul>
						<li>Sport</li>
						<li>Men</li>
						<li>Women</li>
						<li>Kids</li>
					</ul>
				</li>
				<li>
					<div className={classes.HSeparator} ></div>
				</li>
				<li>Profile</li>
				<li>Cart</li>
			</ul>
		</div>
	);
}

export default drawer;