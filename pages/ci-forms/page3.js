import React from 'react'
import Navbar from "../../components/layout/Navbar"
import Page3 from "../../components/CI-Forms/Page3"
import SideBar from '../../components/layout/SideBar'
export default function index() {
  return (
    <div>
        <Navbar/>
        <div className="row">
            {/* <div className="col-2"><SideBar/></div> */}
            <div className="col-10"><Page3/></div>
        </div> 
    </div>
  )
}
