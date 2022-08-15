import React from 'react'
import { BsFillPersonFill } from 'react-icons/bs';
import { BiTimeFive } from 'react-icons/bi';

export default function News({newsData}) {
  const {articles = []} = newsData;
  return (
    <div className='newsPage'>
      <h1 className='text-center p-5'>LATEST NEWS ABOUT COCHLEAR IMPLANT</h1>
      <div className='news'>
      {articles.map(item =>(
        <div className="newsCard m-2">
          <img src={item.urlToImage} alt="Snow"/>
          <p className='top-left'><BiTimeFive/> {item.publishedAt}</p>
          
          <a href={item.url} className="bottom-left">{item.title}</a>
          <p className='top-right'><BsFillPersonFill/> {item.author}</p>
      </div>
      ))}
      </div>
      <button className='btn-sih text-center'>Read more news</button>
      
    </div>
  )
}