import React from 'react';

class Footer extends React.Component{
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
        <footer>
        <div className="container">
          <div className="col-sm-6 col-md-3 col-lg-4 footer-navigation">
          <div>
            <h3><a href="#">Be The Change</a></h3>
            <p className="company-name">BeTheChange © 2020 </p>
          </div>
          </div>
          <div className="col-sm-6 col-md-3 col-lg-4 footer-contacts">
            <div><span className="fa fa-map-marker footer-contacts-icon"> </span>
              <p><span className="new-line-span">MPSTME</span> Vile Parle (W), Mumbai - 49</p>
              </div>
              <div>
                  <i className="fa fa-phone footer-contacts-icon"></i>
                  <p className="footer-center-info">02226203087</p>
              </div>
              <div >
                  <i className="fa fa-envelope footer-contacts-icon"></i>
                  <p>
                      <a href="#" target="_blank">support@bethechange.org</a>
                  </p>
              </div >
            </div>
              <div className="clearfix"></div>
              <div className="col-sm-6 col-md-3 col-lg-4 footer-about">
              <div className="social-links social-icons">
                <a href="#">
                <i className="fab fa-facebook-square"></i>
                </a>
                <a href="#">
                    <i className="fab fa-twitter-square"></i>
                </a>
                <a href="#">
                    <i className="fab fa-linkedin"></i>
                </a>
            </div>
          </div>
        </div>
      </footer>
      )
    }
  }
  
  export default Footer;