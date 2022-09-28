import React, { useEffect, useState } from 'react'
import axios from '../axios'
import './Row.css'

const baseImgUrl = 'https://image.tmdb.org/t/p/original'

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl)
      console.log(request)
      setMovies(request.data.results)
      return request
    }
    fetchData()
  }, [fetchUrl])

  return (
    <div className='row'>
      {/* title */}
      <h2>{title}</h2>
      {/* posters */}
      <div className='row__posters'>
        {movies.map(
          (movie) =>
            movie.backdrop_path !== null && (
              <img
                className={`row__poster ${isLargeRow && 'row__posterLarge'}`}
                src={`${baseImgUrl}${
                  isLargeRow ? movie.poster_path : movie.backdrop_path
                }`}
                alt={movie.name}
                key={movie.id}
              />
            )
        )}
      </div>
    </div>
  )
}

export default Row
