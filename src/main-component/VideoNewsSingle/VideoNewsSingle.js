import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from '../../components/pagetitle/PageTitle'
import Scrollbar from '../../components/scrollbar/scrollbar'
import { useParams } from 'react-router-dom'
import Video from '../../api/Video'
import Footer from '../../components/footer/Footer';
import VideoDetailsDetails from './video/VideoDetailsDetails';


const VideoNewsSingle = () => {

    const { slug } = useParams()

    const BlogDetails = Video.find(item => item.slug === slug)

    return (
        <Fragment>
            <Navbar />
            <PageTitle pageTitle={BlogDetails.title} pagesub={'Blog'} />
            <VideoDetailsDetails />
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default VideoNewsSingle;
