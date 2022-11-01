import React from 'react'
import { Route, Routes } from "react-router-dom";
import { Button, Space, Table, Input, } from "antd";
import { useState, useEffect } from "react";
import 'antd/dist/antd.css';
import { SearchOutlined } from '@ant-design/icons';
import { useNavigate } from "react-router-dom";
import { fetchGenres, fetchTitle, fetchPopular, fetchUpComing, fetchNowPlaying, fetchTopRated, fetchSearch } from '../apis/themoviedb';
import Header from '../components/Header';
import axios from 'axios';


const Home = () => {

    const [addVisible, setAddVisible] = useState(false);
    const [filteredInfo, setFilteredInfo] = useState({});
    const [sortedInfo, setSortedInfo] = useState({});
    const [movielist, setMovielist] = useState([]);
    const [genrelist, setGenrelist] = useState([]);
    const [term, setTerm] = useState('');

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
    const handleChange = (pagination, filters, sorter) => {
        //console.log('Various parameters', pagination, filters, sorter);
        setFilteredInfo(filters);
        setSortedInfo(sorter);
    };

    const columns = [
        {
            title: 'Title',
            dataIndex: 'title',
            key: 'title',
            sorter: (a, b) => a.title.length - b.title.length,
            sortOrder: sortedInfo.columnKey === 'title' ? sortedInfo.order : null,
            ellipsis: true,
        },
        {
            title: 'Popularity',
            dataIndex: 'popularity',
            key: 'popularity',
            sorter: (a, b) => a.popularity.length - b.popularity.length,
            sortOrder: sortedInfo.columnKey === 'title' ? sortedInfo.order : null,
            ellipsis: true,
        },
        {
            title: 'Genres',
            dataIndex: 'genre_ids',
            key: 'genre_ids',
            sorter: (a, b) => a.genre_ids.length - b.genre_ids.length,
            sortOrder: sortedInfo.columnKey === 'genre_ids' ? sortedInfo.order : null,
            ellipsis: true,
            render: (_, record) => {
                let str = ""
                if (record.genre_ids.length > 0) {
                    for (let i = 0; i < record.genre_ids.length; i++) {
                        for (let y = 0; y < genrelist.length; y++) {
                            if (genrelist[y].id === record.genre_ids[i]) {
                                str += genrelist[y].name += " "
                            }
                        }
                    }
                    return str
                }
                else return str
            }
        }
    ]

    useEffect(() => {
        fetchTitle()
            .then((res) => setMovielist(res.data.results))
        fetchGenres()
            .then((res) => setGenrelist(res.data.genres));
    }, [])


    const onsubmit = event => {
        event.preventDefault();
        //console.log(movielist);
        //console.log(genrelist)
        nav(`/search/${term}`)
        //component'e mevcut arama teriminin ne olduğu bildirme
    };




    return (
        <div>
            <Header />
            <Input placeholder="Search a film..." onChange={(e) => setTerm(e.target.value)} />
            <Button type="primary" icon={<SearchOutlined />} onClick={onsubmit}>Search</Button>
            <Space
                style={{
                    marginBottom: 16,
                }}
            >
            </Space>
            <Table columns={columns} dataSource={movielist} onChange={handleChange} />

        </div>
    )
}
export default Home;
