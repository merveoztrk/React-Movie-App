import { Card, Typography, Space, Col, Row } from 'antd';
import React, { useEffect, useState } from 'react';
import 'antd/dist/antd.css';
import { useNavigate } from 'react-router-dom';
import { fetchTopRated } from '../apis/themoviedb';
import Header from '../components/Header';
import '../styles/page.css';

const { Meta } = Card;

const TopRated = () => {
    const gridStyle = {
        width: '25%',
        textAlign: 'center',
    };

    const nav = useNavigate();
    const [topratedlist, setTopratedlist] = useState([])

    useEffect(() => {
        fetchTopRated()
            .then((res) => setTopratedlist(res.data.results))
    })

    return (
        <div>
            <Header />
            <Space className="title">
                <Typography.Text style={{ fontSize: 60, paddingLeft: "80px" }} orientation="center">Top Rated</Typography.Text>
            </Space>
            <Row justify='space-around' align="middle" gutter={[48, 24]} style={{ paddingLeft: "80px" }}>
                {topratedlist.map((item) => (
                    <Col className='card' span={6}>
                        <Card onClick={() => nav(`/movie/${item.id}`)} style={{ width: 240 }} cover={<img alt="example" src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} />}>
                            <Meta title={`${item.title}`} description={`Date: ${item.release_date} Vote: ${item.vote_count}`} />
                        </Card>
                    </Col >
                ))}
            </Row>
        </div>
    )
}
export default TopRated;