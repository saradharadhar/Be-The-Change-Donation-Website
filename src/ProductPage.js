import React from 'react';
import fire from './Fire';

var productName=''
var productPrice=''

class ProductPage extends React.Component{
    constructor () {
      super()
      this.state = {
        name: null,
        price: null,
      }
    }

    componentDidMount(){
      productName=this.props.location.state.name
      productPrice=this.props.location.state.price
      console.log(`
      -- SUBMITTING --
      ${productName}
      ${productPrice}
      `);
     
    }
    
  
    clickedBtn = () => {
      console.log('swag')
    }

    sendData(){
      const db = fire.firestore();
    
      db.collection('addToCart').add({
        productName: productName,
        size: "S",
        price: productPrice
      }); 
    }
  
    render () {
      console.log(this.props.location.state)
      return (
        <section className="products">
          <div className="container">
          <div className="col-md-6 model">
          <img src={this.props.location.state.image} />
        </div>
        <div className="col-md-6 info">
          <div className="insider">
            <h5>{this.props.location.state.sex}</h5>
            <h1>{this.props.location.state.name}</h1>
            <p>{this.props.location.state.description}</p>
            <div className="size">
              <div className="title">
                sizes
              </div>
              <ul className="sizes">
                <li className="circle">S</li>
                <li className="circle">M</li>
                <li className="circle">L</li>
                <li className="semi-circle">XL</li>
                <li className="semi-circle">XXL</li>
              </ul>
            </div>
            <div className="action-btns">
              <button className="col-md-6 red-hollow-btn" onClick={this.sendData}>
                <span className="price">
                  {this.props.location.state.price}
                </span>
                add to cart
              </button>
              <button className="col-md-6 lightgrey-btn">
                buy now
              </button>
            </div>
          </div>
        </div>
          </div>
        
      </section>
      )
    }
  }
  
  export default ProductPage;