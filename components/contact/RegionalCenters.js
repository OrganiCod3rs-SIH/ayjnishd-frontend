import React from 'react'
import Image from 'next/image'
import img1 from "../../images/region2.jpg"
import { FiMail } from "react-icons/fi";

const regionalData = [
    {
        id:1,
        title:"Northern Regional Centre of AYJNIHH (New Delhi)",
        address:"Kasturba Niketan, Lajpat Nagar II, New Delhi - 110 024",
        phone:"Phone : 011-29817919 Fax: 011 – 2981 5093",
        email:"mailto:ayjnihhnrc@gmail.com"
    },
    {
        id:2,
        title:"Eastern Regional Centre of AYJNIHH (Kolkata)",
        address:"National Institute for the Orthopaedically Handicapped Campus B.T. Road, Bon Hoogly,Kolkata – 700 090",
        phone:"Telephone/Fax: 033 – 2531 1427",
        email:"mailto:ercnihh@sify.com"
    },
    {
        id:3,
        title:"Northern Regional Centre of AYJNIHH (New Delhi)",
        address:"Kasturba Niketan, Lajpat Nagar II, New Delhi - 110 024",
        phone:"Phone : 011-29817919 Fax: 011 – 2981 5093",
        email:"mailto:ayjnihhnrc@gmail.com"
    },
    {
        id:4,
        title:"Northern Regional Centre of AYJNIHH (New Delhi)",
        address:"Kasturba Niketan, Lajpat Nagar II, New Delhi - 110 024",
        phone:"Phone : 011-29817919 Fax: 011 – 2981 5093",
        email:"mailto:ayjnihhnrc@gmail.com"
    }
]
export default function RegionalCenters() {
  return (
    <div className="d-flex flex-column ">
        <div className="p-2 flex-fill">
            <h3 className='mx-5 regionH my-2'>REGIONAL CENTERS</h3>
            <span className='mx-5'>The Institute has four Regional Centres:</span>
        </div>
        {
            regionalData.map((item,index)=>(
            <div index = {item.id} className="d-flex justify-content-between mx-5 my-3 cardRegional ">
                <div className="flex-shrink-0">
                            <Image src={img1} alt="..." layout='' width={450} height={280}/>
                    </div>
                    <div className="d-flex flex-column justify-content-between">
                        <div className='p-3'>
                            <div className="py-2 cardDesT"><h3>{item.title}</h3></div>
                            <div className="py-1 cardDes" ><span>{item.address}</span></div>
                            <div className="py-1 cardDes"><span>{item.phone}</span></div>
                        </div>
                        <div className='p-3 cardDes'>
                            {/* <button className='card-mail'><FiMail/> {' '} Mail Us</button> */}
                            <button className='card-mail'><a className='btn-mail' href={item.email}><FiMail/> {' '}Mail US</a></button>
                        </div>
                    </div>
            </div>
            ))
        }    
    </div>
  )
}
