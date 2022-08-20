import React from "react";
import Image from "next/image";
import { TbBrandTelegram } from "react-icons/tb";
import Link from "next/link";
import aboutimg1 from "../../images/about.png";
import aboutimg2 from "../../images/about2.jpg";
export default function AboutUs() {
  return (
    <>
      <div className="container">
        <div className="row">
          <h3>ABOUT US</h3>
          <Link href="http://adipcochlearimplant.in/about.html">
            <a className="aboutalink">
              <TbBrandTelegram />
              &nbsp;Visit Our Official Website
            </a>
          </Link>
          <div className="col-8">
            <p>
              Ali Yavar Jung National Institute for the Hearing Handicapped
              (AYJNIHH) was established on 9th August 1983. It is an autonomous
              organisation under the Ministry of Social Justice and Empowerment,
              Government of India, New Delhi. The Institute is located at Bandra
              (West), Mumbai – 400 050.
            </p>
          </div>
          <div className="col-4">
            <Image src={aboutimg1} width="300px" height="200px" alt="aboutus" />
          </div>
        </div>
        <p>
          Regional Centres of the Institute have been established at Kolkata
          (1984), New Delhi (1986), Secundarabad (1986) and Bhubaneshwar (1986-
          in association with Government of Orissa). These are centres aimed at
          meeting the local and regional needs in terms of manpower development
          and services.
        </p>
        <p>
          The District Disability Rehabilitation Centre (DDRCs) under Gramin
          Punarvasan Yojana (GPY) a programme of the Ministry of Social Justice
          and Empowerment, Government of India was started in the year 2000. The
          objective of the programme is to provide total rehabilitation to
          persons with sensory (hearing and vision), physical and mental
          disabilities.
        </p>
        <p>
          Under this programme, 24 DDRCs were allotted to AYJNIHH. All the 24
          DDRCs, on completion of successful establishment and running for three
          years, are handed over to State Governments/District
          Administration/NGO.
        </p>
        <p>
          Composite Regional Center (CRC), Bhopal is a service model initiated
          by the Ministry of Social Justice & Empowerment, Govt. of India,
          established on 14th August, 2000. The Center is functioning under the
          administrative control of AYJNIHH since February, 2006. An one more
          CRC at Ahmedabad, Gujarat was established on 16th Aug, 2011 and this
          CRC also functioning under the administrative control of AYJNIHH.
        </p>
        <h1>OBJECTIVES OF THE INSTITUTE</h1>
        <br />
        <div className="row">
          <div className="col-8">
            <p>
              <b>Manpower Development:</b>
              To deal with the various aspects of rehabilitation of the Hearing
              Handicapped, various undergraduate and post graduate courses are
              being offered. The Institute is rated excellent by the RCI.
              Research: Research in the areas of identification, intervention,
              educational approaches, remedial teaching methods, jobs for the
              hearing handicapped and technology development have been carried
              out.
            </p>
          </div>
          <div className="col-4">
            <Image
              className="aboutimg"
              src={aboutimg2}
              width="300px"
              height="200px"
              alt="aboutus2"
            />
          </div>
        </div>
        <p>
          <b>Educational Programmes:</b> By studying the existing school for the
          deaf, curriculum followed, methods of teaching etc. and supplementing
          or strengthening them by way of improving existing educational
          facilities and developing new strategies wherever required, newer
          measures such as open school for the illiterate/drop out is being
          conducted as model activity.
        </p>
        <p>
          <b>Service Facilities:</b> Strategies for early identification and
          rehabilitative procedures. films and audio visuals on vocational
          training and job placement, etc. are being developed.
        </p>
        <p>
          <b>Community Programme:</b> Identification and intervention, home
          bound training, correspondence training and also tele–rehabilitation
          services are being rendered and evolved with emerging needs.
        </p>
        <p>
          <b>Material Development:</b> Required for (a) education, like teaching
          aids, audio–visuals etc. (b) public awareness and community education,
          literacy programme for adult deaf, Parent Counseling and Programme for
          strengthening voluntary organisations.
        </p>
        <p>
          <b>Information and Documentation:</b> Documenting and disseminating
          the latest information and developments in the science of hearing,
          speech and related technology is being done.
        </p>
        <p>
          <b>Related Assosciations:</b>
        </p>
        <Link href="/">
          <a className="aboutalink">
            <TbBrandTelegram />
            &nbsp;Memorandum of Association
          </a>
        </Link>
        <br />
        <Link href="/">
          <a className="aboutalink">
            <TbBrandTelegram />
            &nbsp;By-Laws of Institute
          </a>
        </Link>
      </div>
    </>
  );
}
