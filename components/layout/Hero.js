import React from "react";
import Image from "next/image";
import hero_vector_art from "../../images/hero-vector-act.png";
import dynamic from "next/dynamic";
import Link from "next/link";
const AR = dynamic(() => import("./AR"), { ssr: false });

export default function Hero() {
  return (
    <>
      <div className="hero-bg">
        <div className="container col-xxl-11 py-3">
          <div className="row align-items-center">
            <div className="hero-text col-lg-7">
              <h2 className="lh-1 mb-3">
                Cochlear Implant under ADIP Scheme of Government of India
              </h2>
              <p className="lead">by</p>
              <h4 className="lh-1 mb-3 text-secondary">
                Ali Yavar Jung National Institute of Speech and Hearing
                Disabilities,Mumbai
              </h4>
              <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                {/* <button type="button" className="btn btn-primary btn-lg px-4 me-md-2">Primary</button> */}
              </div>
            </div>
            <div className="hero-bg-img col-10 col-sm-8 col-lg-5 d-column-center">
              <AR />
              <Link href="/check">
                <button type="button" className="btn-sih btn text-center m-1">
                  Check Hearing Ability
                </button>
              </Link>
              {/* <img src={hero_vector_art} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy"/> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
