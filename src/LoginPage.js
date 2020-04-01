import React from 'react';
import fire from './Fire';

const emailRegex= RegExp(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);

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



class LoginPage extends React.Component{
    constructor (props) {
      super(props);
      this.state = {
        firstName: null,
        lastName: null,
        email: null,
        password: null,
        formErrors: {
          firstName: "",
          lastName: "",
          email: "",
          password: "",
        }
      }
      this.signUp = this.signUp.bind(this);
    }

    handleSubmit = e => {
      e.preventDefault();
      if(formValid(this.state)){
        console.log(`
        -- SUBMITTING --
        ${this.state.firstName}
        ${this.state.lastName}
        ${this.state.email}
        ${this.state.password}
        `);
        fire.auth().signInWithEmailAndPassword(this.state.email,this.state.password).then((u)=>{
        }).catch((error)=> {
          console.log(error);
          document.getElementById("invalid-msg").style.display="block";
        });
      } else{
        console.error('form invalid');
        document.getElementById("invalid-msg").style.display="block";
      }
    }

    signUp(e) {
      e.preventDefault();
      if(formValid(this.state)){
        console.log(`
        -- SUBMITTING --
        ${this.state.firstName}
        ${this.state.lastName}
        ${this.state.email}
        ${this.state.password}
        `);
        fire.auth().createUserWithEmailAndPassword(this.state.email,this.state.password).then((u)=>{
        }).catch((error)=> {
          console.log(error);
        });
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
        case "email":
          formErrors.email = 
          emailRegex.test(value)
          ? "" 
          : "invalid email address";
          break;
        case "password":
          formErrors.password = 
          value.length < 6
          ? "minimum 6 characters required" 
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
        <div className="login-hero-img">
        <div className="wrapper">
          <div className="form-wrapper">
            <h1>Welcome!</h1>
            <h2>To make a change please login or sign up with your personal info</h2>
            <span hidden id="invalid-msg" className="errorMessage">Please enter valid credentials.</span>
            <form onSubmit={this.handleSubmit} noValidate>
              <div className="firstName">
                <label htmlFor="firstName">First Name</label>
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
                <label htmlFor="lastName">Last Name</label>
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
                <label htmlFor="email">Email</label>
                <input 
                type="email" 
                className={formErrors.email.length > 0 ? "error" : null}
                placeholder="Email" 
                name="email" 
                noValidate
                onChange={this.handleChange}>
                </input>
                {formErrors.email.length > 0 && (
                  <span className="errorMessage">{formErrors.email}</span>
                )}
              </div>
              <div className="password">
                <label htmlFor="password">Password</label>
                <input 
                type="password" 
                className={formErrors.password.length > 0 ? "error" : null}
                placeholder="Password" 
                name="password" 
                noValidate
                onChange={this.handleChange}>
                </input>
                {formErrors.password.length > 0 && (
                  <span className="errorMessage">{formErrors.password}</span>
                )}
              </div>
              <div className="createAccount">
                <button type="submit">Log In</button>
                <small>OR</small>
              </div>
              <div className="createAccount">
                <button onClick={this.signUp}>Sign Up</button>
              </div>
            </form>
          </div>
        </div>
        </div>
      )
    }
  }
  
  export default LoginPage;