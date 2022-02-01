import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { fetchAsyncDetails, getDetails, removeSelectMovieOrShow } from '../../features/movies/movieSlice';
import './movieDetail.scss';

const MovieDetail = () => {
    const { imbdID } = useParams();
    const dispatch = useDispatch();
    const details = useSelector(getDetails);
    console.log(details);
    useEffect(() => {
        dispatch(fetchAsyncDetails(imbdID));
        dispatch(removeSelectMovieOrShow());
    }, [dispatch, imbdID]);

    return (
        <div className='movie-section'>
            <div className='section-left'>
                <div className='movie-title'>{details.Title}</div>
                <div className='movie-rating'>
                    <span>
                        IMDB Rating <i className='fa fa-star'></i> : {details.imdbRating}
                    </span>
                    <span>
                        IMDB Votes <i className='fa fa-thumbs-up'></i> : {details.imdbVotes}
                    </span>
                    <span>
                        Runtime <i className='fa fa-film'></i> : {details.Runtime}
                    </span>
                    <span>
                        Year <i className='fa fa-calendar'></i> : {details.Year}
                    </span>
                </div>
                <div className='movie-plot'>{details.Plot}</div>
                <div className='movie-info'>
                    <div>
                        <span>Director</span>
                        <span>{details.Director}</span>
                    </div>
                    <div>
                        <span>Stars</span>
                        <span>{details.Actors}</span>
                    </div>
                    <div>
                        <span>Genres</span>
                        <span>{details.Genre}</span>
                    </div>
                    <div>
                        <span>Languages</span>
                        <span>{details.Language}</span>
                    </div>
                    <div>
                        <span>Awards</span>
                        <span>{details.Awards}</span>
                    </div>
                </div>
            </div>
            <div className='section-right'>
                <img src={details.Poster} alt={details.Title} />
            </div>
        </div>
    );
};

export default MovieDetail;