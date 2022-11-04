import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchSearch } from '../apis/themoviedb';
import { Card, Typography, Space, Col, Row } from 'antd';
import Header from '../components/Header';
import '../styles/page.css';

const { Meta } = Card;

const SearchResults = () => {
    const { term } = useParams();
    const [searchlist, setSearchlist] = useState([])

    useEffect(() => {
        fetchSearch(term).then(res => setSearchlist(res.data.results));
    }, [])

    return (
        <div>
            <Header />
            <Space className="title">
                <Typography.Text style={{ fontSize: 60, paddingLeft: "80px" }} orientation="center">Search Result</Typography.Text>
            </Space>

            <Row justify='space-around' align="middle" gutter={[48, 24]} style={{ paddingLeft: "80px" }}>
                {searchlist.map((item) => (
                    <Col span={6}>
                        <Card style={{ width: 240 }} cover={<img alt="example" src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} />}>
                            <Meta title={`${item.title}`} description={`Date: ${item.release_date} Vote: ${item.vote_count}`} />
                        </Card>
                    </Col >
                ))}
            </Row>
        </div >
    )
}

export default SearchResults
