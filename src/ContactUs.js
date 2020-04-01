import React from 'react';
import fire from './Fire';

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

class ContactUs extends React.Component{
    constructor () {
      super()
      this.state = {
        firstName: null,
        lastName: null,
        phoneNumber: null,
        messageBox: null,
        formErrors: {
          firstName: "",
          lastName: "",
          phoneNumber: "",
          messageBox: "",
      }
    }
  }

  handleSubmit = e => {
    e.preventDefault();
    if(formValid(this.state)){
      console.log(`
      -- SUBMITTING --
      ${this.state.firstName}
      ${this.state.lastName}
      ${this.state.phoneNumber}
      ${this.state.messageBox}
      `);
      

    const db = fire.firestore();
    
    db.collection('contactForms').add({
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      phoneNumber: this.state.phoneNumber,
      messageBox: this.state.messageBox
    });  
      document.getElementById("thankyou-msg").style.display="block";
      document.getElementById("main-form").style.display="none";
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
      case "firstName":
        formErrors.firstName = 
        value.length < 3
        ? "minimum 3 characters required" 
        : "";
        break;
      case "lastName":
        formErrors.lastName = 
        value.length < 3
        ? "minimum 3 characters required" 
        : "";
        break;
      case "phoneNumber":
        formErrors.phoneNumber = 
        value.length != 10
        ? "number must be 10 characters" 
        : "";
        break;
      case "messageBox":
        formErrors.messageBox = 
        value.length > 40 
        ? "word limit reached" 
        : "";
        break;
      default:
        break;
    }

    this.setState({formErrors, [name]: value}, () => console.log(this.state))

  }
  
    clickedBtn = () => {
      console.log('swag')
    }
  
    render () {

      const { formErrors } = this.state;

      return (
        <div className="wrapper">
          <div>
        <h1 className="section-headings"><strong>Hello!</strong><br /></h1><h1>
          <p className="under-heading-paras">Fill in your details &amp; we will get back to you ASAP!</p>
        </h1></div>
        <div className="form-contactUs">
        <span hidden id="invalid-msg" className="errorMessage">Please enter valid credentials.</span>
        <div hidden id="thankyou-msg">
          <p className="under-heading-paras">Thank You! Your form has been submitted.</p>
        </div>
            <form onSubmit={this.handleSubmit} noValidate id="main-form">
              <div className="firstName">
                <input 
                type="text" 
                className={formErrors.firstName.length > 0 ? "error" : null}
                placeholder="First Name" 
                name="firstName" 
                noValidate
                onChange={this.handleChange}>
                </input>
                {formErrors.firstName.length > 0 && (
                  <span className="errorMessage">{formErrors.firstName}</span>
                )}
              </div>
              <div className="lastName">
                <input 
                type="text" 
                className={formErrors.lastName.length > 0 ? "error" : null}
                placeholder="Last Name" 
                name="lastName" 
                noValidate
                onChange={this.handleChange}>
                </input>
                {formErrors.lastName.length > 0 && (
                  <span className="errorMessage">{formErrors.lastName}</span>
                )}
              </div>
              <div className="email">
                <input 
                type="text" 
                className={formErrors.phoneNumber.length > 0 ? "error" : null}
                placeholder="Phone Number" 
                name="phoneNumber" 
                noValidate
                onChange={this.handleChange}>
                </input>
                {formErrors.phoneNumber.length > 0 && (
                  <span className="errorMessage">{formErrors.phoneNumber}</span>
                )}
              </div>
              <div className="message">
                <input 
                type="text" 
                className={formErrors.messageBox.length > 0 ? "error" : null}
                placeholder="Message(optional) - Eg. Regarding volunteer work" 
                name="messageBox" 
                noValidate
                onChange={this.handleChange}>
                </input>
                {formErrors.messageBox.length > 0 && (
                  <span className="errorMessage">{formErrors.messageBox}</span>
                )}
              </div>
              <div className="createAccount">
                <button type="submit">Submit</button>
              </div>
            </form>
        </div>
        </div>
      )
    }
  }
  
  export default ContactUs;