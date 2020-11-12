import React from 'react';

export default function MovieCard (props) {
    const { title, director, metascore, stars } = props
  return(
     <div className="movie-card">
      <h2>{title}</h2>
      <div className="movie-director">
        Director: <em>{director}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{metascore}</strong>
      </div>
      <h2>Actors</h2>
      {/* {stars.map((actor, i) => {
          return (<div>{actor}</div>)
      })} */}
    </div>
  )
}
