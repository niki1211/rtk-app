import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import MovieApi from '../../common/apis/movieApi';
import {APIKey} from '../../common/apis/movieApiKey';

const initialState = {
    movies: {},
    series: {},
    details: {},
};

export const fetchAsyncMovies = createAsyncThunk(
    'movies/fetchAsyncMovies',
    async () => {
        const movieText = 'Harry';
        const res = await MovieApi.get(`?apiKey=${APIKey}&s=${movieText}&type=movie`);
        return res.data;
    }
);

export const fetchAsyncSeries = createAsyncThunk(
    'series/fetchAsyncSeries',
    async () => {
        const seriesText = 'Friends';
        const res = await MovieApi.get(`?apiKey=${APIKey}&s=${seriesText}&type=series`);
        return res.data;
    }
);

export const fetchAsyncDetails = createAsyncThunk(
    'details/fetchAsyncDetails',
    async (imdbID) => {
        const res = await MovieApi.get(`?apiKey=${APIKey}&i=${imdbID}&Plot=full`);
        return res.data;
    }
)

const movieSlice = createSlice({
    name: "movies",
    initialState,
    reducers: {
        removeSelectMovieOrShow: (state) => {
            state.details = {};
        }
    },
    extraReducers: {
        [fetchAsyncMovies.pending]: () => {
            console.log("Pending!");
        },
        [fetchAsyncMovies.fulfilled]: (state, {payload}) => {
            console.log("Fetched Successfully!");
            return {...state, movies: payload}
        },
        [fetchAsyncMovies.rejected]: () => {
            console.log("Rejected!");
        },
        [fetchAsyncSeries.pending]: () => {
            console.log("Pending!");
        },
        [fetchAsyncSeries.fulfilled]: (state, {payload}) => {
            console.log("Fetched Successfully!");
            return {...state, series: payload}
        },
        [fetchAsyncSeries.rejected]: () => {
            console.log("Rejected!");
        },
        [fetchAsyncDetails.pending]: () => {
            console.log("Pending!");
        },
        [fetchAsyncDetails.fulfilled]: (state, {payload}) => {
            console.log("Fetched Successfully!");
            return {...state, details: payload}
        },
        [fetchAsyncDetails.rejected]: () => {
            console.log("Rejected!");
        }
    }
});

export const { removeSelectMovieOrShow } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies; 
export const getAllSeries = (state) => state.movies.series;
export const getDetails = (state) => state.movies.details;
export default movieSlice.reducer;