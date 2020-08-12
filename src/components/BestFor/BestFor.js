import React from 'react';
import classes from './BestFor.module.css';
import BestForCard from './BestForCard/BestForCard';

import bestfor1 from '../../assets/bestfor/bestfor1.jpg'
import bestfor2 from '../../assets/bestfor/bestfor2.jpg'
import bestfor3 from '../../assets/bestfor/bestfor3.jpg'

const bestFor = () => (
	<div className={classes.BestFor} >
		<div className={classes.Surround} ></div>
		<div className={classes.Content}>
			<BestForCard
				image={bestfor1}
				text='Best set for men'
				altern='This month'
			 />
			<BestForCard
				image={bestfor2}
				text='Best for class'
				altern='altern 2'
			 />
			<BestForCard
				image={bestfor3}
				text='Best for women'
				altern='This week'
			 />
		</div>
		<div className={classes.Surround} ></div>
	</div>
);

export default bestFor;