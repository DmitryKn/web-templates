import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import './Footer.css';


class Footer extends Component {
  constructor(){
    super();
    this.state = {
      value:''
    }
    this.onChangeHandler = this.onChangeHandler.bind(this)
    this.onSubmitHandler = this.onSubmitHandler.bind(this)
  }

  onChangeHandler(event){
    this.setState({value: event.target.value})
  }
  onSubmitHandler(event){
    event.preventDefault()
    const email = { email: this.state.value}
    console.log(email);
    this.setState({value: ''})
  }

  render() {
    return (
      <footer className="footer">
        <div className="container">
          <div className="row">
            <ul className="footer_nav">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/">About us</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/">News</Link></li>
              <li><Link to="/">Contact</Link></li>
            </ul>
            <div className="footer_contacts">
              <h3>Contact us</h3>
              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit</p>
              <p><span className="footer-text-bold">Email: </span>hello@company.com</p>
              <p><span className="footer-text-bold">Phone: </span>+357(29)543-76-49,  +357(29)543-76-49</p>
              <p><span className="footer-text-bold">Mail: </span>20 Lorem ipsum do sit amet,<br /> 6046 Larsinac, Country</p>
            </div>
            <div className="footer_news">
              <h3>News letter</h3>
              <form onSubmit={this.onSubmitHandler}>
                <div className="form-group">
                  <label>Lorem ipsum dolor sit amet, consectetuer adipiscing elit</label>
                  <input
                    className="form-control"
                    type="email"
                    value={this.state.value}
                    onChange={this.onChangeHandler}
                    placeholder="Enter email"
                  />
                  <input type="submit" className="btn btn-primary" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

Footer.propTypes = {
  email: PropTypes.string
}

export default Footer;
