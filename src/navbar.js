import React from 'react';
import { Link } from 'react-router-dom';



class NavigationBar extends React.Component {
   
   
    render() { 
        
        const menuitem = {
            color:"black",
            backgroundColor:"cyan",
            
            display:'inline',
            padding: '5px',
            margin: '5px',
            float:"right"
            
        }
        const topnav ={
            backgroundColor:"orange",
            overflow: "hidden",
            color: "#f2f2f2",
            font: "17px"
          }
        const loginLink=(
            <div>
                <nav style={topnav}>
                <ul style={{listStyleType:'none'}}>
                  
                <h1 style={{color: "black"}}>Product Inventory System</h1>
                <li style={menuitem}>
                        <Link to="/signup" style={{ textDecoration:'none'}}>Sign Up</Link>
                </li>
                <li style={menuitem}>
                        <Link to="/" style={{ textDecoration:'none'}}>Login</Link>
                </li>
                </ul>
                </nav>
            </div>
            
        )
        const userLink=(
            <div>
                <nav style={topnav}>
                <ul style={{listStyleType:'none'}}>
                <h1 style={{color: "black"}}>Product Inventory System</h1>
                <li style={menuitem}>
                        <Link to="/logout" style={{ textDecoration:'none'}}>Logout</Link>
                </li>
                <li style={menuitem}>
                        <Link to="/home" style={{ textDecoration:'none'}}>Home</Link>
                </li>
                <li style={menuitem}>
                        <Link to="/dashboard" style={{ textDecoration:'none'}}>DashBoard</Link>
                </li>
                </ul>
                </nav>
            </div>
        )
        
          
        
        
        return (  
        
            <div>
                {localStorage.loggedIn?userLink:loginLink}
                
          
            </div>
            

        );
        
        
    }
    
}
 
export default NavigationBar;