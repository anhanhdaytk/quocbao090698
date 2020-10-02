import React from 'react';
import { Link } from 'react-router-dom';
function Signin(){
    return(
        <section className="section-signin">
            <div className="container">
                <div className="section-signin__wrap">
                    <div className="row">
                        <div className="section-signin__wrap--left col-sm-12 col-md-12 col-lg-6">
                            <h5 className="title">THÔNG TIN CÁ NHÂN</h5>
                            <label className="title-input">Email của bạn</label>
                            <div class="form-group"> 
                                <input className="inputt" type="email" name="email"/>
                            </div>   
                            <label className="title-input">Mật khẩu</label>
                            <div class="form-group">
                                <input className="inputt" type="password" name="password"/>
                            </div>    
                            <div class="form-check">
                                <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                                <label class="form-check-label title-check" for="exampleCheck1">Ghi nhớ tài khoản </label>
                                <Link className="forget" to="#">Bạn quên tài khoản ?</Link>
                            </div>
                            <button className="btn btn-success btn-signin"><Link className="btn-text">ĐĂNG NHẬP</Link></button>
                        </div>
                        {/* right */}
                        <div className="section-signin__wrap--right col-sm-12 col-md-12 col-lg-6">
                            <h5 className="title">BẠN CHƯA CÓ TÀI KHOẢN ?</h5>
                            <p className="content">Đăng ký tài khoản ngay để có thể mua hàng nhanh chóng và dễ dàng hơn ! Ngoài ra còn có rất nhiều chính sách ưu đãi cho các thành viên citybike</p>
                            <button className="btn btn-success btn-signup"><Link to="/signup" className="btn-text">ĐĂNG KÝ</Link></button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Signin;