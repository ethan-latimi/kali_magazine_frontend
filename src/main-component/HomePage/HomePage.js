import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Hero from '../../components/hero/hero';
import Scrollbar from '../../components/scrollbar/scrollbar';
import HighlightsNews from '../../components/HighlightsNews/HighlightsNews';
import SponsoredNews from '../../components/SponsoredNews/SponsoredNews';
import Footer from '../../components/footer/Footer';
import Subscribe from '../../components/Subscribe/Subscribe';

const HomePage = () => {
    return (
        <Fragment>
            <Navbar />
            <Hero />
            <HighlightsNews />
            <SponsoredNews />
            <Subscribe />
            <Footer />
            <Scrollbar />
        </Fragment>
    );
};
export default HomePage;
