import {React, useEffect} from "react";
import Image from "next/image";
import logo from "../../images/logo-sih.png";
import { AiOutlineSound } from "react-icons/ai";
import { HiMenu } from "react-icons/hi";
import { BsSearch } from "react-icons/bs";

import Link from 'next/link'

export default function Navbar(props) {
  
  //Google Translator Code Here:
  useEffect(() => {
    var addScript = document.createElement('script');
    addScript.setAttribute('src', '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit');
    document.body.appendChild(addScript);
    window.googleTranslateElementInit = googleTranslateElementInit;
}, [])
    var duplicate_google_translate_counter = 0;
    const googleTranslateElementInit = () => {
        if (duplicate_google_translate_counter == 0) {
          new google.translate.TranslateElement({pageLanguage: 'en',includedLanguages : "en,hi,mr,te,ta"}, 'google_translate_element');
      }
      duplicate_google_translate_counter++;
    }
//Google function ends here

  return (
    <div>
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid">
          <Link href="/">
            <Image src={logo} width={120} alt="" height={50} />
          </Link>
          
          <h1 className="navbar-brand mx-3 text-dark" href="#">
            AYJNISHD
          </h1>
          <button
            className="navbar-toggler text-dark"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            {/* <span className="navbar-toggler-icon"></span> */}
            <HiMenu className="navbar-toggler-icon" />
          </button>
          <div
            className=" collapse navbar-collapse"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 w-100 justify-content-end ">
              <li className="nav-item">
                <Link href="/">
                <a className={`nav-link ${props.active==="Home"?"active":""}`} aria-current="page" href="#">
                  Home
                </a>
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  href="about"
                  className={`nav-link dropdown-toggle ${props.active==="About"?"active":""}`}
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  About
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <Link href="/about/aboutthescheme">
                      <a type="button" className="dropdown-item">About the Scheme</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/about/adipscheme">
                      <a className="dropdown-item" href="#">
                        ADIP Scheme
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/about/cicandidacy">
                      <a className="dropdown-item" href="#">
                        CI Candidacy
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/about/institute">
                      <a className="dropdown-item" href="#">
                        Institute{" "}
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/about/copyrightact">
                      <a className="dropdown-item" href="#">
                        Copyright Scheme
                      </a>
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className={`nav-link dropdown-toggle ${props.active==="Apply"?"active":""}`}
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Apply
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <Link href="/apply/cienrollment">
                    <a className="dropdown-item" href="#">
                        CI Surgery Enrollment{" "}
                    </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/apply/requestforaudiologist">
                    <a className="dropdown-item" href="#">
                        Request for Audiologist
                    </a>
                    </Link>
                  </li>
                  {/* <li><hr className="dropdown-divider"/></li> */}
                  <li>
                    <Link href="/apply/empanelment">
                    <a className="dropdown-item" href="#">
                        Empanelment of Hospitals
                    </a>
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className={`nav-link dropdown-toggle ${props.active==="Login"?"active":""}`}
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >Login                </a>
                <ul className="dropdown-menu">
                  <li>
                    <Link href="/login/surgicalreport">
                    <a className="dropdown-item" href="#">
                      Surgical Report
                    </a>
                    </Link>
                  </li>
                  <li>
                  <Link href="/login/activation">
                    <a className="dropdown-item" href="#">
                      Activation &amp; Mapping
                    </a>
                    </Link>
                  </li>
                  <li>
                  <Link href="/login/checkappstatus">
                    <a className="dropdown-item" href="#">
                      Check Application Status
                    </a>
                    </Link>
                  </li>
                  <li>
                  <Link href="/login/checkappdetails">
                    <a className="dropdown-item" href="#">
                      Check Application Details
                    </a>
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className={`nav-link dropdown-toggle ${props.active==="Contact"?"active":""}`}
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Contact
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <Link href="/contact/contactus">
                    <a className="dropdown-item" href="#">
                      Contact Us
                    </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact/feedback">
                    <a className="dropdown-item" href="#">
                      Feedback
                    </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact/regionalcenters">
                    <a className="dropdown-item" href="#">
                      Regional Centres
                    </a>
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className={`nav-link dropdown-toggle ${props.active==="Others"?"active":""}`}
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Others
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <Link href="/others/report">
                    <a className="dropdown-item" href="#">
                      Report of Events
                    </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/others/duration">
                    <a className="dropdown-item" href="#">
                      Duration of Therapy
                    </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/others/guidance">
                    <a className="dropdown-item" href="#">
                      Guidance &amp; Support
                    </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/others/pre-post">
                    <a className="dropdown-item" href="#">
                      Pre &amp; Post Surgery
                    </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/others/ciprocessor">
                    <a className="dropdown-item" href="#">
                      CI Processor Manual
                    </a>
                    </Link>
                  </li>
                </ul>
              </li>
              <div className="translate" id="google_translate_element" ></div>
              {/* google div ends here */}
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <BsSearch/>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <AiOutlineSound />
                </a>
              </li>
            </ul>
            {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}
          </div>
        </div>
      </nav>
    </div>
  );
}
