import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from '../../components/pagetitle/PageTitle'
import Scrollbar from '../../components/scrollbar/scrollbar'
import { useParams } from 'react-router-dom'
import Features from '../../api/Features'
import Footer from '../../components/footer/Footer';
import FeaturesDetails from './Features/FeaturesDetails';


const FeaturesSingle = () => {

    const { slug } = useParams()

    const BlogDetails = Features.find(item => item.slug === slug)

    return (
        <Fragment>
            <Navbar />
            <PageTitle pageTitle={BlogDetails.title} pagesub={'Blog'} />
            <FeaturesDetails />
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default FeaturesSingle;
