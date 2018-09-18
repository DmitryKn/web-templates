import React, {Component}from 'react';
import {Link} from 'react-router-dom';
import './Header.css';
import Toggler from './SideDrawer/ToggleButton.js';

class Header extends Component {

  render() {
    return (
    <header className="navbar">
      <nav className="navbar_navigation">
        <div className="navbar_logo"><a href="/">The Logo</a></div>
        <div className="spacer" />
        <div className="navbar_navigation_items">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            
          </ul>
        </div>
        <div className="navbar_toggle_button">
          <Toggler click={this.props.toggler}/>
        </div>
      </nav>
    </header>
    );
  }
}

export default Header
//
