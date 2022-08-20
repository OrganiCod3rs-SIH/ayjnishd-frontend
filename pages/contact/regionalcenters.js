import React from 'react'
import RegionalCenters from '../../components/contact/RegionalCenters'
import Navbar from "../../components/layout/Navbar"
import SideBar from '../../components/layout/SideBar'
import Sidebar_Btn from '../../components/layout/Sidebar-Btn'

export default function regional_centers() {
  const arr=["Contact Us","Feedback Form","Regional Centers"]
  const arr_links=["","feedback","regionalcenters"]
  return (
    <div>
          <Navbar active="Contact"/>
          <div className="d-flex">
              <div className="sidebar"><SideBar heading1="Contact" heading2="Regional Centers" arr={arr} alinks={arr_links}/></div>
              <div className="w-100">
                <Sidebar_Btn/>
                <RegionalCenters/>
              </div>
          </div> 
      </div>
  )
}
