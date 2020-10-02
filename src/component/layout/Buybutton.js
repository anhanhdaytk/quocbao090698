import React from 'react';
function Buybutton(){
    return(
        <div className="Buybutton">
            <form className="form-inline ">
                <div className="input-group">
                    <a className="btn btn-success form-control">MUA NGAY</a>
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1"> <i className="fa fa-search"></i></span>
                    </div>
                </div>
            </form>
        </div>
    )
}
export default Buybutton;