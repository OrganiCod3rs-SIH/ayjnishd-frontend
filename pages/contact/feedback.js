import React from 'react'
import Navbar from "../../components/layout/Navbar"
import SideBar from '../../components/layout/SideBar'
import Sidebar_Btn from '../../components/layout/Sidebar-Btn'
import Feedback from '../../components/Feedback/Feedback'
import Link from 'next/link'

export default function feedback() {
    const arr = ["Contact Us", "Feedback", "Regional Centers"]
    const arr_links = ["", "feedback", "regionalcenters"]
    return (
        <div>
            <Navbar active="Contact" />
            <div className="d-flex">
                <div className="sidebar"><SideBar heading1="Contact" heading2="Feedback" arr={arr} alinks={arr_links} /></div>
                <div className="w-100">
                    <Sidebar_Btn />
                    <Feedback />
                </div>
            </div>
        </div>
    )
}
