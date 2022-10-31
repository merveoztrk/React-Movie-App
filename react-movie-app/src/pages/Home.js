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
    const [title, setTitle] = useState({});

    const nav = useNavigate();

    // useEffect(() => { fetchMovie() }, []);
    const API_URL = "https://api.themoviedb.org/3/search/movie?api_key=8d181bcb5e80a929053da01f6921e4a9"

    useEffect((res) => {
        fetchTitle()
            //.then((res) => res.json())
            .then(console.log(res))
        //setTitle(data.results);

    }, []);

    // useEffect(() => {
    //     fetchGenres(API_URL)
    //     console.log(fetchGenres());
    // }, []);

    // useEffect(() => {
    //     fetchPopular()
    //     console.log(fetchPopular());
    // }, []);

    // useEffect(() => {
    //     fetchUpComing()
    //     console.log(fetchUpComing());
    // }, []);

    // useEffect(() => {
    //     fetchNowPlaying()
    //     console.log(fetchNowPlaying());
    // }, []);

    // useEffect(() => {
    //     fetchTopRated()
    //     console.log(fetchTopRated());
    // }, []);

    // const handleChange = (pagination, filters, sorter) => {
    //     setFilteredInfo(filters);
    //     setSortedInfo(sorter);
    // };

    // const clearFilters = () => {
    //     setFilteredInfo({});
    // };
    // const clearAll = () => {
    //     setFilteredInfo({});
    //     setSortedInfo({});
    // };
    // const setAgeSort = () => {
    //     setSortedInfo({
    //         order: 'descend',
    //         columnKey: 'age',
    //     });
    // };


    // const SearchBar = ({ onFormSubmit }) => {
    //     const onSubmit = event => {
    //         event.preventDefault();

    //         onFormSubmit(term); //mevcut arama terimi component'e bildirildi
    //     };
    // }

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
