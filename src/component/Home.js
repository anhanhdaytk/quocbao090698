import React from 'react';
import Aproduct from './layout/Aproduct';
import AproductBuyMore from './layout/AproductBuyMore';
import Aproductlager from './layout/AproductLager';
import SliderProductSale from './layout/SliderProductSale';
import SliderProductNew from './layout/SliderProductNew';
import News from './layout/News';
function Home(){
    return(
        <React.Fragment>
            <div className="container">
                {/* product hot */}
                <div className="row">
                    <div className="hot-product col-sm-12 col-md-12 col-lg-12">
                        <div className="title-hot">
                            <a className="title-product-hot">Sản phẩm nổi bật</a>
                            <h2 className="borderh2"></h2>
                        </div>
                        <div className="row">
                                {/* left */}
                                <div className="col-sm-12 col-md-12 col-lg-6">
                                    <Aproductlager />
                                    <div className="row">
                                        <div className="col-sm-12 col-md-12 col-lg-6">
                                            <Aproduct />
                                        </div>
                                        <div className="col-sm-12 col-md-12 col-lg-6">
                                            <Aproduct />
                                        </div>
                                    </div>
                                </div>

                                {/* right */}
                                <div className="col-sm-12 col-md-12 col-lg-6">
                                    <div className="row">
                                        <div className="col-sm-12 col-md-12 col-lg-6">
                                            <Aproduct />
                                        </div>
                                        <div className="col-sm-12 col-md-12 col-lg-6">
                                            <Aproduct />
                                        </div>
                                    </div>
                                    <Aproductlager />
                                </div>
                        </div>
                    </div>
                </div>
                {/* product */}
                <div className="row">
                    {/* product buy more */}
                    <div className="product-buy-more col-sm-12 col-md-12 col-lg-3">
                        <div className="title-buy-more">
                            <a className="title-product-buy-more">Sản phẩm mua nhiều</a>
                            <h2 className="borderh2"/>  
                        </div>           
                        <ul>
                            <li><AproductBuyMore/></li>
                            <li><AproductBuyMore/></li>
                            <li><AproductBuyMore/></li>
                            <li><AproductBuyMore/></li>
                            <li><AproductBuyMore/></li>
                            <li><AproductBuyMore/></li>
                        </ul>
                    </div>
                    {/* product sale */}
                    <div className="product-sale col-sm-12 col-md-12 col-lg-9">
                        <div className="title-sale">
                            <a className="title-product-sale">Sản phẩm khuyến mãi</a>
                            <h2 className="borderh2"/>
                        </div>  
                        <div  className="product-slider">
                            <SliderProductSale />
                        </div> 
                    </div>
                    {/* banner */}
                    <div className="banner col-sm-12 col-md-12 col-lg-12">
                        <img src="image/banner.png" />
                    </div>
                    {/* product new */}
                    <div className="product-new col-sm-12 col-md-12 col-lg-12">
                        <div className="title-new">
                            <a className="title-product-new">Sản phẩm mới</a>
                            <h2 className="borderh2"/>
                        </div>  
                        <div  className="product-slider">
                            <SliderProductNew />
                        </div> 
                    </div>
                    {/* news */}
                    <div className="news col-sm-12 col-md-12 col-lg-12">
                        <div className="title-home-new">
                            <a className="title-newss">Tin tức</a>
                            <h2 className="borderh2"/>
                        </div>  
                        
                        <div className="container wrap-new">
                            <div className="row">  
                                <div  className="col-sm-12 col-md-12 col-lg-4">
                                    <News />
                                </div> 
                                {/* ========1======== */}
                                <div  className="col-sm-12 col-md-12 col-lg-4">
                                    <News />
                                </div> 
                                {/* =========2========== */}
                                <div  className="col-sm-12 col-md-12 col-lg-4">
                                    <News />
                                </div> 
                                {/* ==========3========== */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default Home;