import React from 'react'
import Navbar from "../../components/layout/Navbar"
import Page2 from "../../components/CI-Forms/Page2"
import SideBar from '../../components/layout/SideBar'
import Sidebar_Btn from '../../components/layout/Sidebar-Btn'
import PdfViewer from '../../components/layout/PdfViewer'
import Allpdfs from '../../components/pdf/Allpdfs'
export default function adipscheme() {
  const arr=["About the Scheme","ADIP Scheme","CI Candidacy","Institute","Copyright Act"]
  const arr_links=["aboutthescheme","adipscheme","cicandidacy","institute","copyrightact"]
  return (
    
    <div>
        <Navbar active="About"/>
        <div className="d-flex">
            <div className="sidebar"><SideBar heading1="About" heading2="ADIP Scheme" arr={arr} alink="/about" alinks={arr_links}/></div>
            <div className="w-100 ms-5">
              <Sidebar_Btn/>
              <h3 className=''>ADIP SCHEME</h3> 
              <Allpdfs link="1bo-ea-pFQyM6tyOJbQova1h80Qv0DLAR"/>
            </div>
        </div> 
    </div>
  )
}
