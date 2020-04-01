import React from 'react';
import {Link} from 'react-router-dom';
import fire from '../Fire';

class Header extends React.Component{
    constructor () {
      super()
      this.state = {
        name: 'Sara'
      }
      this.logout=this.logout.bind(this);
    }
  
    clickedBtn = () => {
      console.log('swag')
    }

    logout(){
      fire.auth().signOut();
    }
  
    render () {
      return (
        <div>
          <nav className="navbar">
          <div className="container">
            <Link className="logo" to='/'>BE THE CHANGE</Link>
            <div className="menu">
                <Link to='/UpcomingEvents'>Upcoming Campaigns</Link>
                <Link to='/DonationPage'>DONATE</Link>
                <Link to='/MerchPage'>MERCH</Link>
                <Link to='/AboutUs'>ABOUT US</Link>
                <Link to='/ContactUs'>CONTACT US</Link>
                <Link to='/cart'><i class="fas fa-shopping-cart"></i></Link>
                <a onClick={this.logout}><i class="fas fa-sign-out-alt"></i></a>
            </div>
          </div>
        </nav>
        </div>
      )
    }
  }
  
  export default Header;