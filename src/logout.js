import React from 'react';
import { Link } from 'react-router-dom';
class LogOut extends React.Component {

    componentWillMount() {
        localStorage.removeItem('loggedIn')
        this.props.history.push('/')
    }
    render() {

        return (

            <div></div>
        );
    }
}

export default LogOut;