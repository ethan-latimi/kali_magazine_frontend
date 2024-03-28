import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from '../../components/pagetitle/PageTitle'
import Scrollbar from '../../components/scrollbar/scrollbar'
import { useParams } from 'react-router-dom'
import Breaking from '../../api/breaking'
import Footer from '../../components/footer/Footer';
import BreakingDetails from './breaking/BreakingDetails';


const BreakingSingle = () => {

    const { slug } = useParams()

    const BlogDetails = Breaking.find(item => item.slug === slug)

    return (
        <Fragment>
            <Navbar />
            <PageTitle pageTitle={BlogDetails.title} pagesub={'Blog'} />
            <BreakingDetails />
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default BreakingSingle;
