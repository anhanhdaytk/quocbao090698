import React from 'react';
import Rating from './Ratings';
function AproductBuyMore(){
    return(
        <div className="aproductbuymore">
            <div className="img-product">
                <img src="image/caycota.png" />
                {/* <div className="overlay">
                     <div className="text">Mua ngay</div>   
                </div>    */}
            </div>
            <div className="detail-product">
                <h6>cây cọ ta</h6>
                <div className="ratings"><Rating /></div>
                <span>200.000 đ</span>
            </div>
        </div>
    )
}
export default AproductBuyMore;