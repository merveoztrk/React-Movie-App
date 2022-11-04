import { Space, Rate, Tag, Card } from 'antd';
import 'antd/dist/antd.css';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchDetail } from '../apis/themoviedb';
import Header from '../components/Header';
import '../styles/detail.css'


const { Meta } = Card;

const Detail = () => {
    const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];
    const [details, setDetails] = useState({})
    const [value, setValue] = useState([]);
    const [genrelist, setGenrelist] = useState([])
    const [video, setVideo] = useState("")

    const { id } = useParams();

    useEffect(() => {
        fetchDetail(id).then((res) => {
            setDetails(res.data)
            setGenrelist(res.data.genres)
            setVideo(res.data.videos.results[0].key)
        })

            .then(console.log(details))
    }, [])



    // const tagRender = (props: CustomTagProps) => {
    //     const { label, value, closable, onClose } = props;
    // };
    return (
        <div>
            <Header />
            {/* <button onClick={() => console.log(details)}>adsad</button> */}
            <Space className='detail'>
                <div className='left_poster'>
                    <Card style={{ width: "435px", height: "652px", margin: "20px 0 0 63px" }} cover={<img alt="example" src={`https://image.tmdb.org/t/p/w500${details.poster_path}`} />}></Card>
                </div>
                <Space className='detail_card'>
                    <Card>
                        <Meta style={{ padding: "5px", borderBottom: "1px solid #ccc" }} title={`${details.title}`} description={`Description: ${details.overview} `} />
                        <Meta title={"Genres"} style={{ padding: "10px" }} />
                        {genrelist.map((item) => (

                            <Tag color={'pink'} style={{ padding: "2px" }}>{item.name}</Tag>

                        ))}
                        <div>
                            <Rate tooltips={desc} onChange={setValue} value={value} style={{ padding: "5px" }} />
                            {value ? <span className="ant-rate-text">{desc[value - 1]}</span> : ''}
                        </div>
                        <Meta title={"Trailer:"} />
                        <iframe width="646" height="350" src={`https://www.youtube.com/embed/${video}`}
                            title={`${details.name}`}
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen>
                        </iframe>
                    </Card>
                </Space>
            </Space>
        </div >
    )
}

export default Detail;
