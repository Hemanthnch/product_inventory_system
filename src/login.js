import React from 'react';
import axios from 'axios';
import NavigationBar from './navbar';
// import Box from '@material-ui/core/Box';
class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            userName: '',
            password: '',
            loginStatus: false,

            userNameError: '',
            passwordError: ''
        }
    }
    componentWillMount() {
        if (localStorage.getItem('loggedIn')) {
            localStorage.removeItem('loggedIn');
        }
    }
    initialstate = () => {
        setTimeout(() => {
            this.setState({ loginStatus: false });
        }, 2000)
    }
    initialstateregisterd = () => {
        setTimeout(() => {
            this.setState({ isRegistered: false });
        }, 2000)
    }


    getLogin = (event) => {
        event.preventDefault();

        axios.get('http://localhost:3000/allPersons/?q=' + this.state.userName).then((res) => {
            console.log(res.data[0]);
            if (res.data[0]) {
                if ((res.data[0].userName === this.state.userName && res.data[0].password === this.state.password) || (res.data[0].email === this.state.username && res.data[0].password === this.state.password)) {
                    localStorage.setItem('loggedIn', true);
                    this.props.history.push('/');
                } else {
                    this.setState({ loginStatus: true });
                    this.initialstate();
                }
            } else {
                this.setState({ loginStatus: true });
                this.initialstate();
            }

        })
    }
    getUserName = (event) => {
        this.setState({ userName: event.target.value })
        this.checkValidation('userName')
    }
    getPassword = (event) => {
        this.setState({ password: event.target.value })
        this.checkValidation('password')
    }
    getUserNameError = (event) => {
        this.setState({ userName: event.target.value })
        this.checkValidation('userName')
    }
    getPasswordError = (event) => {
        this.setState({ password: event.target.value })
        this.checkValidation('password')
    }
    checkValidation = (event) => {
        let userNameError = '';
        let passwordError = '';
        if (event === 'userName' && this.state.userName === '') {
            userNameError = <p style={{ color: 'red' }}>Username is required</p>;
        }
        if (event === 'password' && this.state.password === '') {
            passwordError = <p style={{ color: 'red' }}>Password is required</p>
        }
        if (userNameError || passwordError) {
            this.setState({
                userNameError: userNameError,
                passwordError: passwordError,
            })
            return false
        }
        this.setState({
            userNameError: '',
            passwordError: '',
        })
        return true
    }

    render() {
        const mystyle = {
            color: "Black",
            backgroundColor: "white",
            padding: "10px",
            width: "400px",
            display: "inline-block",
            margin: "20px",
            border: "15px solid blueviolet"
        };
        return (

            <div>
                <NavigationBar></NavigationBar>
                <form style={mystyle} >
                    <h1>Login</h1>
                    {this.state.loginStatus &&
                        <p style={{ color: 'red' }}><b>Invalid Login Credentials</b></p>
                    }
                    <h3>Enter the User Name </h3>
                    <input type="text" required id="userName" onChange={this.getUserName} onBlur={this.getUserNameError}></input>
                    {this.state.usernameError}

                    <h3>Enter the Password </h3>
                    <input type="password" required id="password" onChange={this.getPassword} onBlur={this.getPasswordError}></input>
                    {this.state.passwordError}

                    <br></br>
                    <br></br>
                    <button type="submit" onClick={this.getLogin} style={{ backgroundColor: "cyan" }}>Login</button>
                </form>

            </div>
        );
    }
}

export default Login;