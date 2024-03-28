import React from "react";
import { Link } from 'react-router-dom'
import Video from '../../api/Video'
import VideoModal from "../ModalVideo/VideoModal";

const ClickHandler = () => {
    window.scrollTo(10, 0);
}


const VideoNews = () => {
    return (

        <section className="wpo-blog-highlights-section video-blog">
            <div className="wpo-section-title">
                <h2>Video News</h2>
            </div>
            <div className="wpo-blog-highlights-wrap">
                <div className="wpo-blog-items">
                    {Video.slice(0, 4).map((blog, bitem) => (
                        <div className="wpo-blog-item" key={bitem}>
                            <div className="wpo-blog-img">
                                <img src={blog.screens} alt="" />
                                <VideoModal/>
                            </div>
                            <div className="wpo-blog-content">
                                <h2><Link onClick={ClickHandler} to={`/video-single/${blog.slug}`}>{blog.title}</Link></h2>
                                <ul>
                                    <li><img src={blog.avater} alt="" />
                                    </li>
                                    <li>By <Link onClick={ClickHandler} to={`/video-single/${blog.slug}`}>Admin</Link></li>
                                    <li>{blog.create_at}</li>
                                </ul>
                                <p>{blog.description}</p>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    )
}

export default VideoNews;