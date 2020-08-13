import React from 'react';
import classes from './Selection.module.css';
import ProductCard from '../ProductCard/ProductCard';
import {BlackButton} from '../UI/UIComponents/Buttons/Buttons';

const selection = (props) => (
	<div className={classes.Selection} >
		<div className={classes.Surround} ></div>
		<div className={classes.Content} >
			<h1>Our finest selection</h1>
			<div className={classes.HSeparator} ></div>
			<div className={classes.ProductList}>
				{props.products.map(product => {
					return <ProductCard 
					name={product.name}
					price={product.price}
					image={product.image}
					/>
				})}
			</div>
			<BlackButton>Show More Products</BlackButton>
		</div>
		<div className={classes.Surround} ></div>
	</div>
);

export default selection;