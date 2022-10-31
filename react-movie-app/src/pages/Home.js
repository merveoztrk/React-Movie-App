import React from 'react'
import { Route, Routes } from "react-router-dom";
import { Button, Space, Table, Input } from "antd";
import { useState, useEffect } from "react";
import 'antd/dist/antd.css';
import { useNavigate } from "react-router-dom";
import { fetchGenres, fetchTitle, fetchPopular, fetchUpComing, fetchNowPlaying, fetchTopRated } from '../apis/themoviedb';
import Header from '../components/Header';
import axios from 'axios';


const Home = () => {

    // const [term, setTerm] = useState('');
    // const [addVisible, setAddVisible] = useState(false);
    // const [filteredInfo, setFilteredInfo] = useState({});
    // const [sortedInfo, setSortedInfo] = useState({});
    //const [title, setTitle] = useState({});

    const nav = useNavigate();

    //const [movies, setMovies] = useState([]);
    // useEffect(() => {
    //     fetchTitle(API_URL)
    //         .then((res) => res.json())
    //         //setTitle(data.results);
    //         .then(data => {
    //             setMovies(data.results);
    //         })

    // }, []);

    useEffect(() => {
        fetchTitle()
            .then((res) => console.log(res));
        fetchGenres()
            .then((res) => console.log(res));
        fetchPopular()
            .then((res) => console.log(res));
        fetchUpComing()
            .then((res) => console.log(res));
        fetchNowPlaying()
            .then((res) => console.log(res));
        fetchTopRated()
            .then((res) => console.log(res));

    })

    // useEffect(() => { fetchMovie() }, []);
    // useEffect(() => {
    //     fetchNowPlaying()
    //     console.log(fetchNowPlaying());
    // }, []);

    return (
        <div>
            <Header />
            {/* <StreamForm onSubmit={onSubmit} /> */}
            {/* <Input placeholder="Search a film..." onChange={(e) => setTerm(e.target.value)} /> */}

            {/* <Button type="primary" icon={<SearchOutlined />} onClick={() => setAddVisible(true)}></Button> */}

            {/* <Space
                style={{
                    marginBottom: 16,
                }}
            >
                <Button onClick={setAgeSort}>Sort age</Button>
                <Button onClick={clearFilters}>Clear filters</Button>0
                <Button onClick={clearAll}>Clear filters and sorters</Button>
            </Space> */}
            {/* <Table columns={columns} dataSource={results} onChange={handleChange} /> */}

        </div>
    )
}


export default Home;
