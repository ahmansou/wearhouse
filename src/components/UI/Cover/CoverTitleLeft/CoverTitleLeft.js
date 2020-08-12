import React from 'react';
import classes from './CoverTitleLeft.module.css';
import {RedButton} from '../../UIComponents/Buttons/Buttons';

const coverTitleLeft = (props) => (

	<div className={classes.CoverTitleLeft} >
		<div className={classes.Left} >
			<p className={classes.Text} >
				{props.children.text.split('\n').map(i => {
					return <span>{i}<br /></span>
				})}
			</p>
			<ul className={classes.CoverTitleAltern} >{props.children.altern.split('\n').map(i => {
					return <li>{i}<br /></li>
				})}</ul>
			<RedButton>{props.children.button}</RedButton>
		</div>
		<div className={classes.Right}></div>
	</div>
);

export default coverTitleLeft;