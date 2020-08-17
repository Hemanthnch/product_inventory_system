import React from 'react';
import { Link } from 'react-router-dom';



class NavigationBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }


    render() {
        let loggedIn = localStorage.getItem("loggedIn")
        const menuitem = {
            color: "black",
            backgroundColor: "cyan",

            display: 'inline',
            padding: '5px',
            margin: '5px',
            float: "right"

        }
        const topnav = {
            backgroundColor: "blue",
            overflow: "hidden",
            color: "#f2f2f2",
            font: "17px"
        }



        return (



            <div style={topnav}>
                <h1 style={{ color: "black" }}>Product Inventory System</h1>
                {loggedIn &&
                    <ul style={{ listStyleType: 'none' }}>

                        <li style={menuitem}>
                            <Link to="/logout" style={{ textDecoration: 'none' }}>Logout</Link>
                        </li>
                        <li style={menuitem}>
                            <Link to="/" style={{ textDecoration: 'none' }}>Home</Link>
                        </li>
                        <li style={menuitem}>
                            <Link to="/dashboard" style={{ textDecoration: 'none' }}>DashBoard</Link>
                        </li>
                    </ul>}
                {!loggedIn &&
                    <ul style={{ listStyleType: 'none' }}>
                        <li style={menuitem}>
                            <Link to="/signup" style={{ textDecoration: 'none' }}>Sign Up</Link>
                        </li>
                        <li style={menuitem}>
                            <Link to="/login" style={{ textDecoration: 'none' }}>Login</Link>
                        </li>
                    </ul>}

            </div>






        );


    }

}

export default NavigationBar;