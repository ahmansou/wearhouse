import React from 'react';
import classes from './SmallHeader.module.css';
import {Logo, OpenMenu} from "../UIComponents/UIComponents";

const smallHeader = (props) => (
	<header className={classes.SmallHeader} >
		<div className={classes.RowLogo} >
			<Logo />
		</div>
		<div className={classes.RowCart} >
			<OpenMenu />
		</div>
	</header>
)

export default smallHeader;