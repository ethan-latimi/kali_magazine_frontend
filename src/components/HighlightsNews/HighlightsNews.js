import React from "react";
import { Link } from 'react-router-dom'
import Highlight from '../../api/Highlight'
import add from '../../images/add.jpg'

const HighlightsNews = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <section className="wpo-blog-highlights-section">
            <div className="container">
                <div className="wpo-section-title">
                    <h2>Today's Top Highlights</h2>
                </div>
                <div className="row">
                    <div className={`col col-lg-8 col-12 ${props.colClass}`}>
                        <div className="wpo-blog-highlights-wrap">
                            <div className="wpo-blog-items">
                                <div className="row">
                                    {Highlight.slice(0, 6).map((blog, bitem) => (
                                        <div className="col col-lg-6 col-md-6 col-12" key={bitem}>
                                            <div className="wpo-blog-item">
                                                <div className="wpo-blog-img">
                                                    <img src={blog.screens} alt="" />
                                                    <div className="thumb">{blog.thumb}</div>
                                                </div>
                                                <div className="wpo-blog-content">
                                                    <h2><Link onClick={ClickHandler} to={`/highlight-single/${blog.slug}`}>{blog.title}</Link></h2>
                                                    <ul>
                                                        <li><img src={blog.avater} alt="" />
                                                        </li>
                                                        <li>By <Link onClick={ClickHandler}  to={`/highlight-single/${blog.slug}`}>Admin</Link></li>
                                                        <li>{blog.create_at}</li>
                                                    </ul>
                                                    <p>{blog.description}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`col col-lg-4 col-12 ${props.hideClass}`}>
                        <div className="blog-sidebar">
                            <div className="widget category-widget">
                                <h3>Post Categories</h3>
                                <ul>
                                    <li><Link onClick={ClickHandler} to="/blog">Lifestyle<span>(05)</span></Link></li>
                                    <li><Link onClick={ClickHandler} to="/blog">Inspiration <span>(07)</span></Link></li>
                                    <li><Link onClick={ClickHandler} to="/blog">Fashion <span>(03)</span></Link></li>
                                    <li><Link onClick={ClickHandler} to="/blog">Photography <span>(06)</span></Link></li>
                                    <li><Link onClick={ClickHandler} to="/blog">Travel <span>(12)</span></Link></li>
                                    <li><Link onClick={ClickHandler} to="/blog">Business <span>(08)</span></Link></li>
                                </ul>
                            </div>
                            <div className="widget recent-post-widget">
                                <h3>Related Posts</h3>
                                {Highlight.slice(0, 5).map((blog, bitem) => (
                                    <div className="posts" key={bitem}>
                                        <div className="post">
                                            <div className="img-holder">
                                                <img src={blog.screens} alt />
                                            </div>
                                            <div className="details">
                                                <span className="date">{blog.create_at} </span>
                                                <h4><Link onClick={ClickHandler} to={`/highlight-single/${blog.slug}`}>{blog.title}</Link></h4>
                                            </div>
                                        </div>
                                    </div>
                                ))}

                            </div>
                            <div className="wpo-add-widget">
                                <Link to="/"><img src={add} alt=""/></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HighlightsNews;