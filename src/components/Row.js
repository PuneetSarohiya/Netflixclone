import React, { useState, useEffect } from 'react';
import axios from '../axios';
import './Row.css';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';
import { motion } from 'framer-motion';
import {
  animationTitle,
  transitionTitle,
  animationPosters,
  transitionPosters,
} from '../animations/row';
import { useLocation } from "react-router-dom";
import StarRoundedIcon from "@material-ui/icons/StarRounded";
import Rating from "@material-ui/lab/Rating";
import TextTruncate from "react-text-truncate";
import numeral from "numeral";

const base_url = 'https://image.tmdb.org/t/p/original/';

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const { pathname } = useLocation();
  const [trailerUrl, setTrailerUrl] = useState('');

  const getReleaseYear = (date) => {
    let year = new Date(date);
    return year.getFullYear(pathname);
  }

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  const opts = {
    height: '350',
    width: '740',
    playerVars: {
      autoplay: 2,
    },
  };

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl('');
    } else {
      movieTrailer(movie?.title || movie?.original_name || '')
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get('v'));
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <div className='row'>
      <motion.h2
        initial='out'
        animate='in'
        variants={animationTitle}
        transition={transitionTitle}
      >
        {title}
      </motion.h2>

      <motion.div
        initial='out'
        animate='in'
        variants={animationPosters}
        transition={transitionPosters}
        className='row_posters'
      >
       
      <div className="row__posters list__items" >
        {movies.map((movie) => (
          <div class="list__item" onClick={() => handleClick(movie)}>
            <img
              loading="lazy"
              key={movie.id}
              className={`row__poster ${isLargeRow && "row__posterLarge"}`}
              src={`${base_url}${
                isLargeRow ? movie.poster_path : movie.backdrop_path
              }`}
              alt={movie.name}
            />
            <div className="list__itemInfo">
              <h5 className="list__itemTitle">
                {movie.name || movie.original_title}
                <span className="list__itemYear">
                  ({getReleaseYear(movie.release_date || movie.first_air_date)})
                </span>
              </h5>
              <TextTruncate
                line={2}
                element="p"
                containerClassName="list__itemOverview"
                truncateText="…"
                text={movie.tagline || movie.overview}
              />
              <div className="list__rating">
                <Rating
                  name="movie-rating"
                  className="movieRating"
                  value={movie.vote_average / 2 || 0}
                  precision={0.5}
                  icon={<StarRoundedIcon fontSize="inherit" readOnly />}
                />
                <small className="list__likes">
                  {numeral(movie.vote_average / 2).format("0.0")}
                </small>
              </div>
            </div>
          </div>
        ))}
      </div>
      </motion.div>
      <div className="trailer">
        {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
      </div>
    </div>
  );
}

export default Row;
