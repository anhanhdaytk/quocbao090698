import React from 'react';
import { Link } from 'react-router-dom';
function Signup(){
    return(
        <section className="section-signup">
            <div className="container">
                <div className="section-signup__wrap">
                    <div className="row">
                        <div className="section-signup__wrap--title col-sm-12 col-md-12 col-lg-12">
                            <h5>THÔNG TIN CÁ NHÂN</h5>
                        </div>
                        <div className="section-signup__wrap--left col-sm-12 col-md-12 col-lg-6">
                            <label className="title-input">Họ và Tên<span className="item-input">*</span></label>
                            <div class="form-group">
                                <input className="inputt" type="text" name="name"/>
                            </div>
                            <label className="title-input">Địa chỉ email<span className="item-input">*</span></label>
                            <div class="form-group">
                                <input className="inputt" type="email" name="email"/>
                            </div>
                            <div class="form-check">
                                <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                                <label class="form-check-label title-input" for="exampleCheck1">Đăng ký nhận thông tin qua email</label>
                            </div>
                        </div>
                        {/* right */}
                        <div className="section-signup__wrap--right col-sm-12 col-md-12 col-lg-6">
                            <label className="title-input">Số điện thoại<span className="item-input">*</span></label>
                            <div class="form-group">
                                <input className="inputt" type="phone" name="phone"/>
                            </div>
                            <label className="title-input">Website của bạn<span className="item-input">*</span></label>
                            <div class="form-group">
                                <input className="inputt" type="website" name="website"/>
                            </div>
                            {/* =================== */}
                        </div>
                    </div>
                    {/* ========================================== */}
                    <div className="row"> 
                        <div className="section-signup__wrap--title col-sm-12 col-md-12 col-lg-12">
                            <h5>THÔNG TIN TÀI KHOẢN</h5>
                        </div>
                        <div className="section-signup__wrap--left col-sm-12 col-md-12 col-lg-6">
                            <label className="title-input">Mật khẩu<span className="item-input">*</span></label>
                            <div class="form-group">
                                <input className="inputt" type="password" name="password"/>
                            </div>                        
                        </div>
                        {/* right */}
                        <div className="section-signup__wrap--right col-sm-12 col-md-12 col-lg-6">
                            <label className="title-input">Nhập lại mật khẩu<span className="item-input">*</span></label>
                            <div class="form-group"> 
                                <input className="inputt" type="password" name="password"/>
                            </div>   
                        </div>
                        {/* button */}
                        <div className="section-signup__wrap--button col-sm-12 col-md-12 col-lg-6">                       
                            <div className="button-signup-group">
                                <button className="btn btn-success btn-form"><Link to="/signup" className="btn-text">QUAY LẠI</Link></button>
                                <button className="btn btn-success btn-form"><Link to="/signup" className="btn-text">ĐĂNG KÝ</Link></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Signup;