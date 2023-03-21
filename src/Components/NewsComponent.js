import React from 'react'
import { Link } from 'react-router-dom';
import '../Styles/Cards.css'
const NewsComponent = (props) => {
    return (
        <>
            {/* {console.log(props)} */}
            < div className="newsCard" >
                <img src={props.image} className="card-img-top" alt="" />
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.description}</p>
                    <Link to={props.url} target="_blank" className="text-decoration-none">Click here to see..</Link>
                </div>
            </div >
        </>
    )
}

export default NewsComponent;