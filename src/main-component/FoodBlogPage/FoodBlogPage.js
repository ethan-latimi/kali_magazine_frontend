import React, {Fragment} from 'react';
import PageTitle from '../../components/pagetitle/PageTitle'
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/footer/Footer';
import Scrollbar from '../../components/scrollbar/scrollbar'
import Foods from '../../components/Foods/Foods';

const FoodBlogPage =() => {
    return(
        <Fragment>
            <Navbar/>
            <PageTitle pageTitle={'Food News'} pagesub={'Blog'}/> 
            <Foods/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default FoodBlogPage;

