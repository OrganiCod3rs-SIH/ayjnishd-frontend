import React from "react";
import Link from "next/link";
import { ImLinkedin2 } from "react-icons/im";
import { BsTwitter } from "react-icons/bs";
import { ImFacebook } from "react-icons/im";
const Footer = () => {
  return (
    <>
      <footer id="footer">
        <div className="container">
          <div className="row">
            <div className="col sm">
              <h5 className="footerparahead text-white">
                <b>More To Explore</b>
              </h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <Link href="/">
                    <p className="nav-link p-0 text-muted">
                      Ministry of Social justice and empowerment
                    </p>
                  </Link>
                </li>
                <li className="nav-item mb-2">
                  <Link href="/">
                    <p className="nav-link p-0 text-muted">AYJNISHD</p>
                  </Link>
                </li>
                <li className="nav-item mb-2">
                  <Link href="/">
                    <p className="nav-link p-0 text-muted">
                      Check your hearing
                    </p>
                  </Link>
                </li>
                <li className="nav-item mb-2">
                  <Link href="/">
                    <p className="nav-link p-0 text-muted">
                      Jobs of Hearing Impaired
                    </p>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col sm">
              <h5 className="footerparahead text-white">
                <b>Quick Links</b>
              </h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <Link href="/">
                    <p className="nav-link p-0 text-muted">
                      Terms &amp; Conditions
                    </p>
                  </Link>
                </li>
                <li className="nav-item mb-2">
                  <Link href="/">
                    <p className="nav-link p-0 text-muted">Privacy Policy</p>
                  </Link>
                </li>
                <li className="nav-item mb-2">
                  <Link href="/">
                    <p className="nav-link p-0 text-muted">
                      Help to Persons with Disabilities
                    </p>
                  </Link>
                </li>
                <li className="nav-item mb-2">
                  <Link href="/">
                    <p className="nav-link p-0 text-muted">
                      Help to Persons with Disabilities
                    </p>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col sm">
            <h5 className="footerparahead text-white">
                <b>You Are Visitor Number<br/>5462132</b>
              </h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <Link href="/">
                    <p className="nav-link p-0 text-muted">Feedback</p>
                  </Link>
                </li>
                <li className="nav-item mb-2">
                  <Link href="/">
                    <p className="nav-link p-0 text-muted">Contact Us</p>
                  </Link>
                </li>
                <li className="nav-item mb-2">
                  <Link href="/">
                    <p className="nav-link p-0 text-muted">Home</p>
                  </Link>
                </li>
              </ul>
            </div>
            
          </div>
          <hr />
          <div className="row">
            <div className="col sm">
              <p className="footerparahead" id="iconsize">
                <ImLinkedin2 />&nbsp;&nbsp;
                <BsTwitter />&nbsp;&nbsp;
                <ImFacebook/>&nbsp;&nbsp;
              </p>
            </div>
            <div className="col sm">
              <p className="footerparahead">
                A product of <b><i>AYJNISHD</i></b> design by : OrganiCod3rs
              </p>
            </div>
            <div className="col sm">
              <p className="footerparahead">
                © 2015 Coachler Implant under ADIP Scheme of GOI.<br/>All Rights
                Reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
