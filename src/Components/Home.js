import React, { useState, useEffect } from 'react';
import Cards from './Cards';
import '../Styles/Sidebar.css'

const Home = () => {
    const [youtubeData, setYoutubeData] = useState([]);
    const apiKey = process.env.REACT_APP_API_KEY;
    // let apiKey = `AIzaSyC1lfOZ3ya2FVfs81ibkl8StEkQlAyj_9o`;
    let video_http = "https://www.googleapis.com/youtube/v3/videos?";
    useEffect(() => {
        fetch(video_http + new URLSearchParams({
            key: apiKey,
            part: 'snippet',
            chart: 'mostPopular',
            maxResults: 50,
            regionCode: 'IN'
        }))
            .then(res => res.json())
            .then(data => {
                console.log(data.items);
                setYoutubeData(data.items);
            })
            .catch(err => console.log(err));
    }, [])
    return (
        <>
            {console.log(youtubeData)}
            <div className="offset-2 col-10 home d-flex flex-wrap justify-content-evenly" style={{ marginTop: '3.6rem' }}>
                {youtubeData.map((val, index) => {
                    return (
                        <>
                            {/* {console.log(val)} */}
                            < Cards
                                key={index}
                                id={val.id}
                                category={val.snippet.categoryId}
                                channelId={val.snippet.channelId}
                                thumbnail={val.snippet.thumbnails.high.url}
                                title={val.snippet.title}
                                channelName={val.snippet.channelTitle} />
                        </>
                    )
                })}
            </div>
        </>
    )
}

export default Home;