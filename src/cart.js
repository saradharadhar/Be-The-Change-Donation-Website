import React, { Component } from 'react'
import fire from './Fire';

export default class cart extends Component {

    constructor () {
        super()
        this.state = {
          items: null
        }
      }

      componentDidMount(){
          console.log("mounted");
          const db=fire.firestore();
          db.collection('addToCart')
          .get()
          .then(snapshot => {
            const items= []
            snapshot.forEach(doc => {
                const data=doc.data()
                items.push(data)
            })
            this.setState({items:items})
          }).catch(error => console.log(error))
      }
    
      clickedBtn = () => {
        console.log('swag')
      }

    render() {
        return (
            <section className="section-cart"> 
                <h1 className="section-headings">Shopping Bag</h1>
                {
                    this.state.items &&
                    this.state.items.map(item => {
                        return(
                            <div className="container-fluid">
                                <div className="cart-items">
                                    <p>{item.productName}</p>
                                    <p>Size: {item.size}</p>
                                    <p>Price: {item.price}</p>
                                </div>
                               
                            </div>
                        )
                    })
                }
            </section>
        )
    }
}
