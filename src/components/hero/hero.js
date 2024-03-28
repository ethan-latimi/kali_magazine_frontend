import React from "react";
import { Link } from 'react-router-dom'
import heroBlog from '../../api/heroBlogs'


const Hero = () => {
    return (
        <div className="wpo-blog-hero-area">
            <div className="container">
                <div className="sortable-gallery">
                    <div className="gallery-filters"></div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="wpo-blog-grids gallery-container clearfix">
                                {heroBlog.slice(0, 2).map((blog, bitem) => (
                                    <div className="grid" key={bitem}>
                                        <div className="img-holder">
                                            <img src={blog.screens} alt className="img img-responsive" />
                                            <div className="wpo-blog-content">
                                                <div className="thumb">{blog.thumb}</div>
                                                <h2><Link to={`/hero-blog-single/${blog.slug}`}>{blog.title}</Link></h2>
                                                <p>{blog.description}</p>
                                                <ul>
                                                    <li><img src={blog.avater} alt="" /></li>
                                                    <li>By <Link to={`/hero-blog-single/${blog.slug}`}>{blog.author}</Link></li>
                                                    <li>{blog.create_at}</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                ))}

                                <div className="grid s2">
                                    {heroBlog.slice(2, 4).map((blog, bitem) => (
                                        <div className="img-holder" key={bitem}>
                                            <img src={blog.screens} alt className="img img-responsive" />
                                            <div className="wpo-blog-content">
                                                <div className="thumb">{blog.thumb}</div>
                                                <h2><Link to={`/hero-blog-single/${blog.slug}`}>{blog.title}</Link></h2>
                                                <ul>
                                                    <li>By <Link to={`/hero-blog-single/${blog.slug}`}>{blog.author}</Link></li>
                                                    <li>{blog.create_at}</li>
                                                </ul>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Hero;