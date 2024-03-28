import React, {Fragment} from 'react';
import { connect } from "react-redux";
import PageTitle from '../../components/pagetitle/PageTitle'
import Scrollbar from '../../components/scrollbar/scrollbar'
import { addToCart } from "../../store/actions/action";
import ShopProduct from '../../components/ShopProduct';
import api from "../../api";
import Footer from '../../components/footer/Footer';
import Navbar3 from '../../components/Navbar3/Navbar3';

const ShopPage =({ addToCart }) => {

    const productsArray = api();
    
    const addToCartProduct = (product, qty = 1) => {
        addToCart(product, qty);
      };

    const products = productsArray

    return(
        <Fragment>
            <Navbar3/>
            <PageTitle pageTitle={'Shop'} pagesub={'Shop'}/> 
              <section className="wpo-shop-page section-padding">
                  <div className="container">
                      <div className="row">
                          <div className="col-lg-12">
                              <ShopProduct
                                      addToCartProduct={addToCartProduct}
                                      products={products}
                                  />
                          </div>
                      </div>
                  </div>
              </section>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};

export default connect(null, { addToCart })(ShopPage);