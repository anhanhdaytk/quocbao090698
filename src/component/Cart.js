import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { remove, inCreMent, deCreMent } from '../actions/Cart';
import { Link } from 'react-router-dom';
Cart.propTypes = {
    productList: PropTypes.array,
};
Cart.defaultProps = {
    productList: [],
};
function Cart(props){
    const listCart = useSelector(state => state.cart.listCart);
    const list = JSON.parse(localStorage.getItem('listCart'));

    const dispatch = useDispatch()
    const handleIncrement = (cart) =>{
        const action = inCreMent(cart);
        dispatch(action);
    }
    const handleDecrement = (cart) =>{
        const action = deCreMent(cart);
        dispatch(action);
    }
    const handleRemove = (cart) => {
        const action = remove(cart)
        dispatch(action)        
    }
    const handleTotal = (ListCart) =>{
        let total = 0
        console.log(ListCart);
        ListCart.map((item)=>{
            total = total + item.qty * item.price 
        })
        return total
    }
   
    return(
        <section className="section-cart">
            <div className="container">  
                <h5 className="section-cart__title-cart">GIỎ HÀNG</h5>
                <div className="table-responsive">
                    <table className="section-cart__table table">
                        <thead>
                            <tr className="bg-title">
                                <td className="img-title">HÌNH ẢNH</td>
                                <td className="name-title">TÊN SẢN PHẨM</td>
                                <td className="price-title">ĐƠN GIÁ</td>
                                <td className="qty-title">SỐ LƯỢNG</td>
                                <td className="total-title">THÀNH TIỀN</td>
                                <td className="remove-title">XÓA</td>
                            </tr>
                        </thead>
                        {list.map((cart, index) =>{
                            // console.log(cart.price);
                            return(
                                <tbody>
                                    <tr className="cart-content">
                                        <td className="cart-image">
                                            <img src={cart.image} />
                                        </td>
                                        <td className="cart-name">
                                            <h5>{cart.name}</h5>
                                        </td>
                                        <td className="cart-price">
                                            <h5>{new Intl.NumberFormat().format(cart.price)} đ</h5>
                                        </td>
                                        <td className="cart-qty">
                                            <a className="btn btn-success" onClick={() => handleDecrement(cart,index)}>  - </a>
                                            <input className="inputt" type="text" name="quantity" value={cart.qty}/>
                                            <a className="btn btn-success" onClick={() => handleIncrement(cart,index)}>  + </a> 
                                        </td>
                                        <td className="cart-price">
                                            <h5>{new Intl.NumberFormat().format(cart.price * cart.qty)} đ</h5>
                                        </td>
                                        <td className="cart-remove">
                                            <i class="fa fa-trash" onClick={() => handleRemove(cart,index)}></i>
                                        </td>
                                    </tr>
                                </tbody>
                            )
                        })}
                    </table> 
                    {/* button */}
                    <div className="section-cart__button-cart ">                       
                        <div className="button-cart-group">
                            <Link to="#" className="btn btn-default btn-form btn-text">HỦY ĐƠN HÀNG</Link>
                            <Link to="/" className="btn btn-default btn-form btn-text">TIẾP TỤC MUA</Link>
                        </div>
                    </div>
                </div>
                {/* area total */}
                <div className="row">
                    <div className="col-5"/>
                    <div className="col-sm-12 col-md-12 col-lg-7">
                        <table className="section-cart__table-total table ">
                            <tbody>
                                <tr className="total-without-tax">
                                    <td className="title-total">
                                        <span>TỔNG TIỀN ( CHƯA THUẾ )</span>
                                    </td>
                                    <td className="total-price">
                                        <span>{new Intl.NumberFormat().format(handleTotal(listCart))} đ</span>
                                    </td>
                                </tr>
                                <tr className="total-tax">
                                    <td className="title-total">
                                        <span>THUẾ (VAT 10%)</span>
                                    </td>
                                    <td className="total-price">
                                        <span>{new Intl.NumberFormat().format(handleTotal(listCart)*10/100)} đ</span>
                                    </td>
                                </tr>
                                <tr className="bg-total">
                                    <td className="total-title">
                                        <h5>TỔNG TIỀN PHẢI THANH TOÁN</h5>
                                    </td>
                                    <td className="total-price">
                                        <h5>{new Intl.NumberFormat().format(handleTotal(listCart) + handleTotal(listCart)*10/100)} đ</h5>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div> 
                </div>
                {/* button */}
                <div className="section-cart__button-total ">                       
                    <div className="button-cart-group">
                        <Link to="#" className="btn btn-default btn-form btn-text">THANH TOÁN</Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Cart;