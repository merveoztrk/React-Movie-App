import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchSearch } from '../apis/themoviedb';
import { Card, Typography, Space, Col, Row } from 'antd';
import Header from '../components/Header';
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
            <Space className="popular">
                <Typography.Text style={{ fontSize: 60 }} orientation="center">Popular</Typography.Text>
            </Space>
            <Row justify='space-around' align="middle" gutter={[48, 24]}>
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
