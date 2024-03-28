import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../images/logo2.png'
import ins1 from '../../images/ft-icon/1.png'
import ins2 from '../../images/ft-icon/2.png'
import ins3 from '../../images/ft-icon/3.png'
import ins4 from '../../images/ft-icon/4.png'

const ClickHandler = () => {
    window.scrollTo(10, 0);
}
const SubmitHandler = (e) => {
    e.preventDefault()
}

const Footer = (props) => {
    return (
        <footer className="wpo-site-footer">
            <div className="wpo-upper-footer">
                <div className="container">
                    <div className="row">
                        <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
                            <div className="widget about-widget">
                                <div className="logo widget-title">
                                    <img src={Logo} alt="blog" />
                                </div>
                                <p>There are many variations of passages of Lorem Ipsum available, but the majority have
                                    suffered alteration in some form, by injected humour, or randomised words which
                                    don't look even slightly believable.</p>

                            </div>
                        </div>
                        <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
                            <div className="widget link-widget">
                                <div className="widget-title">
                                    <h3>Important Link</h3>
                                </div>
                                <ul>
                                    <li><Link to="/blog">News</Link></li>
                                    <li><Link to="/blog">Career </Link></li>
                                    <li><Link to="/blog">Technology</Link></li>
                                    <li><Link to="/blog">Startups</Link></li>
                                    <li><Link to="/blog">Gadgets</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="widget tag-widget">
                                <div className="widget-title">
                                    <h3>Browse by Tag </h3>
                                </div>
                                <ul>
                                    <li><Link to="/travels">Travel</Link></li>
                                    <li><Link to="/business">Business</Link></li>
                                    <li><Link to="/lifestyle">Lifestyle</Link></li>
                                    <li><Link to="/blog">Marketing</Link></li>
                                    <li><Link to="/blog">Medical</Link></li>
                                    <li><Link to="/blog">Sports</Link></li>
                                    <li><Link to="/blog">Career</Link></li>
                                    <li><Link to="/foods">Foods</Link></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col col-lg-2 col-md-6 col-sm-12 col-12">
                            <div className="widget social-widget">
                                <div className="widget-title">
                                    <h3>Social Media</h3>
                                </div>
                                <ul>
                                    <li><Link onClick={ClickHandler} to="/"><i><img src={ins1} alt="" /></i> Facebook</Link></li>
                                    <li><Link onClick={ClickHandler} to="/"><i><img src={ins2} alt="" /></i> Twitter</Link></li>
                                    <li><Link onClick={ClickHandler} to="/"><i><img src={ins3} alt="" /></i> Instagram</Link></li>
                                    <li><Link onClick={ClickHandler} to="/"><i><img src={ins4} alt="" /></i> Youtube</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="wpo-lower-footer">
                <div className="container">
                    <div className="row">
                        <div className="col col-xs-12">
                            <p className="copyright"> Copyright &copy; 2023 Bloggar by <Link to="/index">wpOceans</Link>. All
                                Rights Reserved.</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;