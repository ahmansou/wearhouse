import React, {Component} from 'react';
import Aux from './hoc/Aux';
import Layout from './components/Layout/Layout';
import Cover from './components/UI/Cover/Cover';
import BestFor from './components/BestFor/BestFor';
import Selection from './components/Selection/Selection';
import Coupon from './components/Coupon/Coupon';
import productImg from './assets/product.jpg';
import './App.css';

class App extends Component {
  state = {
    products: [
      {name: 'bag1', price: 199.99, image: productImg},
      {name: 'bag2', price: 299.99, image: productImg},
      {name: 'bag3', price: 399.99, image: productImg},
      {name: 'bag4', price: 499.99, image: productImg},
      {name: 'bag5', price: 599.99, image: productImg},
      {name: 'bag6', price: 699.99, image: productImg},
    ],
    // showDrawer: false,
  }

  // drawerHandler = () => {
  //   let drawerUpdated = this.state.showDrawer;
  //   this.setState({showDrawer: !drawerUpdated});
  // }

  render() {
    return (
      <Aux>
        <Layout>
          <Cover />
          <BestFor />
          <Selection products={this.state.products} />
          <Coupon amount="5" />
          <div>who we are</div>
          <div>testimonials</div>
          <div>Accordions</div>
          <div>newsletter</div>
        </Layout>
      </Aux>
    )
  }
}

export default App;
