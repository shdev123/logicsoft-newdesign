import React from 'react'

function Footer(props) {
    return (
	<div>
	<footer className="footer">
      <div className="top-footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-6">
              <div className="row">
                <div className="col-lg-3">
                  <div className="footer-box">
                    <ul className="footer-menu">
                      <li><a href="#">Home</a></li>
                      <li><a href="#">About Us</a></li>
                      <li><a href="#">Our Work</a></li>
                      <li><a href="#">Faq's</a></li>
                      <li><a href="#">How We Work</a></li>
                    </ul>
                  </div>
                </div>
                 <div className="col-lg-9">
                   <div className="footer-box">
                    <h3>Services</h3>
                    <ul className="footer-service-menu">
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
                  </div>
                 </div>
                 
              </div>
            </div>
            <div className="col-lg-4 col-6">
              <div className="footer-box footer-contact">
                <h3>Contact Us</h3>
                <ul>
                  <li><span>Address: </span>Suite 6, 17 Comalco Ct Thomastown, 3074</li>
                  <li><span>Telephone:</span><a href="tel:03 8595 5246">03 8595 5246</a></li>
                  <li><span>Email:</span><a href="mailto:info@logicsofts.com.au">info@logicsofts.com.au</a></li>
                </ul>
              </div>
              <div className="footer-box footer-social">
                <h3>Stay With Us</h3>
                <ul>
                  <li><a href="#"><i className="fa fa-youtube"></i></a></li>
                  <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                  <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                  <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-7 col-12 footer-tech-row">
              <div className="footer-box">
                <h3>TECHNOLOGY USED</h3>
                <div className="tech-img">
                  <ul>
                    <li><img src="/images/drupal.png"/></li>
                    <li><img src="/images/wordpress.png"/></li>
                    <li><img src="/images/joomla.png"/></li>
                    <li><img src="/images/java.png"/></li>
                    <li><img src="/images/angular-i.png"/></li>
                    <li><img src="/images/html.png"/></li>
                    <li><img src="/images/css.png"/></li>
                    <li><img src="/images/bootstrap.png"/></li>
                    <li><img src="/images/node.png"/></li>
                  </ul>
                </div>
              </div>
             </div>
          </div>
        </div>
      </div>
      <div className="copyright">
        <div className="container">
          <p>Copyright - 2020-2021 All Right Reserved - Logicsofts Australia Ptv Ltd. - ABN29611694529</p>
        </div>
      </div>
    </footer>
		</div>
    );
}
export default Footer