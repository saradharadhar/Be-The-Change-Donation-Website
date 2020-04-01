import React from 'react';

class WhyDonate extends React.Component{
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
        <section className="why-donate">
        <div className="container">
          <div>
            <h1 className="section-headings"><strong>WHY DONATE THROUGH US</strong><br/></h1>
          </div>
          <div className="icons-logo">
              <div className="col-sm-6 col-md-3 col-lg-4">
              <div>
              <img src="https://image.flaticon.com/icons/svg/1553/1553316.svg"/>
              <h1><strong>Super Convenient</strong><br/></h1>
              <p>Donate reusable items from the convenience of your house. Avail doorstep pickup and get your donations delivered to the ones in need.<br/></p>
            </div>
            </div>
            <div className="col-sm-6 col-md-3 col-lg-4">
            <div>
            <img src="https://image.flaticon.com/icons/png/512/1424/1424052.png"/>
            <h1><strong>Feel Good Factor</strong><br/></h1>
            <p>Giving gives you pleasure and makes you<br/>happier bringing a&nbsp;positive and uplifting effect on you.<br/></p>
            </div>
            </div>
            <div className="col-sm-6 col-md-3 col-lg-4">
            <div>
            <img src="https://image.flaticon.com/icons/svg/1686/1686332.svg"/>
            <h1><strong>Your Donations are Valued</strong><br/></h1>
            <p>We make sure your donations reach someone who<br/>really requires them by delivering them to the beneficiaries directly.<br/></p>
            </div>
            </div>
            <div className="col-sm-6 col-md-3 col-lg-4">
            <div>
            <img src="https://image.flaticon.com/icons/svg/802/802016.svg"/>
            <h1><strong>Transparent Process</strong><br/></h1>
            <p>Your donations reaches the beneficiaries as it is<br/>through our verified trusted partner NGOs audited on regular basis<br/></p>
            </div>
            </div>
            <div className="col-sm-6 col-md-3 col-lg-4">
            <div>
            <img src="https://image.flaticon.com/icons/png/512/2353/2353760.png"/>
            <h1><strong>Help those in need</strong><br/></h1>
            <p>We surprise you time to time by sending you<br/>our exclusive “happiness box” containing surprise goodies and vouchers for you.<br/></p>
            </div>
            </div>
            <div className="col-sm-6 col-md-3 col-lg-4">
            <div>
            <img src="https://image.flaticon.com/icons/svg/2573/2573731.svg"/>
            <h1><strong>Save the Environment</strong><br/></h1>
            <p>Keep your unwanted belongings out of landfill by<br/>giving them a new life and getting them in hands of someone who really requires them.<br/></p>
            </div>
            </div>
            </div>
        </div>
      </section>
      )
    }
  }
  
  export default WhyDonate;