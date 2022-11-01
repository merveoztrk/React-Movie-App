import { Card, Typography, Space, Col, Row } from 'antd';
import 'antd/dist/antd.css';
import React, { useEffect, useState } from 'react';
import { fetchPopular } from '../apis/themoviedb';
import Header from '../components/Header';
import './popular.css';
const { Meta } = Card;

const Popular = () => {
    const gridStyle = {
        width: '25%',
        textAlign: 'center',
    };
    const [popularlist, setPopularlist] = useState([])

    useEffect(() => {
        fetchPopular()
            .then((res) => setPopularlist(res.data.results))
    })


    return (
        <div>
            <Header />
            <Space className="popular">
                <Typography.Text style={{ fontSize: 60 }} orientation="center">Popular</Typography.Text>
            </Space>
            <Row justify='space-around' align="middle" gutter={[48, 24]}>
                {popularlist.map((item) => (
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
export default Popular;