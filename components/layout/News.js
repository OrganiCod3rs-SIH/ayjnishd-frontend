import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";
import Image from "next/image";

async function fetchNews() {
  const news = (
    await axios.get(
      "https://saurav.tech/NewsAPI/top-headlines/category/health/in.json"
    )
  ).data;
  return news;
}

export default function News() {
  const [data, setData] = useState([]);
  const src = `https://images.livemint.com/img/2022/04/21/600x338/long_covid_symptoms_1650540839356_1650540839488.jpg`;
  useEffect(() => {
    fetchNews().then((data) => {
      console.log(data.articles);
      setData(data.articles);
    });
  }, []);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const news = data.slice(0, 5).map((n, i) => {
    return (
      <div key={i}>
        <a href={n.url}>
          <img  src={n.urlToImage} alt="" width={600} height={300} />
        </a>
        <p className="text-center mt-2">{n.title}</p>
        <p className="text-center ">{n.description}</p>
      </div>
    );
  });
  console.log(news);
  return (
    <div>
      <h2 className="text-center p-5">LATEST NEWS</h2>
      <Slider className="mb-5" {...settings}>{news}</Slider>
    </div>
  );
}
