import React from 'react';
import classes from './Buttons.module.css';
import Arrow from '../../../../assets/rightArrow.svg';

export const RedButton = (props) => (
	<div 
		className={classes.RedButton} >
			<p>{props.children}</p>
			<img className={classes.RedButtonImg} src={Arrow} alt='' />
	</div>
);