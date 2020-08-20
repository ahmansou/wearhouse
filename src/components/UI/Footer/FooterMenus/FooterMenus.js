import React from 'react';
import classes from './FooterMenus.module.css';

const footerMenu = (props) => (
	<div className={classes.FooterMenu} >
		<h3>{props.title}</h3>
		<ul>
			{props.links.map(i => {
					return <li className={classes.Link}>{i}</li>
				})}
		</ul>
	</div>
)

export default footerMenu;