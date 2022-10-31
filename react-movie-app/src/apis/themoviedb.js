import axios from 'axios';

// const KEY = '8d181bcb5e80a929053da01f6921e4a9';
const baseURL = 'https://api.themoviedb.org/3/';

const API_URL = "https://api.themoviedb.org/3/movie/popular?api_key=8d181bcb5e80a929053da01f6921e4a9"

export const fetchTitle = async () => {
    await axios.get('https://api.themoviedb.org/3/discover/movie?api_key=8d181bcb5e80a929053da01f6921e4a9'
        //'https://api.themoviedb.org/3/movie/550?api_key=9fa8e95f1495337f189b057558df8efe'
    ).then(function (res) {
        console.log(res)
        return res;
    })
}
// const fetchCountry = async () => {
//     const { data } = await axios.post('/api/v1/country/search')
//     setCountry(data.data);
// }
//https://api.themoviedb.org/3/discover/movie?api_key=8d181bcb5e80a929053da01f6921e4a9&language=en-US&sort_by=vote_average.asc&include_adult=true&include_video=false&page=1

export const fetchGenres = async () => {
    await axios.get(`${API_URL}/genre/movie/list`,
        {
            apikey: '8d181bcb5e80a929053da01f6921e4a9'
        }
    )
}
export const fetchPopular = async () => {
    await axios.get(`${baseURL}movie/popular`,
        {
            apikey: '8d181bcb5e80a929053da01f6921e4a9'
        }
    )
}
export const fetchUpComing = async () => {
    await axios.get(`${baseURL}movie/upcoming`,
        {
            apikey: '8d181bcb5e80a929053da01f6921e4a9'
        }
    )
}
export const fetchTopRated = async () => {
    await axios.get(`${baseURL}movie/top_rated`,
        {
            apikey: '8d181bcb5e80a929053da01f6921e4a9'
        }
    )
}
export const fetchNowPlaying = async () => {
    await axios.get(`${baseURL}movie/now_playing`,
        {
            apikey: '8d181bcb5e80a929053da01f6921e4a9'
        }
    )
}