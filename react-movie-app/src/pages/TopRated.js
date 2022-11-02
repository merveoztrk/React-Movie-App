import { Card, Typography, Space, Col, Row } from 'antd';
import React, { useEffect, useState } from 'react';
import 'antd/dist/antd.css';
import { fetchTopRated } from '../apis/themoviedb';
import Header from '../components/Header';
import './page.css';

const { Meta } = Card;

const TopRated = () => {
    const gridStyle = {
        width: '25%',
        textAlign: 'center',
    };

    const [topratedlist, setTopratedlist] = useState([])

    useEffect(() => {
        fetchTopRated()
            .then((res) => setTopratedlist(res.data.results))
    })

    return (
        <div>
            <Header />
            <Space className="title">
                <Typography.Text style={{ fontSize: 60 }} orientation="center">Top Rated</Typography.Text>
            </Space>
            <Row justify='space-around' align="middle" gutter={[48, 24]}>
                {topratedlist.map((item) => (
                    <Col className='card' span={6}>
                        <Card style={{ width: 240 }} cover={<img alt="example" src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} />}>
                            <Meta title={`${item.title}`} description={`Date: ${item.release_date} Vote: ${item.vote_count}`} />
                        </Card>
                    </Col >
                ))}
            </Row>
        </div>
    )
}
export default TopRated;