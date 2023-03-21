import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import '../Styles/Sidebar.css'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import HomeIcon from '@mui/icons-material/Home';
import TextSnippetOutlinedIcon from '@mui/icons-material/TextSnippetOutlined';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import NewspaperOutlinedIcon from '@mui/icons-material/NewspaperOutlined';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import ArticleIcon from '@mui/icons-material/Article';

const Sidebar = () => {
    let location = window.location;
    const [active, setActive] = useState(location.href);
    const [showTodo, setShowTodo] = useState(false);
    console.log(active)

    const homeClicked = () => {
        setActive(window.location.href)
    }
    const newsClicked = () => {
        setActive(window.location.href)
    }
    const populateNotes = () => {
        setShowTodo(true);
    }
    return (
        <div className="sidebar col-2">
            <ul className="sidebar_list list-unstyled">
                <li className={`d-flex justify-content-center p-2 mb-2 ${active == 'http://localhost:3000/' ? 'activeSidebarLink' : ''}`} onClick={homeClicked} >
                    {active == 'http://localhost:3000/' ?
                        <HomeIcon className="col-4" />
                        :
                        <HomeOutlinedIcon className="col-4" />
                    }
                    <Link to="/" className='text-decoration-none text-black offset-1 col-7'>Home</Link>
                </li>
                <li className={`d-flex justify-content-center p-2 mb-2 ${active === 'http://localhost:3000/news' ? 'activeSidebarLink' : ''}`} onClick={newsClicked}>
                    {active == 'http://localhost:3000/news' ?
                        <NewspaperIcon className="col-4" />
                        :
                        <NewspaperOutlinedIcon className="col-4" />
                    }

                    <Link to="/news" className='text-decoration-none text-black offset-1 col-7'>News</Link>
                </li>
                <li className={`d-flex justify-content-center p-2 mb-2 ${active == 'http://localhost:3000/my_notes' ? 'activeSidebarLink' : ''}`} onMouseUp={populateNotes}>
                    {active == 'http://localhost:3000/my_notes' ?
                        <TextSnippetIcon className="col-4" />
                        :
                        <TextSnippetOutlinedIcon className="col-4" />
                    }
                    <Link to="/my_notes" className='text-decoration-none text-black offset-1 col-7 data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample"'>My Notes</Link>
                </li>
                {showTodo &&
                    <div class="collapse" id="collapseExample">
                        <div class="card card-body">
                            <Link to="/todo" className='text-decoration-none text-black offset-1 col-7'>My Notes</Link>
                        </div>
                    </div>
                }
                <li className={`d-flex justify-content-center p-2 mb-2 ${active == 'http://localhost:3000/blog' ? 'activeSidebarLink' : ''}`}>
                    {active == 'http://localhost:3000/blog' ?
                        <ArticleIcon className="col-4" />
                        :
                        <ArticleOutlinedIcon className="col-4" />
                    }
                    <Link to="/" className='text-decoration-none text-black offset-1 col-7'>Blog</Link>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar