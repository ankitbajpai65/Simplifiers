import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import '../Styles/Navbar.css';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Navbar = () => {
    const navigate = useNavigate();
    const [scroll, setScroll] = useState(false)
    const scrolling = () => {
        (window.scrollY >= 2) ? setScroll(true) : setScroll(false);
    }
    const loginClicked = () => {
        navigate('/login');
    }
    window.addEventListener('scroll', scrolling);
    const searchInput = document.querySelector('.searchBar');
    // const searchBtn = document.querySelector('.searchBtn');
    let searchLink = "https://www.youtube.com/results?search_query=";
    const searchClicked = () => {
        if (searchInput.value.length) {
            window.location.href = searchLink + searchInput.value;
        }
    }
    // searchBtn.addEventListener('click', () => {
    //     if (searchInput.value.length) {
    //         window.location.href = searchLink + searchInput.value;
    //     }
    // })
    return (
        // <div className="container-fluid">
        <nav className={`navbar navbar-expand-lg navbar-light ${scroll ? 'active' : ''}`}>
            <div className="container-fluid">
                <Link to="/" className="brand fs-3 ms-5">ULearn</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <form className="d-flex m-auto col-4">
                        <div className="input-group">
                            <input className="form-control me-2 searchBar" type="search" placeholder="Search" aria-label="Search" />
                            <div className="input-group-addon">
                                <SearchIcon className="input-group-addon searchBtn" onClick={searchClicked} />
                            </div>
                        </div>
                    </form>
                    <div className="col-2">
                        <button type="button" onClick={loginClicked} className="btn btn-primary offset-3 col-4">Login</button>
                        <AccountCircleIcon className="accountIcon offset-2 col-6 fs-1 cursor-pointer" />
                    </div>
                </div>
            </div>
        </nav>
        // </div>
    )
}

export default Navbar;
