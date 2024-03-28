import React from "react";
import Slider from "react-slick";
import { Link } from 'react-router-dom'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Breaking from '../../api/breaking'

const ClickHandler = () => {
    window.scrollTo(10, 0);
}

var settings = {
    dots: false,
    arrows: false,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
            }
        },
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
};

const BreakingNews = () => {
    return (

        <div className="wpo-breacking-news section-padding">
            <div className="container">
                <div className="row">
                    <div className="b-title"><span>Breaking News</span></div>
                    <div className="wpo-breacking-wrap">
                        <Slider {...settings}>
                            {Breaking.slice(0, 4).map((blog, bitem) => (
                                <div className="wpo-breacking-slide" key={bitem}>
                                    <div className="wpo-breacking-item">
                                        <div className="wpo-breacking-img">
                                            <img src={blog.screens} alt=""/>
                                        </div>
                                        <div className="wpo-breacking-text">
                                            <span>{blog.create_at}</span>
                                            <h3><Link onClick={ClickHandler} to={`/breaking-single/${blog.slug}`}>{blog.title}</Link></h3>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BreakingNews;