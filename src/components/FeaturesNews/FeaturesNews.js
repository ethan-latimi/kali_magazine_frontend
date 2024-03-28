import React from "react";
import { Link } from 'react-router-dom'
import Features from '../../api/Features'

const ClickHandler = () => {
    window.scrollTo(10, 0);
}



const FeaturesNews = () => {
    return (

        <div className="wpo-blog-features-section section-padding">
            <div className="wpo-section-title">
                <h2>Features News</h2>
            </div>
            <div className="row">
                {Features.slice(0, 4).map((blog, bitem) => (
                    <div className="col-lg-4 col-md-6 col-12" key={bitem}>
                        <div className="wpo-blog-features-item">
                            <div className="wpo-blog-features-img">
                                <img src={blog.screens} alt="" />
                                <div className="thumb">{blog.thumb}</div>
                            </div>
                            <div className="wpo-blog-features-text">
                                <h2><Link onClick={ClickHandler} to={`/features-single/${blog.slug}`}>{blog.title}</Link></h2>
                            </div>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default FeaturesNews;