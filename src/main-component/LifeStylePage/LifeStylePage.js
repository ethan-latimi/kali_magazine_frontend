import React, {Fragment} from 'react';
import PageTitle from '../../components/pagetitle/PageTitle'
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/footer/Footer';
import Scrollbar from '../../components/scrollbar/scrollbar'
import LifeStyle from '../../components/LifeStyle/LifeStyle';

const LifeStylePage =() => {
    return(
        <Fragment>
            <Navbar/>
            <PageTitle pageTitle={'Life Style News'} pagesub={'Blog'}/> 
            <LifeStyle/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default LifeStylePage;

