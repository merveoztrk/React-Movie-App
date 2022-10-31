import React from 'react';
import { Menu } from 'antd';
import 'antd/dist/antd.css';
import { HeartOutlined, HomeOutlined, LikeOutlined, RocketOutlined, StarOutlined } from '@ant-design/icons';
import { useNavigate, useParams } from 'react-router-dom'


const Header = () => {
    const nav = useNavigate();

    return (
        <div>
            <Menu mode="horizontal" defaultSelectedKeys={['home']}>
                <Menu.Item key="mail" icon={<HomeOutlined />} onClick={() => nav("/")}>
                    Home
                </Menu.Item>
                <Menu.Item key="popular" icon={<HeartOutlined />} onClick={() => nav("/popular")}>
                    Popular
                </Menu.Item>
                <Menu.Item key="upComing" icon={<LikeOutlined />} onClick={() => nav("/upcoming")}>
                    UpComing
                </Menu.Item>
                <Menu.Item key="nowPlaying" icon={<RocketOutlined />} onClick={() => nav("/nowplaying")}>
                    NowPlaying
                </Menu.Item>
                <Menu.Item key="topRated" icon={<StarOutlined />} onClick={() => nav("/toprated")}>
                    TopRated
                </Menu.Item>
            </Menu>

        </div>
    )
}

export default Header
