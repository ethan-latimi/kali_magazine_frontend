import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from '../../components/pagetitle/PageTitle'
import Scrollbar from '../../components/scrollbar/scrollbar'
import { useParams } from 'react-router-dom'
import Highlight from '../../api/Highlight'
import Footer from '../../components/footer/Footer';
import HighlightDetails from './highlight/HighlightDetails';


const HighlightSingle = () => {

    const { slug } = useParams()

    const BlogDetails = Highlight.find(item => item.slug === slug)

    return (
        <Fragment>
            <Navbar />
            <PageTitle pageTitle={BlogDetails.title} pagesub={'Blog'} />
            <HighlightDetails />
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default HighlightSingle;
