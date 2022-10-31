import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { fetchSearch } from '../apis/themoviedb';

const SearchResults = () => {
    const { term } = useParams();

    useEffect(() => {
        fetchSearch(term).then(res => console.log(res.data.results));
    }, [])

    return (
        <div>
            SearchResults
        </div>
    )
}

export default SearchResults
