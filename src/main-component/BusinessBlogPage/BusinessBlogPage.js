import React, {Fragment} from 'react';
import PageTitle from '../../components/pagetitle/PageTitle'
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/footer/Footer';
import Scrollbar from '../../components/scrollbar/scrollbar'
import Business from '../../components/Business/Business';

const BusinessBlogPage =() => {
    return(
        <Fragment>
            <Navbar/>
            <PageTitle pageTitle={'Business News'} pagesub={'Blog'}/> 
            <Business/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default BusinessBlogPage;

