import React, {Fragment} from 'react';
import PageTitle from '../../components/pagetitle/PageTitle'
import BlogSingle from '../../components/BlogDetails/BlogSingle.js'
import Scrollbar from '../../components/scrollbar/scrollbar'
import { useParams } from 'react-router-dom'
import blogs from '../../api/blogs'
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/footer/Footer';

const BlogDetailsLeftSiide =() => {

    const { slug } = useParams()
    const BlogDetails = blogs.find(item => item.slug === slug)
    return(
        <Fragment>
            <Navbar/>
            <PageTitle pageTitle={BlogDetails.title} pagesub={'Blog'}/> 
            <BlogSingle blLeft={'order-lg-1'} blRight={'order-lg-2'}/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default BlogDetailsLeftSiide;


