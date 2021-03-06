import React from 'react';
import classes from './Coupon.module.css';
import {OneInputForm} from '../UI/UIComponents/UIComponents';
import Cover from '../../assets/covers/store2.jpg'

const coupon = (props) => (
	<div className={classes.CouponContainer} 
	style={{backgroundImage: `url(${Cover})`}}
		>
		<div className={classes.Surround} ></div>
		<div className={classes.Content} >
			<div className={classes.MainText} >
				<p>Sign to our Newsletter</p>
				<h1>and get {props.amount}$ discount</h1>
			</div>
			<OneInputForm
				placeholder='Your email address'
				buttonTexts='Subscribe'
			/>
			<p className={classes.Altern} >* valid only in June</p>
		</div>
		<div className={classes.Surround} ></div>
	</div>
)

export default coupon;
