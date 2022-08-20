import React, { useEffect, useState } from 'react'
import axios from 'axios';

export default function News() {
  const [data , setData] = useState([""]);
  const src = `https://images.livemint.com/img/2022/04/21/600x338/long_covid_symptoms_1650540839356_1650540839488.jpg`;
  useEffect(()=>{
    axios.get("https://saurav.tech/NewsAPI/top-headlines/category/health/in.json")
    fetch("https://saurav.tech/NewsAPI/top-headlines/category/health/in.json")
    .then((res)=>{
      return res.json();
    }).then((response)=>{
      // console.log(response)
      // console.log(response.articles)
      const x = response.articles;
      // console.log(x)
      setData(x)
    })
  },[])
  return (
   <div>
    <h2 className='text-center p-5'>LATEST NEWS</h2>

    <h2 className='text-center p-5'>READ MORE</h2>
   </div>
    
  )
}
