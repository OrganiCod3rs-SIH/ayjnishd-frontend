import Link from "next/link";
import React from "react";

const SideBar = (props) => {
  // console.log(props.alinks)
  return (
    <>
      
      <div className="collapse collapse-horizontal show" id="collapseExample">
        <div className="card sidebar-card card-body">
          <div className="d-flex sidebar-card-inner flex-column flex-shrink-0 p-3 text-dark">
            <Link href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
              
              <span className="fs-4 main-color m-3 ">{props.heading1}</span>
            </Link>
            
            <ul className="nav nav-pills flex-column mb-auto">
              {props.arr.map((item,index)=>(
                  <li className="nav-item" key={index}>
                    <Link href={`${props.alinks[index]}`}>
                      <a className={`${props.heading2===item?"btn btn-sih":"nav-link"}`} aria-current="page">
                        {/* <svg className="bi me-2" width="16" height="16"><use xlink:href="#home"/></svg> */}
                        {item}
                      </a>
                    </Link>
                </li>
              ))}
            </ul>
                        
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;
