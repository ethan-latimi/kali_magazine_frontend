import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar'
import Hero2 from '../../components/hero2/Hero2';
import Scrollbar from '../../components/scrollbar/scrollbar';
import FeaturesNews from '../../components/FeaturesNews/FeaturesNews';
import Footer from '../../components/footer/Footer';
import Subscribe from '../../components/Subscribe/Subscribe';
import HomeSidebar from '../../components/HomeSidebar/HomeSidebar';
import VideoNews from '../../components/VideoNews/VideoNews';
import HighlightsNews from '../../components/HighlightsNews/HighlightsNews';
import SponsoredNews from '../../components/SponsoredNews/SponsoredNews';

const HomePage2 = () => {
    return (
        <Fragment>
            <Navbar hclass={'wpo-header-style-1'} topbarNone={'topbar-none'} />
            <div className="main-blog-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9">
                            <Hero2 />
                            <FeaturesNews />
                            <VideoNews />
                            <HighlightsNews colClass={'col-lg-12'} hideClass={'d-none'} />
                        </div>
                        <HomeSidebar />
                    </div>
                </div>
            </div>
            <SponsoredNews/>
            <Subscribe />
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default HomePage2;