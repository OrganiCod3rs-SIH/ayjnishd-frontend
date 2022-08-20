import React, { useState } from 'react'
import Navbar from "../../components/layout/Navbar"
import Link from 'next/link'
import Feedback from '../../components/Feedback/Feedback'
export default function index() {
    // const [formData, setFormData] = useState([]);
    return (
        <div>
            <Navbar />
            <div className="row">
                <div className="col-2">Sidebar</div>
                <div className="col-10">
                    <Feedback />
                    {/* <div className="feedback-form m-3 p-3 border-main">
                        <h4 className="main-color">GIVE YOUR FEEDBACK HERE</h4>
                        <form>
                            <div className="form-group m-3">
                                <label htmlFor="exampleInputName1 my-1">Name</label>
                                <input type="name" className="form-control" id="exampleInputName1" placeholder="" />
                            </div>
                            <div className="form-group m-3">
                                <label htmlFor="exampleInputEmail1">Email address</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="" />
                            </div>
                            <div className="form-group m-3">
                                <label htmlFor="exampleInputNumber1 my-1">Contact Number</label>
                                <input type="number" className="form-control" id="exampleInputNumber1" placeholder="" />
                            </div>
                            <div className="form-group m-3">
                                <label htmlFor="exampleInputNumber2 my-1">Case Number of the Cochlear Implantee</label>
                                <input type="number" className="form-control" id="exampleInputNumber2" placeholder="" />
                            </div>
                            <div className="form-group m-3">
                                <label htmlFor="exampleInputName2 my-1">Name of the Cochlear Implantee</label>
                                <input type="name" className="form-control" id="exampleInputName2" placeholder="" />
                            </div>
                            <div className="form-group m-3">
                                <label htmlFor="exampleFormControlTextarea1">Feedback about the surgery</label>
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>
                            <div className="form-group m-3">
                                <label htmlFor="exampleFormControlTextarea2">Childs Improvement in Communication</label>
                                <textarea className="form-control" id="exampleFormControlTextarea2" rows="3"></textarea>
                            </div>
                            <div className="form-group m-3">
                                <label htmlFor="exampleFormControlTextarea2">Suggestion /Requirement</label>
                                <textarea className="form-control" id="exampleFormControlTextarea2" rows="3"></textarea>
                            </div>
                        </form>
                    </div> */}
                    {/* <Link href="/ci-forms/page3">
                        <button type="button" className="btn-sih btn text-center m-3 right">Proceed to Page3</button>
                    </Link> */}
                    <br />
                </div>
            </div>
        </div>
    )
}