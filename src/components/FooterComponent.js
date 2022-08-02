import React from "react";
import { Link } from 'react-router-dom';

function Footer(props) {
  return (
    <div className="footer bg-dark text-white p-4 mt-3">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-4 col-lg-4">
            <h5 className="text-warning">Links</h5>
            <ul className="list-unstyled">
              <li>
                <Link className="btn btn-outline-warning rounded-pill m-1" to="/homepage">Home</Link>
              </li>
              <li>
                <Link className="btn btn-outline-warning rounded-pill m-1" to="/employee">Staff</Link>
              </li>
              <li>
                <Link className="btn btn-outline-warning rounded-pill m-1" to="/department">Department</Link>
              </li>
              <li>
                <Link className="btn btn-outline-warning rounded-pill m-1" to="/salary">Salary</Link>
              </li>
            </ul>
          </div>
          <div className="col-4 col-lg-4 text-warning">
            <h5>Our Address</h5>
            <address>
              1 TTP District 2,
              <br />
              Thu Duc City,
              <br />
              HCMC
              <br />
              <i className="fa fa-phone fa-lg mt-3"></i>: +123456789
              <br />
              <i className="fa fa-fax fa-lg"></i>: +123456789
              <br />
              <i className="fa fa-envelope fa-lg"></i>:{" "}
              <a href="mailto:confusion@food.net">asm@.net</a>
            </address>
          </div>
          <div className="col-4 col-sm-4">
            <h5 className="col-12 text-center text-warning">Contact us</h5>
            <div className="col-12 text-center align-self-center">
              <a
                className="btn btn-social-icon btn-google m-1"
                href="http://google.com/+"
              >
                <i className="fa fa-google-plus"></i>
              </a>
              <a
                className="btn btn-social-icon btn-facebook m-1"
                href="http://www.facebook.com/profile.php?id="
              >
                <i className="fa fa-facebook"></i>
              </a>
              <a
                className="btn btn-social-icon btn-linkedin m-1"
                href="http://www.linkedin.com/in/"
              >
                <i className="fa fa-linkedin"></i>
              </a>
              <a
                className="btn btn-social-icon btn-twitter m-1"
                href="http://twitter.com/"
              >
                <i className="fa fa-twitter"></i>
              </a>
              <a
                className="btn btn-social-icon btn-google m-1"
                href="http://youtube.com/"
              >
                <i className="fa fa-youtube"></i>
              </a>              
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-auto">
            <p className="text-warning">© Copyright KP Lorem </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
