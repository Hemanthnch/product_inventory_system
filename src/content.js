import React from 'react';
import SignUp from './signup';
import LogOut from './logout';
import Login from './login';
import { Switch, Route } from "react-router-dom";
import Home from './home';
import AddProduct from './addproduct';
import EditProduct from './editproduct';
import DashBoard from './dashboard'
class Content extends React.Component {
    
    render() { 
        
        return ( 
            <div>
               <Switch>
                <Route exact path='/' component={Login}></Route>
                <Route  path='/home' component={Home}></Route>    
                
                <Route path='/signup' component={SignUp}></Route>
                <Route path='/logout' component={LogOut}></Route>
                <Route path='/editproduct' component={EditProduct}></Route>
                <Route path='/addproduct' component={AddProduct}></Route>
                <Route path='/dashboard' component={DashBoard}></Route>
                </Switch>
            </div>
         );
    }
}
 
export default Content;