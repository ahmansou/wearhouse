import React from 'react';
import classes from './CoverTitleRight.module.css';
import {RedButton} from '../../UIComponents/Buttons/Buttons';

const coverTitleRight = (props) => (

	<div className={classes.CoverTitleRight} >
		<div className={classes.Left} >
			<p className={classes.Text} >
				{props.children.text.split('\n').map(i => {
					return <span>{i}<br /></span>
				})}
			</p>
			<p className={classes.CoverTitleAltern} >{props.children.altern.split('\n').map(i => {
					return <span>{i}<br /></span>
				})}</p>
			<RedButton>{props.children.button}</RedButton>
		</div>
		<div className={classes.Right}></div>
	</div>
);

export default coverTitleRight;