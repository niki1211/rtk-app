import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import MovieApi from '../../common/apis/movieApi';
import {APIKey} from '../../common/apis/movieApiKey';

const initialState = {
    movies: {},
    series: {}
};

export const fetchAsyncMovies = createAsyncThunk(
    'movies/fetchAsyncMovies',
    async () => {
        const movieText = 'Harry';
        const res = await MovieApi.get(`?apiKey=${APIKey}&s=${movieText}&type=movie`);
        return res.data;
    }
)

export const fetchAsyncSeries = createAsyncThunk(
    'series/fetchAsyncSeries',
    async () => {
        const seriesText = 'Marvel';
        const res = await MovieApi.get(`?apiKey=${APIKey}&s=${seriesText}&type=series`);
        return res.data;
    }
)

const movieSlice = createSlice({
    name: "movies",
    initialState,
    reducers: {
        addMovies: (state, { payload }) => {
            state.movies = payload;
        },
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
        }
    }
});

export const { addMovies } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies; 
export const getAllSeries = (state) => state.movies.series;
export default movieSlice.reducer;