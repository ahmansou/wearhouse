import React from 'react';
import classes from './BackDrop.module.css';

const backDrop = (props) => (
	<div 
	className={classes.BackDrop} 
	onClick={props.drawerHandler}
	></div>
)

export default backDrop;