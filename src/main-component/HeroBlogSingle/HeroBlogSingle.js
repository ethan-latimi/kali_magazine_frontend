import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from '../../components/pagetitle/PageTitle'
import Scrollbar from '../../components/scrollbar/scrollbar'
import { useParams } from 'react-router-dom'
import heroBlog from '../../api/heroBlogs'
import HeroBlog from './HeroBlog/HeroBlog';
import Footer from '../../components/footer/Footer';


const HeroBlogSingle = () => {

    const { slug } = useParams()

    const BlogDetails = heroBlog.find(item => item.slug === slug)

    console.log(BlogDetails, "uasyfg")

    return (
        <Fragment>
            <Navbar />
            <PageTitle pageTitle={BlogDetails.title} pagesub={'Blog'} />
            <HeroBlog />
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default HeroBlogSingle;
