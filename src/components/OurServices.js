import React from 'react';

class OurServices extends React.Component{
    constructor () {
      super()
      this.state = {
        name: 'Sara'
      }
    }
  
    clickedBtn = () => {
      console.log('swag')
    }
  
    render () {
      return (
        <section className="our-services">
        <div className="container">
          <div>
            <h1 className="section-headings"><strong>OUR SERVICES</strong><br/></h1>
          </div>
          <div className="icons-logo">
            <div className="col-sm-6 col-md-3 col-lg-4">
            <div>
            <img src="https://image.flaticon.com/icons/svg/411/411819.svg"/>
            <h1><strong>Choose a Foundation</strong><br/></h1>
            <p>Discover the NGOs tied up with us that are looking for a contribution, and make a contribution via online transaction. *convenience fee applicable</p>
          </div>
          </div>
          <div className="col-sm-6 col-md-3 col-lg-4">
            <div>
            <img src="https://image.flaticon.com/icons/svg/2196/2196160.svg"/>
            <h1><strong>Discover upcoming events</strong><br/></h1>
            <p>Learn about the upcoming events near you to volunteer or visit.</p>
          </div>
          </div>
          <div className="col-sm-6 col-md-3 col-lg-4">
            <div>
            <img src="https://image.flaticon.com/icons/svg/1686/1686463.svg"/>
            <h1><strong>Buy Merchandise</strong><br/></h1>
            <p>Our NGO partners provide our donors various products the proceeds of which are used to raise funds.</p>
          </div>
          </div>
        </div>
        </div>
      </section>
      )
    }
  }
  
  export default OurServices;