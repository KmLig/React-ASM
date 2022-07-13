import React from "react";

function Footer(props) {
  return (
    <div className="footer bg-dark text-white p-4 mt-3">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-4 col-lg-4">
            <h5 className="text-warning">Links</h5>
            <ul className="list-unstyled">
              <li>
                <a className="btn btn-outline-warning rounded-pill m-1" href="/">Home</a>
              </li>
              <li>
                <a className="btn btn-outline-warning rounded-pill m-1" href="/">About</a>
              </li>
              <li>
                <a className="btn btn-outline-warning rounded-pill m-1" href="/">Menu</a>
              </li>
              <li>
                <a className="btn btn-outline-warning rounded-pill m-1" href="contactus.html">Contact</a>
              </li>
            </ul>
          </div>
          <div className="col-4 col-lg-4">
            <h5>Our Address</h5>
            <address>
              1 TTP District 2
              <br />
              Thu Duc City
              <br />
              HCMC
              <br />
              <i className="fa fa-phone fa-lg"></i>: +123456789
              <br />
              <i className="fa fa-fax fa-lg"></i>: +123456789
              <br />
              <i className="fa fa-envelope fa-lg"></i>:{" "}
              <a href="mailto:confusion@food.net">asm@.net</a>
            </address>
          </div>
          <div className="col-4 col-sm-4 align-self-center">
            <div className="text-center">
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
              <a className="btn btn-social-icon m-1" href="mailto:">
                <i className="fa fa-envelope-o"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-auto">
            <p>© Copyright KP Lorem </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
