import axios from 'axios';
import { useState } from 'react';

// const KEY = '8d181bcb5e80a929053da01f6921e4a9';
//const baseURL = 'https://api.themoviedb.org/3/';

export const fetchTitle = async () => {
    const data = await axios.get('https://api.themoviedb.org/3/discover/movie?api_key=8d181bcb5e80a929053da01f6921e4a9')
    return data
}

export const fetchGenres = async () => {
    const data = await axios.get('https://api.themoviedb.org/3/genre/movie/list?api_key=8d181bcb5e80a929053da01f6921e4a9')
    return data
}

export const fetchPopular = async () => {
    const data = await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=8d181bcb5e80a929053da01f6921e4a9')
    return data
}
export const fetchUpComing = async () => {
    const data = await axios.get('https://api.themoviedb.org/3/movie/upcoming?api_key=8d181bcb5e80a929053da01f6921e4a9')
    return data
}
export const fetchNowPlaying = async () => {
    const data = await axios.get('https://api.themoviedb.org/3/movie/now_playing?api_key=8d181bcb5e80a929053da01f6921e4a9')
    return data
}
export const fetchTopRated = async () => {
    const data = await axios.get('https://api.themoviedb.org/3/movie/top_rated?api_key=8d181bcb5e80a929053da01f6921e4a9')
    return data
}
