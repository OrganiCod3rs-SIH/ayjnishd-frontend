import React from 'react'
import Navbar from "../../components/layout/Navbar"
import SideBar from '../../components/layout/SideBar'
import Sidebar_Btn from '../../components/layout/Sidebar-Btn'

export default function checkappdetails() {
  const arr=["Surgical Report","Activation & Mapping","Check Application Status","Check Application Details"]
  const arr_links=["surgicalreport","activation","checkappstatus","checkappdetails"]
    return (
      
      <div>
          <Navbar active="Login"/>
          <div className="d-flex">
              <div className="sidebar"><SideBar heading1="Login" heading2="Check Application Details" arr={arr} alinks={arr_links}/></div>
              <div className="w-100">
                <Sidebar_Btn/>
                Check Application Details
              </div>
          </div> 
      </div>
    )
}