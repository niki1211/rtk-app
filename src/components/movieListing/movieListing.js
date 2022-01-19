import React from 'react';
import { useSelector } from 'react-redux';
import movieSlice, { getAllMovies } from '../../features/movies/movieSlice';
import MovieCard from '../movieCard/movieCard';
import './movieListing.scss';

const MovieListing = () => {
    const movieList = useSelector(getAllMovies);
    console.log(movieList);
    const renderMovies = movieList.Response === "True" ? movieList.Search.map((movie, index) => {
        return <MovieCard key={index} data={ movie} />
    }) : (<div className='movies-err'> <h3>{movieSlice.Error}</h3></div>)

    return (
        <div className='movie-wrapper'>
            <div className='movie-list'>
                <h2>Movies</h2>
                <div className='movie-container'>{renderMovies}</div>
            </div>
        </div>
    );
};

export default MovieListing;