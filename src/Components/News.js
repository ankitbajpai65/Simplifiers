import React, { useState, useEffect } from 'react'
import '../Styles/News.css'
import NewsComponent from './NewsComponent';

const News = () => {
    const [items, setItems] = useState([]);
    const apiKey = `https://newsapi.org/v2/everything?domains=wsj.com&apiKey=e7418ccbc0404cdc85f5c2d37ad99c42`;
    let data;
    useEffect(() => {
        // setLoading(true);
        fetch(apiKey)
            .then(response => {
                return response.json();
            }).then(res => {
                data = res;
                console.log(data);
                setItems(data.articles);
            })
            .catch(error => {
                console.log(error);
            })
    }, []);
    return (
        <div className="offset-2 col-10 home d-flex flex-wrap justify-content-evenly" style={{ marginTop: '3.6rem' }}>
            {/* {console.log(items)} */}
            {
                items.map((val, index) => {
                    return (
                        <>
                            <NewsComponent title={val.title} description={val.description} image={val.urlToImage} url={val.url} />
                        </>
                    )
                })
            }
        </div >
    )
}

export default News