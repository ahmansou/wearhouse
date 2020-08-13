import React from 'react';
import classes from './Drawer.module.css';

const drawer = (props) => {
	let drawerClass = [classes.Drawer, classes.Close];
	if (props.show)
		drawerClass = [classes.Drawer, classes.Open];
	return (
		<div className={drawerClass.join(' ')} >
			dsds
		</div>
	);
}

export default drawer;