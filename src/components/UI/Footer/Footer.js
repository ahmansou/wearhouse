import React from 'react';
import classes from './Footer.module.css';
import {Logo} from '../UIComponents/UIComponents';
import {FooterMenu, SocialMenu} from './FooterMenus/FooterMenus';
// import Aux from '../../../hoc/Aux';

const footer = () => {
	const links = [
		['Delivery', 'Legal notice', 'Terms and conditions of use'],
		['Login', 'Addresses', 'Order History'],
		['Price Drop', 'Stores', 'Manufacturers', 'New products', 'Sitemap'],
		['WEARHOUSE', '123 Boink Street, New York', '666 666 666', 'contact@wearhouse.com']
	]
	return (
		<footer>
			<div className={classes.Footer} >
				<div className={classes.Menus}>
					<div className={classes.Surround} ></div>
					<div className={classes.Content} >
						<FooterMenu title='Information' links={links[0]} />
						<FooterMenu title='Account' links={links[1]} />
						<FooterMenu title='Customs' links={links[2]} />
						<FooterMenu title='Contact us' links={links[3]} />
					</div>
					<div className={classes.Surround} ></div>
				</div>
				<div className={classes.Social}>
					<div className={classes.Surround} ></div>
					<div className={classes.Content} >
						<Logo />
						<SocialMenu 
							ig={true}
							fb={true}
							pin={true}
							yt={true}
							twit={true} />
					</div>
					<div className={classes.Surround} ></div>
				</div>
			</div>
			{/* <div className={classes.FooterCont} ></div> */}
		</footer>
	)
}

export default footer;