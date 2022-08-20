import React from 'react'
import Navbar from "../../components/layout/Navbar"
import SideBar from '../../components/layout/SideBar'
import Sidebar_Btn from '../../components/layout/Sidebar-Btn'

export default function ci_enrollment() {
  const arr=["CI Enrollment","Request for Audiologist","Empanelment of Hospitals"]
  const arr_links=["cienrollment","requestforaudiologist","empanelment"]
    return (
      
      <div>
          <Navbar active="Apply"/>
          <div className="d-flex">
              <div className="sidebar"><SideBar heading1="Apply" heading2="CI Enrollment" arr={arr} alink="/about" alinks={arr_links}/></div>
              <div className="w-100">
                <Sidebar_Btn/>
                CI Candidacy
              </div>
          </div> 
      </div>
    )
}