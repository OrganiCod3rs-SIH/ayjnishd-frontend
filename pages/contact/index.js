import React from 'react'
import ContactUs from '../../components/contact/ContactUs'
import Navbar from "../../components/layout/Navbar"
import SideBar from '../../components/layout/SideBar'
import Sidebar_Btn from '../../components/layout/Sidebar-Btn'

export default function index() {
  const arr=["Contact Us","Feedback Form","Regional Centers"]
  const arr_links=["contact","feedback","regionalcenters"]
  return (
    <div>
          <Navbar active="Contact"/>
          <div className="d-flex">
              <div className="sidebar"><SideBar heading1="Contact" heading2="Contact Us" arr={arr} alinks={arr_links}/></div>
              <div className="w-100">
                <Sidebar_Btn/>
                <ContactUs/>
              </div>
          </div> 
      </div>
  )
}
