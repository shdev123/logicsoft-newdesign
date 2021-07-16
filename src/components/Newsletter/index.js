import React from 'react';
import {Link} from 'react-router-dom';
import './index.css';


	function Newsletter(props) 
	{
    return (
	<div>
	 <section className="newsletter-sec">
      <div className="container">
        <h1>Smart marketing <br/>starts here</h1>
        <h4>Join over 150,000 marketing managers who get our best digital marketing insights, strategies and tips delivered straight to their inbox.</h4>
        <form action="" method="">
          <div className="service-form-box">
            <div className="form-group">
              <input type="email" name="" className="form-control" placeholder="ENTER YOUR WORK EMAIL"/>
            </div>
            <div className="submit-btn">
              <button type="submit" className="btn arrow-btn red-btn">Subscribe</button>
            </div>
          </div>
        </form>
      </div>
    </section>
		</div>
    );
	
}


export default Newsletter;