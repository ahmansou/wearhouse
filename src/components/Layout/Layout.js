import React, {Component} from 'react';
import Aux from '../../hoc/Aux';
import classes from './Layout.module.css';
import TopBar from '../UI/TopBar/TopBar';
import Header from '../UI/Header/Header';

class Layout extends Component {
	render() {
		return (
			<Aux>
				<TopBar />
				<Header />
				<main className={classes.Content} >
					{this.props.children}
				</main>
				<div>footer</div>
			</Aux>
		)
	}
}

export default Layout;