import React, { useEffect, useState } from "react";
import YouTube from "react-youtube";
import axios from "../../axios";
import movieTrailer from 'movie-trailer'
import "./style.css";
import ModalComponent from "../ErrorModal";
export default function Row({ title, fetchURL,isLargeRow}) {
  const [movies, setMovies] = useState([]);
  const [errorMessage,setErrorMessage]=useState("")
  const [open,setOpen]=useState(false)
  const [trailerUrl, setTrailerUrl] = useState('');

   const handleOpen = () => {
     setOpen(true);
   };

   const handleClose = () => {
     setOpen(false);
   };

  const base_url = "https://image.tmdb.org/t/p/original/";
  useEffect(() => {
    (async function () {
      let res = await axios.get(fetchURL);
      // console.log(res);
      setMovies(res.data.results);
      return res;
    })();
  }, [fetchURL]);
  console.log("movies", movies);
const opts={
  height:"390",
  width:"100%",
  playerVars:{
    autoPlay:1
  }
}
const handleGetTrailer=(movie)=>{
  // if(trailerUrl){
    // setTrailerUrl("")
  // }else{
    movieTrailer(movie?.name||"")
    .then(url=>{
      const urlParams=new URLSearchParams(new URL(url).search)
      setTrailerUrl(urlParams.get("v"));
      
    })
    .catch(err=>{
      console.log('error ',err.message);
      setErrorMessage(err.message)
      setOpen(oldVal=>!oldVal)
      // handleOpen()
    })
  // }
}
  return (
    <div className="row">
      <h2 className="row__title">{title}</h2>
      <div className="row_posters">
        {movies &&
          movies.map((movie) => (
            <img
              className={`row_poster ${isLargeRow && "row_poster_larger"}`}
              key={movie.id}
              onClick={() => {
                handleGetTrailer(movie);
              }}
              src={`${base_url}${
                isLargeRow ? movie.poster_path : movie.backdrop_path
              }`}
              alt={movie.name}
            />
          ))}
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
      <ModalComponent
        message={errorMessage}
        open={open}
        handleClose={handleClose}
      />
    </div>
  );
}
