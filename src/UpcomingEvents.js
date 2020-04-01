import React from 'react';

class UpcomingEvents extends React.Component{
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
        <section className="section-fundraisers">
        <div className="container">
          <div>
            <h1 className="section-headings"><strong>Find a Fundraiser near you</strong><br /></h1><h1>
            </h1></div>
          <div className="funraiser-events">
            <div className="col-sm-6 col-md-3 col-lg-3">
              <div>
                <img src="https://www.thebetterindia.com/wp-content/uploads/2018/04/orphan-reservation-Maharashtra.jpg" />
                <h3>Help the orphans</h3>
                <p>4th March<br />5pm<br />Estella (Juhu)</p>
              </div>
            </div>
            <div className="col-sm-6 col-md-3 col-lg-3">
              <div>
                <img src="https://s2.reutersmedia.net/resources/r/?m=02&d=20190630&t=2&i=1403161250&w=1200&r=LYNXNPEF5T10E" />
                <h3>Support LGBTQ+</h3>
                <p>10th March<br />6pm<br />Time and Again (Lokhandwala)</p>
              </div>
            </div>
            <div className="col-sm-6 col-md-3 col-lg-3">
              <div>
                <img src="https://photos5.appleinsider.com/gallery/27307-40457-27262-40301-kerala-flooding-l-l.jpg" />
                <h3>Flood Relief</h3>
                <p>3th March <br />6pm<br />Little Door(Bandra)</p>
              </div>
            </div>
            <div className="col-sm-6 col-md-3 col-lg-3">
              <div>
                <img src="https://feministsforlife.org/wp-content/uploads/2013/08/BWStopRape-Matthew-Evans-300x200.jpg" />
                <h3>Support Rape Victims</h3>
                <p>19th March <br /> 1pm <br /> Juhu Gymkhana Club</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      )
    }
  }
  
  export default UpcomingEvents;