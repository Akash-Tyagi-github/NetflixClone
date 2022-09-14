import React from "react";
import "./Movieslider.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";
const Movieslider = (props) => {
  const [movieimg, setMovieimg] = useState();
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 8,
    arrows:false,
    autoplay: true,
    autoplaySpeed: 2000
  };
  console.log(props.img);
  // setMovieimg(props.img);
  return (
    <>
      <div className="slicker">
        <div>
          <h2 id="movieselect"> Popular Movies</h2>
          <Slider {...settings}>
            {props?.img?.map((elem, index) => {
              console.log(elem);
              // console.log(`https://image.tmdb.org/t/p/w500` + `${elem?.backdrop_path}`);

              return (
                <div key={index} >
                  <img
                    id="slideimg"
                    src={
                      `https://image.tmdb.org/t/p/w500` +
                      `${elem?.backdrop_path}`
                    }
                  />
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Movieslider;
