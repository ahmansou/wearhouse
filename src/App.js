import React, {Component} from 'react';
import Aux from './hoc/Aux';
import Layout from './components/Layout/Layout';
import Cover from './components/UI/Cover/Cover';
import BestFor from './components/BestFor/BestFor';
import './App.css';

class App extends Component {
  render() {
    return (
      <Aux>
        <Layout>
          <Cover />
          <BestFor />
          {/* <div>cover</div> */}
          {/* <div>best for</div> */}
          <div>selection 2:4</div>
          <div>coupon</div>
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
