import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from '../../components/pagetitle/PageTitle'
import Scrollbar from '../../components/scrollbar/scrollbar'
import { useParams } from 'react-router-dom'
import Sponsored from '../../api/Sponsored'
import Footer from '../../components/footer/Footer';
import SponsoredDetails from './Sponsored/SponsoredDetails';


const SponsoredSingle = () => {

    const { slug } = useParams()

    const BlogDetails = Sponsored.find(item => item.slug === slug)

    return (
        <Fragment>
            <Navbar />
            <PageTitle pageTitle={BlogDetails.title} pagesub={'Blog'} />
            <SponsoredDetails />
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default SponsoredSingle;
