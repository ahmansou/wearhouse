import React from 'react';
import classes from './FooterMenus.module.css';
import {Instagram, 
	Twitter, 
	Facebook, 
	YouTube,
	Pinterest} from '@material-ui/icons';

export const FooterMenu = (props) => (
	<div className={classes.FooterMenu} >
		<h3>{props.title}</h3>
		<ul>
			{props.links.map(i => {
					return <li className={classes.Link}>{i}</li>
				})}
		</ul>
	</div>
);

export const SocialMenu = (props) => (
	<div className={classes.SocialMenu} >
		<ul>
			{props.ig ? <li><Instagram /></li> : null}
			{props.twit ? <li><Twitter /></li> : null}
			{props.fb ? <li><Facebook /></li> : null}
			{props.pin ? <li><Pinterest /></li> : null}
			{props.yt ? <li><YouTube /></li> : null}
		</ul>
	</div>
);

// export default footerMenu;