import React from 'react'
import Navbar from "../../components/layout/Navbar"
import CiForms from "../../components/CI-Forms/Ci-forms"
import SideBar from '../../components/layout/SideBar'
export default function index() {
  return (
    <div>
        <Navbar/>
        <div className="row">
            {/* <div className="col-2"><SideBar/></div> */}
            <div className="col-10"><CiForms/></div>
        </div> 
    </div>
  )
}
