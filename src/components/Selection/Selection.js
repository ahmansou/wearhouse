import React from 'react';
import classes from './Selection.module.css';
import ProductCard from '../ProductCard/ProductCard';

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
		</div>
		<div className={classes.Surround} ></div>
	</div>
);

export default selection;