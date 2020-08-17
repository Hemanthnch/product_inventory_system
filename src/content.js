import React from 'react';
import SignUp from './signup';
import LogOut from './logout';
import Login from './login';
import { Switch, Route } from "react-router-dom";
import Home from './home';
import AddProduct from './addproduct';
import EditProduct from './editproduct';
import ParentDashBoard from './parentDashBoard'
import NavigationBar from './navbar';
class Content extends React.Component {

    render() {

        return (
            <div>

                <Switch>
                    <Route exact path='/' component={Home}></Route>
                    <Route path='/login' component={Login}></Route>
                    <Route path='/signup' component={SignUp}></Route>
                    <Route path='/logout' component={LogOut}></Route>
                    <Route path='/editproduct' component={EditProduct}></Route>
                    <Route path='/addproduct' component={AddProduct}></Route>
                    <Route path='/dashboard' component={ParentDashBoard}></Route>
                </Switch>
            </div>
        );
    }
}

export default Content;