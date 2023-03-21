import React from 'react'
import '../Styles/Cards.css'
import { Link } from 'react-router-dom'
// import thumbnail from '../images/thumbnail.jpg'

const Cards = (props) => {
    let location = window.location;
    const thumbnailClicked = (id) => {
        location.href = `https://youtube.com/watch?v=${id}`;
    }
    return (
        <>
            <div className="videoCard">
                <img src={props.thumbnail} className="card-img-top" alt="..." onClick={() => thumbnailClicked(props.id)} />
                <div className="card-body">
                    <h6 className="videoTitle mt-3">{props.title}</h6>
                    <Link href={`https://youtube.com/watch?v=${props.channelId}`} to_target="blank" className="channelName text-decoration-none text-secondary">{props.channelName}</Link>
                    {/* <p className="card-text">328K views</p> */}
                </div>
            </div>
        </>
    )
}

export default Cards