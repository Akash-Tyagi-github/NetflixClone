import React from "react";
import netflixlogo from "../../Assets/netflixlogo.png";
import "./Displaymovie.css";
import Movieslider from "./Movieslider";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
const Displaymovie = () => {
  const [movies, setMovies] = useState();
  const [link, setLink] = useState();

  async function getmovieapi() {
    await axios
      .get(
        "https://api.themoviedb.org/3/movie/top_rated?api_key=1f4afe2164f64346d065a4f8af0e6f67&language=en-US&page=1"
      )
      .then((res) => {
        console.log(res.data.results);
        setMovies(res.data.results);
        console.log(
          "https://image.tmdb.org/t/p/w500" +
            `${res.data.results?.[0]?.backdrop_path}`
        );
        // console.log(movies?.[0]?.title);
        setLink(
          "https://image.tmdb.org/t/p/w500" +
            `${res.data.results?.[0]?.backdrop_path}`
        );
      })
      .error((error) => {
        console.log(error);
      });
  }
  useEffect(() => {
    getmovieapi();
  }, []);
  //   style={{backgroundImage:`url(${movies?.[0]?.poster_path})`}}
  // src={`https://image.tmdb.org/t/p/w500` + `${elem?.backdrop_path}`}

  return (
    <>
      <div className="displaymovie">
        <div
          className="component1"
          style={{
            backgroundImage: `url(${link})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <div className="navbar">
            <img src={netflixlogo} style={{ width: "200px", height: "80px" }} />
            <ul>
              <li>Home</li>
              <li>Tv Series</li>
              <li>Movies</li>
              <li>New popular</li>
              <li>My list</li>
            </ul>
            <Link to="/">
              <button id="logoutbtn">Log Out</button>
            </Link>
            
          </div>
          <h1 id="moviename">{movies?.[0]?.title}</h1>
          <div>
            <button id="playbtn">Play</button>
            <button id="moreinfo">More info</button>
          </div>
          <div className="moviedetail">
            <span id="detail">{movies?.[0]?.overview}</span>
          </div>
          {/*           
          <div className="gradient">
            
            </div> */}
        </div>

        <div className="component2">
          <Movieslider img={movies} />
        </div>
      </div>
    </>
  );
};

export default Displaymovie;
