import React from 'react';
import { Link } from 'react-router-dom'
import about from '../../images/blog/about-widget.jpg'
import Breaking from '../../api/breaking'

const SubmitHandler = (e) => {
    e.preventDefault()
}

const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const BlogSidebar = (props) => {
    return (
        <div className={`col col-lg-4 col-12 ${props.blLeft}`}>
            <div className="blog-sidebar">
                <div className="widget about-widget">
                    <div className="img-holder">
                        <img src={about} alt="" />
                    </div>
                    <h4>Jenny Watson</h4>
                    <p>Hi! beautiful people. I`m an authtor of this blog. Read our post - stay with us</p>
                    <div className="social">
                        <ul className="clearfix">
                            <li><Link onClick={ClickHandler} to="/blog-single/Visiting-Bethany"><i className="ti-facebook"></i></Link></li>
                            <li><Link onClick={ClickHandler} to="/blog-single/Visiting-Bethany"><i className="ti-twitter-alt"></i></Link></li>
                            <li><Link onClick={ClickHandler} to="/blog-single/Visiting-Bethany"><i className="ti-linkedin"></i></Link></li>
                            <li><Link onClick={ClickHandler} to="/blog-single/Visiting-Bethany"><i className="ti-pinterest"></i></Link></li>
                        </ul>
                    </div>
                    <div className="aw-shape">
                    </div>
                </div>
                <div className="widget search-widget">
                    <h3>Search Here</h3>
                    <form onSubmit={SubmitHandler}>
                        <div>
                            <input type="text" className="form-control" placeholder="Search Post.." />
                            <button type="submit"><i className="ti-search"></i></button>
                        </div>
                    </form>
                </div>
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
                    {Breaking.slice(1, 4).map((blog, bitem) => (
                        <div className="posts" key={bitem}>
                            <div className="post">
                                <div className="img-holder">
                                    <img src={blog.screens} alt />
                                </div>
                                <div className="details">
                                    <span className="date">{blog.create_at} </span>
                                    <h4><Link onClick={ClickHandler} to={`/breaking-single/${blog.slug}`}>{blog.title}</Link></h4>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>
                <div className="widget tag-widget">
                    <h3>Tags</h3>
                    <ul>
                        <li><Link onClick={ClickHandler} to="/blog-single/Visiting-Bethany">Travel</Link></li>
                        <li><Link onClick={ClickHandler} to="/blog-single/Visiting-Bethany">Food</Link></li>
                        <li><Link onClick={ClickHandler} to="/blog-single/Visiting-Bethany">Lifestyle</Link></li>
                        <li><Link onClick={ClickHandler} to="/blog-single/Visiting-Bethany">Business</Link></li>
                        <li><Link onClick={ClickHandler} to="/blog-single/Visiting-Bethany">Idea</Link></li>
                        <li><Link onClick={ClickHandler} to="/blog-single/Visiting-Bethany">Finance</Link></li>
                        <li><Link onClick={ClickHandler} to="/blog-single/Visiting-Bethany">Corporate</Link></li>
                        <li><Link onClick={ClickHandler} to="/blog-single/Visiting-Bethany">Culture</Link></li>
                        <li><Link onClick={ClickHandler} to="/blog-single/Visiting-Bethany">Gym</Link></li>
                    </ul>
                </div>
                <div className="wpo-contact-widget widget">
                    <h2>How We Can <br /> Help You!</h2>
                    <p>labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo
                        viverra maecenas accumsan lacus vel facilisis. </p>
                    <Link onClick={ClickHandler} to="/contact">Contact Us</Link>
                </div>
            </div>
        </div>
    )

}

export default BlogSidebar;
