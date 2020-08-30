import React, {Component} from 'react';
import classes from './ProductCard.module.css';
import {AddToCartButton} from '../UI/UIComponents/Buttons/Buttons';
import { Loyalty, Visibility, Compare} from '@material-ui/icons';
import BackDrop from '../UI/BackDrop/BackDrop';
import AddToCartModal from '../Selection/AddToCartModal/AddToCartModal';

class productCard extends Component {
	state = {
		addToCartModalShow: false,
	}

	addToCartModelHandler = () => {
		let addToCartModelUpdated = this.state.addToCartModalShow;
		this.setState({addToCartModalShow: !addToCartModelUpdated});
	}

	render () {
		return (
			<div className={classes.ProductCard} >
				{this.state.addToCartModalShow ? 
				<AddToCartModal 
				addToCart={this.props.addToCart}
				close={this.addToCartModelHandler}
				product={this.props.product} /> : null}
				{this.state.addToCartModalShow ? <BackDrop drawerHandler={this.addToCartModelHandler} /> : null}
				<div className={classes.Option}>
					<div><Loyalty /></div>
					<div onClick={this.addToCartModelHandler} ><Visibility /></div>
					<div><Compare /></div>
				</div>
				<img className={classes.Image} src={this.props.product.image} alt='' />
				<p className={classes.Name} >{this.props.product.name}</p>
				<p className={classes.Price} >{this.props.product.price}</p>
				<AddToCartButton addToCart={() => this.props.addToCart(this.props.product, 1)} >Add to cart</AddToCartButton>
			</div>
		);
	}
}

export default productCard;