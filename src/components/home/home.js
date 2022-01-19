import React, { useEffect } from 'react';
import MovieList from '../movieListing/movieListing';
import { useDispatch } from 'react-redux';
import { fetchAsyncMovies, fetchAsyncSeries } from '../../features/movies/movieSlice';

const Home = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchAsyncMovies());
        dispatch(fetchAsyncSeries());
    }, []);

    return (
        <div>
            <div className='banner-img'></div>
            <MovieList />
        </div>
    );
};

export default Home;