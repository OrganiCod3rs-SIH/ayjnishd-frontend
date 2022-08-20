import React from 'react'
import Navbar from "../../components/layout/Navbar"
import SideBar from '../../components/layout/SideBar'
import Sidebar_Btn from '../../components/layout/Sidebar-Btn'
import Singlepdf from '../../components/pdf/SinglePdf'
export default function ci_candidacy() {
  const arr=["About the Scheme","ADIP Scheme","CI Candidacy","Institute","Copyright Act"]
  const arr_links=["aboutthescheme","adipscheme","cicandidacy","institute","copyrightact"]
    return (
      
      <div>
          <Navbar active="About"/>
          <div className="d-flex">
              <div className="sidebar"><SideBar heading1="About" heading2="CI Candidacy" arr={arr} alink="/about" alinks={arr_links}/></div>
              <div className="w-100">
                <Sidebar_Btn/>
                <div className="pdf text-center">
                <h3 className=''>CI Candidacy</h3> 
                <Singlepdf link="1uceGn-uedmSAq7NMpiPe46wjnGz-ZxK4"/>
              </div>
              </div>
          </div> 
      </div>
    )
}
