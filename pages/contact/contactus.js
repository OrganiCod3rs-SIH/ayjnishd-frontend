import React from "react";
import Navbar from "../../components/layout/Navbar";
import SideBar from "../../components/layout/SideBar";
import Sidebar_Btn from "../../components/layout/Sidebar-Btn";
import img1 from "../../images/head.jpg";
import Image from "next/image";
import { FiMail } from "react-icons/fi";

const regionalData = [
  {
    id: 1,
    title: "Assistant Director",
    address: "Regional Center of AYJNISHD Manovikas Nagar Secunderabad - 500 009 ",
    phone: "Phone : 040-27753385/27750827 (Ext. 207) Clinics : Audiology - 040-27950138, Speech - 040-27955365 Fax : 040-27758500",
    email: "mailto:ayjnihhnrc@gmail.com",
  },
  {
    id: 2,
    title: "Assistant Director",
    address:
      "Regional Centerof AYJNISHD NIMH Building, Plot No. 44-A Block - C, Sector-40 Gautam Budh Nagar, Noida -201303",
    phone: "Telephone/Fax: 033 – 2531 1427",
    email: "mailto:ercnihh@sify.com",
  },
  {
    id: 3,
    title: "Northern Regional Centre of AYJNIHH (New Delhi)",
    address: "Kasturba Niketan, Lajpat Nagar II, New Delhi - 110 024",
    phone: "Phone : 011-29817919 Fax: 011 – 2981 5093",
    email: "mailto:ayjnihhnrc@gmail.com",
  },
  {
    id: 4,
    title: "Northern Regional Centre of AYJNIHH (New Delhi)",
    address: "Kasturba Niketan, Lajpat Nagar II, New Delhi - 110 024",
    phone: "Phone : 011-29817919 Fax: 011 – 2981 5093",
    email: "mailto:ayjnihhnrc@gmail.com",
  },
];

export default function contactus() {
  const arr = ["Contact Us", "Feedback Form", "Regional Centers"];
  const arr_links = ["contactus", "feedback", "regionalcenters"];
  return (
    <div>
      <Navbar active="Contact" />
      <div className="d-flex">
        <div className="sidebar">
          <SideBar
            heading1="Contact"
            heading2="Contact Us"
            arr={arr}
            alinks={arr_links}
          />
        </div>
        <div className="w-100">
          <Sidebar_Btn />
          {/* <ContactUs/> */}
          <div className="vector1 div1 d-row-start p-5">
            <div className="textDivC">
              <h1>Contact Us</h1>

              <h3 className="alignLeft py-3">
                Ali Yavar Jung National Institute of Speech and Hearing
                Disabilities(Divyangjan) K.C. Marg, Bandra (W) Reclamation
              </h3>
              <h5 className="py-1 alignLeft">Mumbai - 400 050</h5>
              <h5 className="py-1 alignLeft">
                Phone : 022-26400215/26409176/26400263
              </h5>
              <h5 className="py-1 alignLeft">Fax : 022-26404170</h5>
            </div>
            <div className="p-2 imgDivC">
              <Image src={img1} alt=".." />
              <button className="btn-mailC">
                <a className="btn-mailC" href="mailto:ayjnihh-mum@nic.in">
                  <FiMail /> Mail US
                </a>
              </button>
            </div>
          </div>
          <h2 className="px-5">Regional Centre, Contact:</h2>
          <div className="container">
            <div className="row row-cols-2">
              {regionalData.map((item, index) => (
                <div key={index} className="col">
                  <div className="card mb-3">
                    <div className="row g-0">
                      <div className="col-md-4">
                        <Image
                          src={img1}
                          className="img-fluid rounded-start"
                          alt="..."
                        />
                      </div>
                      <div className="col-md-8">
                        <div className="card-body">
                          <h5 className="text-start cardDesC">{item.title}</h5>
                          <p className="text-start cardDesCd">{item.address}</p>
                          <p className="text-start cardDesCd">{item.phone}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
