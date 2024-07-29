// import React, { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
// import axios from 'axios';

// function MovieList({ onMovieClick }) {
//   const [movies, setMovies] = useState([]);

//   useEffect(() => {
//     axios.get(`${process.env.REACT_APP_MOVIE_API_URL}/movies`).then((response) => {
//       setMovies(response.data.movies);
//     });
//   }, []);

//   return (
//     <ul>
//       {movies.map((movie) => (
//         <li className="movieItem" key={movie.id} onClick={() => onMovieClick(movie)}>
//           {movie.title}
//         </li>
//       ))}
//     </ul>
//   );
// }

// MovieList.propTypes = {
//   onMovieClick: PropTypes.func.isRequired,
// };

// export default MovieList;

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

function MovieList({ onMovieClick }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_MOVIE_API_URL}/movies`)
      .then((response) => {
        console.log(response.data); // Check the structure here
        setMovies(response.data.movies);
      })
      .catch((error) => {
        console.error('Error fetching movies:', error);
        setMovies([]); // Set to empty array on error
      });
  }, []);

  return (
    <ul>
      {Array.isArray(movies) && movies.map((movie) => (
        <li className="movieItem" key={movie.id} onClick={() => onMovieClick(movie)}>
          {movie.title}
        </li>
      ))}
    </ul>
  );
}

MovieList.propTypes = {
  onMovieClick: PropTypes.func.isRequired,
};

export default MovieList;
