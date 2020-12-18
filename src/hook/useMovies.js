import React, { useEffect, useState } from 'react'
import axios from '../axios'
export default function useMovies({fetchUrl}) {
    const [movies,setMovies]=useState([])

    useEffect(()=>{
        (async function(){
            let res = await axios.get(fetchUrl);
            setMovies(res.data.results)
            return res
        })()
    },[fetchUrl])
    return {movies,setMovies}
}
