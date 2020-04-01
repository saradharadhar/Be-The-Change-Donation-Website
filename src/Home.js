import React, { Component } from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import fire from './Fire'
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import WhyDonate from './components/WhyDonate'
import OurServices from './components/OurServices'
import NGOs from './components/NGOs'
import MerchPage from './MerchPage'
import UpcomingEvents from './UpcomingEvents'
import DonationPage from './DonationPage'
import AboutUs from './AboutUs'
import ContactUs from './ContactUs'
import ProductPage from './ProductPage'
import LoginPage from './LoginPage';
import cart from './cart';

class Home extends React.Component{
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
        <Router>
        <div>
        <Header/>
         <Switch>
           <Route path="/" exact component={HomePage}/>
           <Route path="/UpcomingEvents" component={UpcomingEvents}/>
           <Route path="/DonationPage" component={DonationPage}/>
           <Route path="/MerchPage" component={MerchPage}/>
           <Route path="/ProductPage" component={ProductPage}/>
           <Route path="/AboutUs" component={AboutUs}/>
           <Route path="/ContactUs" component={ContactUs}/>
           <Route path="/cart" component={cart}/>
          </Switch>
        </div>
        <div>
        <Footer/>
        </div>
      </Router>
      )
    }
  }
  const HomePage = () => (
    <div>
      <div className="hero-img">
        <h1 className="intro-txt"><strong>Let's Spread Happiness</strong><br/></h1>
        <p className="intro-p"><br/><strong>We Deliver your Donations to the Right Place</strong><br/></p>
      </div>
      <OurServices/>
      <WhyDonate/>
      <NGOs/>
  </div>
  );
  export default Home;
