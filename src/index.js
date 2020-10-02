import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Home from './component/Home';
import Signup from './component/Signup';
import Signin from './component/Signin';
import Contact from './component/Contact';
import Cart from './component/Cart';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import store from './store';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
    <Router>
      <App>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/signup" component={Signup} />
            <Route path="/signin" component={Signin} />
            <Route path="/contact" component={Contact} />
            <Route path="/cart" component={Cart} />
             {/* <Route path="/account" component={Account} />
             <Route path="/cart" component={Cart} />
             <Route path="/product" component={Product} />
             <Route path="/product-details/:id" component={ProductDetails} />
             <Route path="/blog/list" component={Blog} />
             <Route path="/blog/detail/:id" component={Details} />
             <Route path="/login" component={Login} />
             <Route path="/wishlist" component={wishList} />
             <Route component={Account} /> */}
          </Switch>
      </App>  
    </Router>
  </React.StrictMode>,      
  </Provider>,
  document.getElementById('root')
);


serviceWorker.unregister();
