import { Card } from 'antd';
import 'antd/dist/antd.css';
import React from 'react';
import Header from '../components/Header';

const NowPlaying = () => {
    const gridStyle = {
        width: '25%',
        textAlign: 'center',
    };

    return (
        <div>
            <Header />
            <Card title="Now Playing">
                <Card.Grid style={gridStyle}>Content</Card.Grid>
                <Card.Grid hoverable={false} style={gridStyle}>
                    Content
                </Card.Grid>
                <Card.Grid style={gridStyle}>Content</Card.Grid>
                <Card.Grid style={gridStyle}>Content</Card.Grid>
                <Card.Grid style={gridStyle}>Content</Card.Grid>
                <Card.Grid style={gridStyle}>Content</Card.Grid>
                <Card.Grid style={gridStyle}>Content</Card.Grid>
            </Card>
        </div>
    )
}
export default NowPlaying;