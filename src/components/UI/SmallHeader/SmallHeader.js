import React from 'react';
import classes from './SmallHeader.module.css';
import {Logo, OpenMenu} from "../UIComponents/UIComponents";
import { PersonOutline, Search, ShoppingCart} from '@material-ui/icons';
import NavItem from '../NavItem/NavItem';

const smallHeader = (props) => (
	<header className={classes.SmallHeaderH} >
		<div className={classes.SmallHeader} >
			<div className={classes.RowLogo} >
				<Logo />
			</div>
			<div className={classes.RowCart} >
				<div className={classes.RowCart} onClick={props.drawerHandler}>
					<NavItem><OpenMenu /></NavItem>
				</div>
			</div>
		</div>
	</header>
)

export default smallHeader;