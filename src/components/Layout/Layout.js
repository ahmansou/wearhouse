import React, {Component} from 'react';
import Aux from '../../hoc/Aux';
import classes from './Layout.module.css';
import TopBar from '../UI/TopBar/TopBar';
import Header from '../UI/Header/Header';
import SmallHeader from '../UI/SmallHeader/SmallHeader';
import Drawer from '../UI/SmallHeader/Drawer/Drawer';
import BackDrop from '../UI/BackDrop/BackDrop';
import Footer from '../UI/Footer/Footer';

class Layout extends Component {
	state = {
		showDrawer: false,
		showCategories: false,
	}

	drawerHandler = () => {
		let drawerUpdated = this.state.showDrawer;
		this.setState({showDrawer: !drawerUpdated});
	}

	categoriesHandler = () => {
		let categoriesUpdated = this.state.showCategories;
		this.setState({showCategories: !categoriesUpdated});
	}
	
	render() {
		return (
			<Aux>
				<Drawer 
					show={this.state.showDrawer}
					showCat={this.state.showCategories}
					categoriesHandler={this.categoriesHandler}
				/>
				{this.state.showDrawer ? <BackDrop drawerHandler={this.drawerHandler} /> : null}
				<TopBar />
				<Header />
				<SmallHeader drawerHandler={this.drawerHandler} />
				<main className={classes.Content} >
					{this.props.children}
				</main>
				<Footer />
			</Aux>
		)
	}
}

export default Layout;