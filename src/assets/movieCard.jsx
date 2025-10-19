import React from 'react'

const MovieCard = ({movie: {title, vote_average, poster_path, release_date, original_language}}) => {  
  return (
        <div className="Movie-card pointer-coarse:">
            <div className="image">
            <img className='' src= {poster_path ? `https://image.tmdb.org/t/p/w500${poster_path}` :
              "./no-movie.png"
            } alt="" />
        </div>
        <div className="extra-information">
            <h2>{title}</h2>
            <p className='overview'></p>
           <div className="extra">
             <p className='popularity'><span>★</span> {vote_average ? vote_average.toFixed(1) : "N?N"}</p>
            <p className='release_date'>{release_date ? release_date.split("-")[0] : "N/N"}</p>
            <p className="language">{original_language}</p>
           </div>
        </div>
    </div>
  )
}

export default MovieCard