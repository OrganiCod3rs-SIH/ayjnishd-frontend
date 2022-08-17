import React from 'react'
import Link from "react-router-dom"
export default function index() {
  return (
    <div>
        <div className="m-5">
            <h3 className="main-color">Criteria for Cochlear Implant surgery under ADIP scheme</h3>
            <h5>(A child is eligible for only unilateral implantation under the scheme)</h5>
            <br />
            <p>Please read “CI Cadidacy” for the eligibility criteria for Cochlear Implant surgery as per ADIP scheme guidelines. The full details regarding the scheme is available under “ADIP scheme” link which include ADIP scheme, Guidelines for HI for financial assistance under ADIP &amp; Guidelines for CI and corrigendum. Application with incomplete information and with out copy of required documents as attachments will not be considered.

            You are requested to confirm the check list given below before filling up the application form so that the eligibility is confirmed before filling up the form.</p>
            <br />
            <form>
                <table>
                    {/* <tr>
                        <th>Company</th>
                        <th>Contact</th>
                        <th>Country</th>
                    </tr> */}
                    <tr className='row'>
                        <td className='col-1'>1</td>
                        <td className='col-md-10 col-9'><label class="form-check-label1" htmlFor="exampleCheck1">An Indian Citizenship</label></td>
                        <td className='col-1'><input type="checkbox" class="form-check-input1" id="exampleCheck1"/></td>
                        
                    </tr>               
                    <tr className='row'>
                        <td className='col-1'>2</td>
                        <td className='col-md-10 col-9'><label class="form-check-label2" htmlFor="exampleCheck2">Age of the child with any of these:
                        <ul>
                            <li>Child with congenital deafness (since birth) upto 5 years as on 31st December in the current year
                            </li>
                            <li>Upto 12 years for child with post lingual deafness i.e. after development of speech &amp; language
                            </li>
                            <li>Birth certificate of the child
                            </li>
                        </ul>
                        </label></td>
                        <td className='col-1'><input type="checkbox" class="form-check-input2" id="exampleCheck2"/></td>
                        
                    </tr>               
                    <tr className='row'>
                        <td className='col-1'>3</td>
                        <td className='col-md-10 col-9'><label class="form-check-label3" htmlFor="exampleCheck3">Degree of hearing lossSevere to Profound sensorineural hearing loss in both ears
                        </label></td>
                        <td className='col-1'><input type="checkbox" class="form-check-input3" id="exampleCheck3"/></td>
                        
                    </tr>               
                    <tr className='row'>
                        <td className='col-1'>4</td>
                        <td className='col-md-10 col-9'><label class="form-check-label4" htmlFor="exampleCheck4">Child should not have any associated developmental delay or Mental Retardation or cognitive deficit etc.
                        </label></td>
                        <td className='col-1'><input type="checkbox" class="form-check-input4" id="exampleCheck4"/></td>
                        
                    </tr>               
                    <tr className='row'>
                        <td className='col-1'>5</td>
                        <td className='col-md-10 col-9'><label class="form-check-label5" htmlFor="exampleCheck5">Hearing Disability certificate
                        </label></td>
                        <td className='col-1'><input type="checkbox" class="form-check-input5" id="exampleCheck5"/></td>
                        
                    </tr>               
                    <tr className='row'>
                        <td className='col-1'>6</td>
                        <td className='col-md-10 col-9'><label class="form-check-label6" htmlFor="exampleCheck6">Child should have used suitable hearing aid for atleast 3 months with no significant improvement in speech and language development
                        </label></td>
                        <td className='col-1'><input type="checkbox" class="form-check-input6" id="exampleCheck6"/></td>
                        
                    </tr>    
                    <tr className='row'>
                        <td className='col-1'>7</td>
                        <td className='col-md-10 col-9'><label class="form-check-label7" htmlFor="exampleCheck7">Family Income
                        <ul>
                            <li>100% subsidy for income less than 15,000/- per month
                            </li>
                            <li>50% subsidy for income Rs.15,000 to Rs.20,000 per month
                            </li>
                            <li>Income Certificate of family
                            </li>
                        </ul>
                        </label></td>
                        <td className='col-1'><input type="checkbox" class="form-check-input7" id="exampleCheck7"/></td>
                        
                    </tr>   
                    <tr className='row'>
                        <td className='col-1'>8</td>
                        <td className='col-md-10 col-9'><label class="form-check-label8" htmlFor="exampleCheck8">Done Hearing evaluation &amp; have the reports
                        </label></td>
                        <td className='col-1'><input type="checkbox" class="form-check-input8" id="exampleCheck8"/></td>  
                    </tr>          
                    <tr className='row'>
                        <td className='col-1'>9</td>
                        <td className='col-md-10 col-9'><label class="form-check-label9" htmlFor="exampleCheck9">Done Speech evaluation &amp; have the reports
                        </label></td>
                        <td className='col-1'><input type="checkbox" class="form-check-input9" id="exampleCheck9"/></td>  
                    </tr>          
                    <tr className='row'>
                        <td className='col-1'>10</td>
                        <td className='col-md-10 col-9'><label class="form-check-label10" htmlFor="exampleCheck10">Done Psychological evaluation & have the reports
                        </label></td>
                        <td className='col-1'><input type="checkbox" class="form-check-input10" id="exampleCheck10"/></td>  
                    </tr>          
                    <tr className='row'>
                        <td className='col-1'>11</td>
                        <td className='col-md-10 col-9'><label class="form-check-label11" htmlFor="exampleCheck11">Done Medical Evaluation & have the reports
                        </label></td>
                        <td className='col-1'><input type="checkbox" class="form-check-input11" id="exampleCheck11"/></td>  
                    </tr>          
                    <tr className='row'>
                        <td className='col-1'>12</td>
                        <td className='col-md-10 col-9'><label class="form-check-label12" htmlFor="exampleCheck12">Agreeing to the criteria/condition that Pre implant candidacy evaluation such as Audiological , Radiological( CT Scan/MRI) and vaccination charges are to be borne by the family as not covered under the scheme
                        </label></td>
                        <td className='col-1'><input type="checkbox" class="form-check-input12" id="exampleCheck12"/></td>  
                    </tr>          
                    <tr className='row'>
                        <td className='col-1'>13</td>
                        <td className='col-md-10 col-9'><label class="form-check-label13" htmlFor="exampleCheck13">Agreeing to the criteria that - Caste certificate has to be submitted if SC/ST or will be considered under General quota
                        </label></td>
                        <td className='col-1'><input type="checkbox" class="form-check-input13" id="exampleCheck13"/></td>  
                    </tr>          
                </table>
            </form>
            <button type="button" className="btn-sih btn text-center m-3 right">Proceed</button>
            <br />
        </div>
    </div>
  )
}
