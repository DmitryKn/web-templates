import React, { Component } from 'react';
import Header from './Components/Header.js';
import Footer from './Components/Footer.js';
import List from './Components/List.js';
import About from './Components/About.js';
import {Route, Switch} from 'react-router-dom';
import SideDrawer from './Components/SideDrawer/SideDrawer.js';
import PostInfo from './Components/PostInfo.js';
import './App.css';

class App extends Component {
  state = {
    isOpen: false
  }
  toggler = () => {
    this.setState((prevState) => {
      return {isOpen: !prevState.isOpen}
    })
  }

  render() {

    return (
      <div className="App">
        <Header toggler={this.toggler}/>
        <SideDrawer show={this.state.isOpen}/>
        <Switch>
          <Route path="/" exact component={List} />
          <Route path="/about" component={About} />
          <Route path="/posts/:post_id" component={PostInfo}/>
        </Switch>
        <Footer/>
      </div>
    );
  }
}

export default App;
