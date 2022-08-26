import React from 'react'
import Navbar from "../../components/layout/Navbar"
import SideBar from '../../components/layout/SideBar'
import Sidebar_Btn from '../../components/layout/Sidebar-Btn'
import RequestForm from './RequestForm'

export default function request_for_audiologist() {
  const arr=["CI Enrollment","Request for Audiologist","Empanelment of Hospitals"]
  const arr_links=["cienrollment","requestforaudiologist","empanelment"]
    return (
      
      <div>
          <Navbar active="Apply"/>
          <div className="d-flex">
              <div className="sidebar"><SideBar heading1="Apply" heading2="Request for Audiologist" arr={arr} alink="/about" alinks={arr_links}/></div>
              <div className="w-100">
                <Sidebar_Btn/>
                <RequestForm/>
              </div>
          </div> 
      </div>
    )
}