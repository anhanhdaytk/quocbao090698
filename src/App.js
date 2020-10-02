import React from 'react';
import {withRouter} from 'react-router-dom';
import Header from './component/layout/Header';

import Slider from './component/layout/Ssliderr';
import Footer from './component/layout/Footer';
function App(props) {
  let route = props.location.pathname
  return (
    <>
      <Header />
      <div>
        {(route.includes("signup") || route.includes("signin") || route.includes("contact") || route.includes("cart"))  ? '' : <Slider />}
        {/* kiểm tra trong route có singup hay không */}
        {props.children}
      </div>
      <Footer />  
    </>
  );
}

export default withRouter(App);
