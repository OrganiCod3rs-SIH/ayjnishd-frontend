import Image from "next/image";
import React from "react";
import img from "../../images/hero-vector-act.png";
import Link from "next/link"
const Info = () => {
  return (
    <div>
      <div className="vector1 div1 d-row-center">
        <div className="textDiv">
          <h2 className="alignLeft">COCHLEAR IMPLANT</h2>
          <h5 className="description alignLeft">
            The cochlear implant is a prosthetic device, a part of which is
            surgically implanted inside the{" "}
          </h5>
          <Link href="/cis">
          <button className="button alignLeft">Read More</button>
          </Link>
        </div>

        <div className="p-2 imgDiv">
          <Image src={img} alt=".."/>
        </div>
      </div>

      <div className="vector2 div2 d-row-center">
        <div className="p-2 imgDiv">
          <Image src={img} alt=".."/>
        </div>

        <div className="textDiv">
          <h2 className="alignRight">IMPACT OF COCHLEAR IMPLANT</h2>
          <h5 className="description alignRight">
            Hearing impairment has a significant impact on the child and his
            family. This impact is seen on every aspect of life
          </h5>
          <Link href="/impactofci">
          <button className="button alignRight">Read More</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Info;
