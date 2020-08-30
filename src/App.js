import React, {Component} from 'react';
import Aux from './hoc/Aux';
import Layout from './components/Layout/Layout';
import Cover from './components/UI/Cover/Cover';
import BestFor from './components/BestFor/BestFor';
import Selection from './components/Selection/Selection';
import Coupon from './components/Coupon/Coupon';
import productImg from './assets/product.jpg';
// import BackDrop from './components/UI/BackDrop/BackDrop'
import './App.css';

class App extends Component {
  state = {
    products: [
      {id: '1', name: 'bag1', price: 199.99, image: productImg, description: 'Description1', stock: 100},
      {id: '2', name: 'bag2', price: 299.99, image: productImg, description: 'Description2', stock: 4000},
      {id: '3', name: 'bag3', price: 399.99, image: productImg, description: 'Description3', stock: 23000},
      {id: '4', name: 'bag4', price: 499.99, image: productImg, description: 'Description4', stock: 10000},
      {id: '5', name: 'bag5', price: 599.99, image: productImg, description: 'Description5', stock: 100000},
      {id: '6', name: 'bag6', price: 699.99, image: productImg, description: 'Description6', stock: 10000},
    ],
    cart: [],
    totalCartPrice: 0,
  }

  calculTotalCartPrice = (product, quantity) => {
    let totalPrice = this.state.totalCartPrice;
    totalPrice += product.price * quantity;
    this.setState({totalCartPrice: totalPrice});
  }

  checkIfExistIncart = (newPrd) => {
    for (const index in this.state.cart) {
      if (newPrd.id === this.state.cart[index].prd.id) {
        console.log('prd', this.state.cart[index])
        console.log('index', index)
        return index
      }
    }
    return -1
  }

  addToCart = (product, quantity) => {
    if (quantity <= product.stock) {
      const index = this.checkIfExistIncart(product)
      console.log('return', index)
      if (index > -1) {
        let cartUpdated = [...this.state.cart];
        const prd = {...cartUpdated[index]}
        prd.qnt += quantity
        console.log('prdouct', prd)
        console.log('prdouct quantity', product.stock)
        if (prd.qnt <= product.stock) {
          cartUpdated[index] = prd
          this.setState({cart: cartUpdated})
        }
      }
      else {
        this.setState({cart: [...this.state.cart, {prd: product, qnt: quantity}]});
      }
    }
    this.calculTotalCartPrice(product, quantity)
  }
  
  removeFromCart = (product) => {
    let cartUpdated = [...this.state.cart];
    const index = this.checkIfExistIncart(product);
    const qnt = cartUpdated[index].qnt * -1;

    cartUpdated.splice(index, 1);
    this.setState({cart: cartUpdated});
    this.calculTotalCartPrice(product, qnt)
    
  }

  render() {
    return (
      <Aux>
        <Layout 
          cart={this.state.cart} 
          removeFromCart={this.removeFromCart}
          calculTotalCartPrice={this.calculTotalCartPrice}
          totalCartPrice={this.state.totalCartPrice} >
          {/* <div onClick={() => this.addToCart(this.state.products[0], 3)} >dada</div>
          <div onClick={() => this.addToCart(this.state.products[2], 5)} >dada</div>
          <div onClick={() => this.addToCart(this.state.products[3], 100)} >dada</div>
          <div onClick={() => this.addToCart(this.state.products[4], 100)} >dada</div>
          <div onClick={() => this.addToCart(this.state.products[5], 100)} >dada</div> */}
          {/* <Cover />
          <BestFor /> */}
          <Selection 
            products={this.state.products}
            cart={this.state.cart}
            addToCart={this.addToCart} 
            />
          <Coupon amount="5" />
        </Layout>
      </Aux>
    )
  }
}

export default App;
