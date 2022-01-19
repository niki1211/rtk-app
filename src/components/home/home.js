import React, { useEffect } from 'react';
import MovieList from '../movieListing/movieListing';
import MovieApi from '../../common/apis/movieApi';
import {APIKey} from '../../common/apis/movieApiKey';
import { useDispatch } from 'react-redux';
import { addMovies } from '../../features/movies/movieSlice';

const Home = () => {
    const dispatch = useDispatch();
    const movieText = 'Harry';
    useEffect(() => {
        const fetchMovies = async () => {
            const res = await MovieApi.get(`?apiKey=${APIKey}&s=${movieText}&type=movie`)
                .catch((e) => {
                    console.log('Err: ', e);
                });
            dispatch(addMovies(res.data));
        };
        fetchMovies();
    }, []);

    return (
        <div>
            <div className='banner-img'></div>
            <MovieList />
        </div>
    );
};

export default Home;