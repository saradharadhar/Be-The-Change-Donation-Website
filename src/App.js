import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import fire from './Fire'
import './App.css';
import Home from './Home';
import LoginPage from './LoginPage';

class App extends React.Component{
  constructor () {
    super()
    this.state = {
      name: 'Sara',
      user: {}
    }
  }

  componentDidMount() {
    this.authListener();
  }

  authListener() {
    fire.auth().onAuthStateChanged((user) =>{
      //console.log(user);
      if (user){
        this.setState({user});
        //localStorage.setItem('user',user.uid);
      } else {
        this.setState({ user : null });
        //localStorage.removeItem('user');
      }
    });
  }

  clickedBtn = () => {
    console.log('swag')
  }

  render () {
    return (
        <div>
        {this.state.user ? (<Home/>):(<LoginPage/>)}
        </div>
    )
  }
}

export default App;
