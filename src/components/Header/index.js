import React from 'react';
import {Link} from 'react-router-dom';
import './index.css';


	function Header(props) 
	{
    return (
	<div>
	<header className="header">
      <div className="main-header">
        <div className="container">
          <nav className="navbar navbar-expand-lg">
            <a className="navbar-brand" href="blog.html"><img src="/images/blog-logo.png"/></a>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
              <span className="fa fa-bars"></span>
            </button>

            <div className="collapse navbar-collapse" id="collapsibleNavbar">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link" href="blogging-tools.html">Blogging Tools</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Google</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="internet-marketing.html">Internet Marketing</a>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link" href="services.html">Our Services</a>
                  <div className="sub-menu-toggle"></div>
                  <ul className="sub-menu">
                    <li><a href="#">Web Design</a></li>
                    <li><a href="#">Web Development</a></li>
                    <li><a href="#">Digital Marketing</a></li>
                    <li><a href="#">Graphic Design</a></li>
                    <li><a href="#">IT Services</a></li>
                    <li><a href="#">Mobile Apps</a></li>
                    <li><a href="#">White Label Solutions</a></li>
                    <li><a href="#">Outsourcing</a></li>
                    <li><a href="#">Printing</a></li>
                    <li><a href="#">Consultation</a></li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="advertise.html">Advertise With Us</a>
                </li>
              </ul>
              <div className="header-btn">
                <ul>
                  <li>
                    <a href="#" className="btn request-btn">Request a Free quote</a>
                  </li>
                  <li>
                    <a href="#" className="btn">Contact Us</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
		</div>
    );
	
}


export default Header;