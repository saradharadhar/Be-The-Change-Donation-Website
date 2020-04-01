import React from 'react';

class NGOs extends React.Component{
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
        <section className="section-Ngos">
        <div className="container">
          <div>
            <h1 className="section-headings"><strong>NGOs</strong><br/></h1>
          </div>
          <div className="icons-logo">
            <div className="col-sm-6 col-md-3 col-lg-4">
            <div>
            <img src="https://sadsindia.org/wp-content/uploads/2018/09/Mobility-India-logo.jpg"/>
            <h2><strong>Mobility India</strong><br/></h2>
            </div>
            </div>
            <div className="col-sm-6 col-md-3 col-lg-4">
            <div>
            <img src="https://sadsindia.org/wp-content/uploads/2018/09/Sambhav.jpg"/>
            <h2><strong>Sambhav Foundation</strong><br/></h2>
            </div>
            </div>
            <div className="col-sm-6 col-md-3 col-lg-4">
            <div>
            <img src="https://sadsindia.org/wp-content/uploads/2018/09/accept.jpg"/>
            <h2><strong>Accept Society</strong><br/></h2>
            </div>
            </div>
          </div>
        </div>
      </section>
      )
    }
  }
  
  export default NGOs;