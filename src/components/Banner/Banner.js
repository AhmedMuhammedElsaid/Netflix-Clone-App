import React, { useEffect, useState } from 'react'
import axios from "../../axios";
import request from '../../request'

import './style.css'
export default function Banner() {
    const [movie,setMovie]=useState([])

    useEffect(() => {
      (async function() {
          const res = await axios.get(request.fetchNetflixOriginals)
          console.log('banner request',res.data.results);
          setMovie(res.data.results[
              Math.floor(Math.random()* res.data.results.length)
          ])
      })()
    }, [])
    console.log('movie banner',movie);
   const truncate=(str,n)=>str?.length>n ? `${str.substr(0,n-1)}....`:str;
    return (
      <header
        className="banner"
        style={{
          backgroundSize: "cover",
          backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`,
          backgroundPosition: " center center",
        }}
      >
        <div className="banner-content">
          <h1 className="banner__title">
            {movie?.name || movie?.title || movie?.original_name}
          </h1>
          <div className="banner-buttons">
            <button className="banner__button">Play</button>
            <button className="banner__button">My List</button>
          </div>
          <h1 className="banner-description">{truncate(movie?.overview,150)}</h1>
        </div>
        <div className='banner__fadeBottom'/>
      </header>
    );
}
