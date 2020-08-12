import React, {Component} from 'react';
import classes from './Cover.module.css';
import {LeftArrow, RightArrow} from '../UIComponents/UIComponents';
import cover1 from '../../../assets/covers/store1.jpg';
import cover2 from '../../../assets/covers/store2.jpg';
import cover3 from '../../../assets/covers/store3.jpg';
import CoverTitleCenter from './CoverTitleCenter/CoverTitleCenter';
import CoverTitleLeft from './CoverTitleLeft/CoverTitleLeft';
import CoverTitleRight from './CoverTitleRight/CoverTitleRight';

class Cover extends Component {
	state = {
		coverImage: [
			{image: cover1},	
			{image: cover2},
			{image: cover3}
		],
		currentImage: 1,
		coverTitleText: [
			{text: 'Keep walking\ninto the right direction', altern: 'YOUR LIFESTYLE PULLS THE TRIGGER', button:'Get Going now'},
			{text: 'N. 1\ne-commerce', altern: 'Best Products\nBest Shipping\nBest Costumer Care', button:'Start Shopping Now'},
			{text: 'The Greatest\nSummer Mix', altern: 'Jeans Shorts\nShirts\nSandals', button:'Buy Nows'},
		]
	}

	coverImageHandler = (direction) => {
		let updatedImage = this.state.currentImage;
		const lastImg = this.state.coverImage.length - 1;

		if (direction === 1) {
			if (this.state.currentImage - 1 < 0) {
				updatedImage = lastImg;
			}
			else {
				updatedImage = this.state.currentImage - 1;
			}
		}
		if (direction === 2) {
			if (this.state.currentImage === lastImg) {
				updatedImage = 0;
			}
			else {
				updatedImage = this.state.currentImage + 1;
			}
		}
		console.log(updatedImage);
		this.setState({currentImage: updatedImage})
	}
	
	render () {
		let current = this.state.currentImage;

		return (
			<div 
			className={classes.Cover} 
			style={{backgroundImage: `url(${this.state.coverImage[current].image})`}} 
			>
				<LeftArrow coverImageHandler={this.coverImageHandler}/>
				{
					current === 0 ? 
						<CoverTitleCenter>{this.state.coverTitleText[current]}</CoverTitleCenter>
					: current === 1 ?
						<CoverTitleRight>{this.state.coverTitleText[current]}</CoverTitleRight>
						: 
						<CoverTitleLeft>{this.state.coverTitleText[current]}</CoverTitleLeft>
				}
				<RightArrow coverImageHandler={this.coverImageHandler}/>
			</div>
		);
	}
}

export default Cover;