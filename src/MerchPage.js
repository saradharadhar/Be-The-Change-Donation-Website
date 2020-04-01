import React from 'react';
import {Link} from 'react-router-dom';
import fire from './Fire';

class MerchPage extends React.Component{
    constructor () {
      super()
      this.state = {
        items: null
      }
    }

    componentDidMount(){
      console.log("mounted");
      const db=fire.firestore();
      db.collection('products')
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

    render () {

      return (
        <section className="merch-store">
          <div className="container-fluid">
                          <div>
                          <h1 className="section-headings"><strong>Merchandise</strong><br/></h1>
                            <p className="under-heading-paras">All proceeds from sales are divided among our NGOs.</p>
                        </div>
          {
                    this.state.items &&
                    this.state.items.map(item => {
                        return(
                        <div className="col-sm-6 col-md-4 col-lg-3 ">
                                <Link to={{
                                  pathname:'/ProductPage',
                                  state:{
                                    name:item.productName,
                                    price:item.price,
                                    description:item.description,
                                    sex:item.sex,
                                    image:item.image
                                  }
                                }} ><img src={item.image}>
                                </img></Link>
                              </div>
                        )
                    })
                }
                </div>
      </section>
      )
    }
  }
  
  export default MerchPage;