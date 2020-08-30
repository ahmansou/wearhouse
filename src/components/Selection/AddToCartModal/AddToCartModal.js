import React, {Component} from 'react';
import classes from './AddToCartModal.module.css'
import {Close, Add, Remove} from '@material-ui/icons';
import {OutStock} from '../../UI/UIComponents/UIComponents';
import {AddToCartButton} from '../../UI/UIComponents/Buttons/Buttons';


class addToCartModal extends Component {
	state = {
		quantity: 1,
		// classButton : [classes.Arrow],
	};
	

	quantityHandler = (direction) => {
		let newQuantity = this.state.quantity;
		let newClassButton = this.state.classButton;
		if (direction === 0)
		{
			if (newQuantity > 1 )
				newQuantity -= 1;
			// else
			// 	newClassButton = [classes.Arrow, classes.Disabled];

		}
		if (direction === 1)
		{
			if (newQuantity < this.props.product.stock)
				newQuantity += 1;
			// else
			// 	newClassButton = [classes.Arrow, classes.Disabled];
		}
		this.setState({quantity: newQuantity, classButton: newClassButton});
	}

	render (){
		let classButton = [classes.Arrow, classes.Arrow];

		if (this.state.quantity <= 0)
			classButton = [classes.Arrow, classes.Disabled];

		return (
			<div className={classes.AddToCartModal} >
				<div className={classes.Close} onClick={this.props.close} >
					<Close />
				</div>
				<div className={classes.ImageDiv} >
					<img className={classes.Image} src={this.props.product.image} alt='' />
				</div>
				<div className={classes.Content} >
					<p className={classes.Name} >{this.props.product.name}</p>
					<div className={classes.PriceStock} >
						<p className={classes.Price} >{this.props.product.price}</p>
						{this.props.product.stock === 0 ? <OutStock /> :null}
					</div>
					<p className={classes.Description} > {this.props.product.description} </p>
					<p>Quantity : </p>
					<div className={classes.Options} >
						<div className={classButton.join(' ')} onClick={() => this.quantityHandler(0)} ><Remove /></div>
						<input type='number' value={this.state.quantity} />
						<div className={classButton.join(' ')} onClick={() => this.quantityHandler(1)} ><Add /></div>
					</div>
					<AddToCartButton addToCart={() => this.props.addToCart(this.props.product, this.state.quantity)} >Add to cart</AddToCartButton>
				</div>
			</div>
		);
	}
}

export default addToCartModal; 