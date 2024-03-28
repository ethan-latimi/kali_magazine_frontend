import React from 'react';
import { Link } from 'react-router-dom'
import about from '../../images/blog/about-widget.jpg'
import Breaking from '../../api/breaking'
import add from '../../images/add.jpg'

const SubmitHandler = (e) => {
    e.preventDefault()
}

const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const HomeSidebar = (props) => {
    return (
        <div className={`col col-lg-3 col-12 ${props.blLeft}`}>
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
                <div className="wpo-newsletter-widget widget">
                    <h3>Newsletter</h3>
                    <p>Join 20,000 Sabscribers!</p>
                    <form className="form" onSubmit={SubmitHandler}>
                        <input type="email" placeholder="Email Address" required />
                        <button type="submit">Sign Up</button>
                    </form>
                    <span>By signing up you agree to our <a href="#">Privecy Policy</a></span>
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
                <div className="wpo-add-widget">
                    <Link to="/"><img src={add} alt="" /></Link>
                </div>
            </div>
        </div>
    )

}

export default HomeSidebar;
