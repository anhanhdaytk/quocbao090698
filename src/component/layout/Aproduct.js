import React  from 'react';
import Rating from './Ratings';
import Buybutton from './Buybutton';
function Aproduct(){
    return(
        <>
        {/* <div class="container">
            <img src="img_avatar.png" alt="Avatar" class="image" style={{width:"100%"}}/>
            <div class="middle">
                <div class="text">John Doe</div>
            </div>
        </div> */}
        <div className="aproduct">
            
            <div className="img-product">
                <img src="image/caydanhdu.png" alt="image Product"/> 
                <div className="Buybtn">
                    <div className="buttonbuy">
                        <Buybutton/>
                    </div>
                </div>
            </div>
            <div className="detail-product">
                <h6>Cây Danh Dự</h6>
                <div className="ratings"><Rating /></div>
                <span>680.000đ  <strike>250.000đ</strike></span>
            </div>
        </div>
        </>
    )
}
export default Aproduct;