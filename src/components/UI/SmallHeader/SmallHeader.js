import React from 'react';
import classes from './SmallHeader.module.css';
import {Logo, OpenMenu} from "../UIComponents/UIComponents";
// import Drawer from './Drawer/Drawer';

const smallHeader = (props) => (
	<header className={classes.SmallHeaderH} >
		<div className={classes.SmallHeader} >
			<div className={classes.RowLogo} >
				<Logo />
			</div>
			<div className={classes.RowCart} >
				<div className={classes.RowCart} onClick={props.drawerHandler}>
					<OpenMenu />
				</div>
			</div>
		</div>
	</header>
)

export default smallHeader;