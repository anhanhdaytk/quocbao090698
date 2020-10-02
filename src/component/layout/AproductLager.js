import React from 'react';
import Rating from './Ratings';
// import Buybutton from './Buybutton';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from 'react-redux';
import { addcart} from '../../actions/Cart';
function AproductLager(props){
    const productList = useSelector(state => state.cart.cart)
    const dispatch = useDispatch();
    // console.log(productList);

    const handleAddToCart = (item,index) =>{
        toast.success("Mua Hàng Thành Công !");
        const newProduct = {...item,qty:1};
        const action = addcart(newProduct);
        dispatch(action);
    }
    return(
        <div className="aproductlager">
            {productList.map((productList, index) =>{
                return(
                    <>
                     <ToastContainer />
                    <div className="img-product">
                        <img src={productList.image} alt="image Product"/> 
                        <div className="Buybtn">
                            <div className="buttonbuy">
                                <div className="Buybutton">
                                    <form className="form-inline ">
                                        <div className="input-group">
                                            <a className="btn btn-success form-control" onClick={() => handleAddToCart(productList,index)}>MUA NGAY</a>
                                            <div className="input-group-prepend">
                                                <span className="input-group-text" id="basic-addon1"> <i className="fa fa-search"></i></span>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="detail-product">
                        <h6>{productList.name}</h6>
                        <div className="ratings"><Rating /></div>
                        <span>{new Intl.NumberFormat().format(productList.price)}đ  <strike>{new Intl.NumberFormat().format(productList.discount)}đ</strike></span>
                    </div>
                    </>
                )
            })}
            
            
        </div>
    )
}
export default AproductLager;