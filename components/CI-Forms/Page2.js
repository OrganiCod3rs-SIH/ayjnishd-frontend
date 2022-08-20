import React from 'react'
import Link from 'next/link'
export default function page2() {
  return (
    <div>
        <div className="child m-3 p-3 border-main">
            <h4 className="main-color">DETAILS OF THE CHILD</h4>
            <form>
                <div className="form-group m-3">
                    <label htmlhtmlFor="exampleInputName1 my-1">Name</label>
                    <input type="name" className="form-control" id="exampleInputName1" placeholder=""/>
                </div>
                <div className="form-group m-3">
                    <label htmlhtmlFor="exampleInputDate1 my-1">Date  of Birth</label>
                    <input type="date" className="form-control" id="exampleInputDate1" placeholder=""/>
                </div>
                <div className="form-group m-3">
                    <label htmlhtmlFor="exampleInputNumber1 my-1">Age</label>
                    <input type="number" className="form-control" id="exampleInputNumber1" placeholder=""/>
                </div>
                <div className="form-group gender m-3 d-flex">
                    <p>Gender : </p>
                    <div className="form-check form-check-inline mx-3">
                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
                        <label className="form-check-label" htmlFor="inlineRadio1">Male</label>
                    </div>
                    <div className="form-check form-check-inline mx-3">
                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
                        <label className="form-check-label" htmlFor="inlineRadio2">Female</label>
                    </div>
                    <div className="form-check form-check-inline mx-3">
                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3" />
                        <label className="form-check-label" htmlFor="inlineRadio3">Transgender</label>
                    </div>
                </div>
                <div className="form-group m-3">
                    <label htmlhtmlFor="exampleInputState1 my-1">State</label>
                    <input type="name" className="form-control" id="exampleInputState1" placeholder=""/>
                </div>
                <div className="form-group m-3">
                    <label htmlhtmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder=""/>
                </div>
                <div className="form-group m-3">
                    <label htmlFor="exampleFormControlSelect1">Degree of Hearing Loss - Select One</label>
                    <select className="form-control" id="exampleFormControlSelect1">
                    <option>Mild</option>
                    <option>Moderate</option>
                    <option>Moderately Severe</option>
                    <option>Severe</option>
                    <option>Profound</option>
                    </select>
                </div>
                <div className="form-group m-3">
                    <label htmlFor="exampleFormControlSelect2">Type of Hearing Loss - Select One</label>
                    <select className="form-control" id="exampleFormControlSelect2">
                    <option>Conductive</option>
                    <option>Mixed</option>
                    <option>Sensorineural</option>
                    </select>
                </div>
            </form>
        </div>
        <div className="parents m-3 p-3 border-main">
            <h4 className="main-color">PARENT`&apos;`S INFORMATION</h4>
            <div className="father my-5">
                <h6>FATHER`&apos;`S DETAILS ( Fill care giver’s details if applicable &amp;indicate in remark)</h6>
                <form>
                <div className="form-group m-3">
                    <label htmlhtmlFor="exampleInputName2 my-1">Name</label>
                    <input type="name" className="form-control" id="exampleInputName2" placeholder=""/>
                </div>
                <div className="form-group m-3">
                    <label htmlhtmlFor="exampleInputNumber1 my-1">Age</label>
                    <input type="number" className="form-control" id="exampleInputNumber1" placeholder=""/>
                </div>
                <div className="form-group m-3">
                    <label htmlhtmlFor="exampleInputReligion2 my-1">Religion</label>
                    <input type="name" className="form-control" id="exampleInputReligion2" placeholder=""/>
                </div>
                <div className="form-group m-3">
                    <label htmlFor="exampleFormControlSelect3">Category</label>
                    <select className="form-control" id="exampleFormControlSelect3">
                    <option>General</option>
                    <option>OBC</option>
                    <option>SC</option>
                    <option>ST</option>
                    <option>NT</option>
                    </select>
                </div>
                <div className="form-group m-3">
                    <label htmlFor="exampleFormControlSelect4">Educational Qualification</label>
                    <select className="form-control" id="exampleFormControlSelect4">
                    <option>10th</option>
                    <option>12th</option>
                    <option>Graduation</option>
                    <option>PG</option>
                    <option>PhD</option>
                    <option>Professional Degree</option>
                    </select>
                </div>
                <div className="form-group m-3">
                    <label htmlhtmlFor="exampleInputProfession2 my-1">Profession</label>
                    <input type="name" className="form-control" id="exampleInputProfession2" placeholder=""/>
                </div>
                <div className="form-group m-3">
                    <label htmlFor="exampleFormControlTextarea1">Permanent Address</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <div className="form-group m-3">
                    <label htmlFor="exampleFormControlTextarea2">Address for Communication (With pin code)</label>
                    <textarea className="form-control" id="exampleFormControlTextarea2" rows="3"></textarea>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                    <label className="form-check-label" htmlFor="defaultCheck1">
                    If Want The Communication Address Same As Permanent Address Then Select The Checkbox
                    </label>
                </div>
                <div className="form-group m-3">
                    <label htmlhtmlFor="exampleInputNumber2 my-1">Residence Number</label>
                    <input type="name" className="form-control" id="exampleInputNumber2" placeholder="(xxx) xxx-xxxx"/>
                </div>
                <div className="form-group m-3">
                    <label htmlhtmlFor="exampleInputNumber3 my-1">Mobile Number</label>
                    <input type="phone" className="form-control" id="exampleInputNumber3" placeholder="xxx-xxx-xxxx"/>
                </div>
                <div className="form-group m-3">
                    <label htmlhtmlFor="exampleInputNumber4 my-1">Annual Income</label>
                    <input type="number" className="form-control" id="exampleInputNumber4" placeholder=""/>
                </div>
                <div className="form-group m-3">
                    <label htmlhtmlFor="exampleInputNumber5 my-1">Aadhar Card Number</label>
                    <input type="number" className="form-control" id="exampleInputNumber5" placeholder=""/>
                </div>
            </form>
            </div>
            <div className="mother mt-5">
                <h6>MOTHER`&apos;`S DETAILS ( Fill care giver`&apos;`s details if applicable &amp;indicate in remark)</h6>
                <form>
                <div className="form-group m-3">
                    <label htmlhtmlFor="exampleInputName3 my-1">Name</label>
                    <input type="name" className="form-control" id="exampleInputName3" placeholder=""/>
                </div>
                <div className="form-group m-3">
                    <label htmlhtmlFor="exampleInputNumber6 my-1">Age</label>
                    <input type="number" className="form-control" id="exampleInputNumber6" placeholder=""/>
                </div>
                <div className="form-group m-3">
                    <label htmlhtmlFor="exampleInputReligion3 my-1">Religion</label>
                    <input type="name" className="form-control" id="exampleInputReligion3" placeholder=""/>
                </div>
                <div className="form-group m-3">
                    <label htmlFor="exampleFormControlSelec5t">Category</label>
                    <select className="form-control" id="exampleFormControlSelect5">
                    <option>General</option>
                    <option>OBC</option>
                    <option>SC</option>
                    <option>ST</option>
                    <option>NT</option>
                    </select>
                </div>
                <div className="form-group m-3">
                    <label htmlFor="exampleFormControlSelect6">Educational Qualification</label>
                    <select className="form-control" id="exampleFormControlSelect6">
                    <option>10th</option>
                    <option>12th</option>
                    <option>Graduation</option>
                    <option>PG</option>
                    <option>PhD</option>
                    <option>Professional Degree</option>
                    </select>
                </div>
                <div className="form-group m-3">
                    <label htmlhtmlFor="exampleInputProfession3 my-1">Profession</label>
                    <input type="name" className="form-control" id="exampleInputProfession3" placeholder=""/>
                </div>
                <div className="form-group m-3">
                    <label htmlFor="exampleFormControlTextarea3">Permanent Address</label>
                    <textarea className="form-control" id="exampleFormControlTextarea3" rows="3"></textarea>
                </div>
                <div className="form-group m-3">
                    <label htmlFor="exampleFormControlTextarea4">Address for Communication (With pin code)</label>
                    <textarea className="form-control" id="exampleFormControlTextarea4" rows="3"></textarea>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="defaultCheck2"/>
                    <label className="form-check-label" htmlFor="defaultCheck2">
                    If Want The Communication Address Same As Permanent Address Then Select The Checkbox
                    </label>
                </div>
                <div className="form-group m-3">
                    <label htmlhtmlFor="exampleInputNumber7 my-1">Residence Number</label>
                    <input type="name" className="form-control" id="exampleInputNumber7" placeholder="(xxx) xxx-xxxx"/>
                </div>
                <div className="form-group m-3">
                    <label htmlhtmlFor="exampleInputNumber8 my-1">Mobile Number</label>
                    <input type="phone" className="form-control" id="exampleInputNumber8" placeholder="xxx-xxx-xxxx"/>
                </div>
                <div className="form-group m-3">
                    <label htmlhtmlFor="exampleInputNumber9 my-1">Annual Income</label>
                    <input type="number" className="form-control" id="exampleInputNumber9" placeholder=""/>
                </div>
                <div className="form-group m-3">
                    <label htmlhtmlFor="exampleInputNumber10 my-1">Aadhar Card Number</label>
                    <input type="number" className="form-control" id="exampleInputNumber10" placeholder=""/>
                </div>
            </form>
            </div>
        </div>
        <div className="family m-3 p-3 border-main">
            <h4 className="main-color">FAMILY DETAILS</h4>
            <form>
                <div className="form-group gender m-3 d-flex">
                    <p>Family Set Up : </p>
                    <div className="form-check form-check-inline mx-3">
                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
                        <label className="form-check-label" htmlFor="inlineRadio1">Joint</label>
                    </div>
                    <div className="form-check form-check-inline mx-3">
                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
                        <label className="form-check-label" htmlFor="inlineRadio2">Nuclear</label>
                    </div>                    
                </div>
                <div className="siblings m-3 d-flex">
                        <p>Siblings :</p>
                        <div className="form-group m-3 ">
                            <label htmlhtmlFor="exampleInputNumber10 my-1">Brothers</label>
                            <input type="number" className="form-control" id="exampleInputNumber10" placeholder=""/>
                        </div>
                        <div className="form-group m-3">
                            <label htmlhtmlFor="exampleInputNumber10 my-1">Sisters</label>
                            <input type="number" className="form-control" id="exampleInputNumber10" placeholder=""/>
                        </div>
                </div>
                <div className="form-group gender mx-3 mt-3 d-flex">
                    <p>Any person with disability in the family? YES/NO If yes, give details : </p>
                    <div className="form-check form-check-inline mx-3">
                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
                        <label className="form-check-label" htmlFor="inlineRadio1">Yes</label>
                    </div>
                    <div className="form-check form-check-inline mx-3">
                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
                        <label className="form-check-label" htmlFor="inlineRadio2">No</label>
                    </div>  
                                      
                </div>
                <textarea className="form-control mx-3 mb-3" id="exampleFormControlTextarea3" rows="3"></textarea>
                <div className="form-group gender mx-3 mt-3 d-flex">
                    <p>Any person in the family with cochlear implant? YES/NO If yes, give detail : </p>
                    <div className="form-check form-check-inline mx-3">
                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
                        <label className="form-check-label" htmlFor="inlineRadio1">Yes</label>
                    </div>
                    <div className="form-check form-check-inline mx-3">
                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
                        <label className="form-check-label" htmlFor="inlineRadio2">No</label>
                    </div>  
                                      
                </div>
                <textarea className="form-control mx-3 mb-3" id="exampleFormControlTextarea3" rows="3"></textarea>
            </form>
        </div>
        <Link href="/ci-forms/page2">
            <button type="button" className="btn-sih btn text-center m-3 right">Proceed to Page3</button>
        </Link>
        <br />
        <br />
    </div>
  )
}