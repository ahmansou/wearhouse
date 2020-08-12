import React from 'react';
import classes from './CoverTitleCenter.module.css';
import {RedButton} from '../../UIComponents/Buttons/Buttons';

const coverTitleCenter = (props) => {
	return (
	<div className={classes.CoverTitle} >
		<p className={classes.Text} >
			{props.children.text.split('\n').map(i => {
				return <span>{i}<br /></span>
			})}
		</p>
		<p className={classes.CoverTitleAltern} >{props.children.altern}</p>
		<RedButton>{props.children.button}</RedButton>
	</div>);
;}

export default coverTitleCenter;