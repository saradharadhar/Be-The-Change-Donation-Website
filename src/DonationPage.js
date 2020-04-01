import React from 'react';

const formValid = ({formErrors, ...rest }) => {
  let valid =true;
  Object.values(formErrors).forEach(val => {
    val.length > 0 && (valid = false)
  });

  Object.values(rest).forEach(val => {
    val === null && (valid=false)
  });

  return valid; 
}

class DonationPage extends React.Component{
    constructor () {
      super()
      this.state = {
        amount: null,
        formErrors: {
          amount: "",
      }
    }
  }

    handleSubmit = e => {
      e.preventDefault();
      if(formValid(this.state)){
        console.log(`
        -- SUBMITTING --
        ${this.state.amount}
        `);
        document.getElementById("payment").style.display="block";
        document.getElementById("thanks-msg").style.display="none";
          
      } else{
        console.error('form invalid');
        document.getElementById("invalid-msg").style.display="block";
      }
    }

    handleChange = e => {
      e.preventDefault();
      const {name , value }= e.target;
      let formErrors = this.state.formErrors;
  
      switch(name) {
        case "amount":
          formErrors.firstName = 
          value.length < 3
          ? "amount too low" 
          : "";
          break;
        default:
          break;
      }
  
      this.setState({formErrors, [name]: value}, () => console.log(this.state))
  
    }

    hideCards(){

      document.getElementById("cards").style.display="none";
      document.getElementById("payment").style.display="block";

    }
  
    clickedBtn = () => {
      console.log('swag')
    }
  
    render () {

      const { formErrors } = this.state;

      return (
        <section className="section-donation">
        <div className="container-fluid">
          <div id="cards">
          <div>
            <h1 className="section-headings"><strong>Make a Donation</strong><br /></h1><h1>
              <p className="under-heading-paras">Choose a foundation you would like to support.</p>
            </h1>
          </div>
          <div className="col-sm-6 col-md-4 col-lg-4 ">
            <div className="donation-box js--wp-4">
                <div>
                  <img src="https://content.jdmagicbox.com/comp/delhi/n5/011pxx11.xx11.170118234007.n8n5/catalogue/sambhav-foundation-delhi-0knkp73xos.jpg" />
                    <p className="plan-price">Sambhav Foundation</p>
                    <p className="plan-price-meal">To Enable Dignity and Livelihood Of The Disadvantaged And The Differently Abled</p>
                </div>
                <div>
                    <p className="about-text">Sambhav Foundation Focuses On Synergizing Efforts And Resources To Provide A Strong Platform To Address Issues In Education, Women Empowerment, Skill Development And The Differently Abled. It Aims To Bring In Socio-Economic Change And Enable Them To Obtain A Sustainable Livelihood.</p>
                    
                </div>
                <div>
                    <button onClick={this.hideCards}>Donate Now</button>
                </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-4 col-lg-4 ">
            <div className="donation-box js--wp-4">
                <div>
                    <img src="https://mlfpr3cl8hen.i.optimole.com/w:570/h:385/q:auto/https://acceptindia.org/wp-content/uploads/2019/09/5-Children-0.jpg" />
                    <p className="plan-price">Accept Society</p>
                    <p className="plan-price-meal">A  non profit care home registered under Karnataka Societies Act No 776/99-2000.</p>
                </div>
                <div>
                    <p className="about-text">
                    Accept exists to provide  care and support for anyone in need. Whether in word or deed we do all things within our God given capacity, in the love of Lord Jesus Christ. Accept aims to glorify God by providing wholistic care and life transformation through various services  offered for the needy.
                    
                    </p>
                </div>
                <div>
                    <button onClick={this.hideCards}>Donate Now</button>
                </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-4 col-lg-4 ">
            <div className="donation-box js--wp-4">
                <div>
                    <img src="https://zeroproject.org/wp-content/uploads/2013/10/monitoring.jpg" />
                    <p className="plan-price">Mobility India</p>
                    <p className="plan-price-meal">Progressive force in the disability, development and rehabilitation sector.</p>
                    
                </div>
                <div>
                    <p className="about-text">
                    MI’s vision of an inclusive community, points to a future in which there is greater equity and neglected sections specifically people with disabilities, elderly population and other disadvantaged groups. MI’s reach over the last twenty four years has been in South, East, North-Eastern States of India.
                    
                    </p>
                </div>
                <div>
                    <button onClick={this.hideCards}>Donate Now</button>
                </div>
            </div>
          </div>
          </div>
          <div hidden id="payment" className="payment-page">
          <form onSubmit={this.handleSubmit} noValidate id="main-form">
          <span hidden id="invalid-msg" className="errorMessage">Please enter valid credentials.</span>
              <div className="email">
              <label htmlFor="amount">Enter Amount</label>
                <input 
                type="text" 
                className={formErrors.amount.length > 0 ? "error" : null}
                placeholder="Enter Amount" 
                name="amount" 
                noValidate
                onChange={this.handleChange}>
                </input>
                {formErrors.amount.length > 0 && (
                  <span className="errorMessage">{formErrors.amount}</span>
                )}
              </div>
              <div className="createAccount">
                <button type="submit">Submit</button>
              </div>
            </form>
          </div>
          <p hidden id="thanks-msg">Thank you for your contribution!</p>
        </div>
      </section>
      )
    }
  }
  
  export default DonationPage;