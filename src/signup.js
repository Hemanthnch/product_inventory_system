import React from 'react';
import axios from 'axios';
class SignUp extends React.Component {
    constructor(props){
        super(props)
            this.state={
               name:'',
               password:'',
               repassword:'',
               email:'',
               mobilenumber:'',

               nameerror:'',
               passworderror:'',
               repassworderror:'',
               emailerror:'',
               mobilenumber:'',
               buttonStatus:true,
               signSuccess:false,

               userNameExists:false,
               emailExists:false,
               registered:false
            }
        
    }
    initialstate=()=>{
        setTimeout(() => {
            this.setState({ usernameExists: false });
            this.setState({emailExists:false});
        }, 2000)
    }
    getName=(event)=>{
        console.log(event)
        console.log(event.target)
        console.log(event.target.value)
        this.setState({name:event.target.value})
        this.checkValidation('name')
    }
    getPassword=(event)=>{
        this.setState({password:event.target.value})
        
    }
    getRePassword=(event)=>{
        this.setState({repassword:event.target.value})
    }
    getEmail=(event)=>{
        this.setState({email:event.target.value})
    }
    getMobileNumber=(event)=>{
        this.setState({mobilenumber:event.target.value})
    }

    getNameError=(event)=>{
        this.setState({name:event.target.value})
        this.checkValidation('name')
    }
    getPasswordError=(event)=>{
        this.setState({password:event.target.value})
        this.checkValidation('password')
    }
    getRePasswordError=(event)=>{
        this.setState({repassword:event.target.value})
        this.checkValidation('repassword')
    }
    getEmailError=(event)=>{
        this.setState({emailerror:event.target.value})
        this.checkValidation('email')        
    }
    getMobileNumberError=(event)=>{
        this.setState({mobilenumbererror:event.target.value})
        this.checkValidation('mobilenumber')
    }
    checkValidation=(event)=>{
        let nameError=''
        let passwordError=''
        let repasswordError=''
        let emailError=''
        let mobilenumberError=''

        if(event==='name' && this.state.name===''){
            nameError=<p style={{color:'red'}}>User Name is Required</p>
        }
        if(event==='password' && this.state.password===''){
            passwordError=<p style={{color:'red'}}>Password is Required</p>
        }
        if(event==='repassword' && (this.state.repassword==='' ||this.state.password !=this.state.repassword)){
            repasswordError=<p style={{color:'red'}}>Re-Password is Mismatching</p>
        }
        if(event==='email' && this.state.email===''){
            emailError=<p style={{color:'red'}}>Email is Required</p>
        }
        if(event==='mobilenumber' && this.state.mobilenumber===''){
            mobilenumberError=<p style={{color:'red'}}>Mobile Number is Required</p>
        }
        if(nameError||passwordError||repasswordError||emailError||mobilenumberError){
            this.setState({
                nameerror:nameError,
                passworderror:passwordError,
                repassworderror:repasswordError,
                emailerror:emailError,
                mobilenumbererror:mobilenumberError,
                buttonStatus:true
            })
            return false
        }
        this.setState({
            nameError:'',
            passwordError:'',
            repasswordError:'',
            emailError:'',
            mobilenumberError:'',
            buttonStatus:false
        })
        return true
    }
    addPerson=(e)=>{
        
        // e.preventDefault();
            axios.get('http://localhost:3000/allPersons/?q='+this.state.name).then((res)=>{
                console.log(res.data[0])
                if(res.data[0]){
                   this.setState({usernameExists:true});
                   console.log('usernameExists')
                   this.initialstate()
                }else {
                    axios.get('http://localhost:3000/allPersons/?q='+this.state.email).then((res)=>{
                        console.log(res.data[0])
                        if(res.data[0]){
                           this.setState({emailExists:true});
                           console.log('Email exists');
                           this.initialstate();
                        }else{
                            var personRequestBody={
                                "name":this.state.name,
                                "password":this.state.password,
                                "repassword":this.state.repassword,
                                "email":this.state.email,
                                "mobilenumber":this.state.mobilenumber
                                     }
                                axios.post('http://localhost:3000/userDetails',personRequestBody).then((res)=>{
                                console.log(res.data);
                                this.setState({usernameExists:false});
                                this.setState({emailExists:false});
                                this.props.history.push('/');
                            }) 
                        }
                    })
                }
            })

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
                { this.state.usernameExists &&
                    <p style={{color:'red'}}><b>Username Already Exists</b></p>
                }
                {
                    this.state.emailExists &&
                    <p style={{color:'red'}}><b>Email Aready exists</b></p>
                }
                <form style={mystyle} onSubmit={this.addPerson}>

                    <h3>Enter  User Name </h3>
                    
                    <input type="text" id="name" onChange={this.getName} onBlur={this.getNameError}></input>
                    {this.state.nameerror}
                    <br></br>

                    <h3>Enter Password </h3>
                    <input type="password" id="password" onChange={this.getPassword} onBlur={this.getPasswordError}></input>
                    {this.state.passworderror}
                    <br></br>

                    <h3>Re-Enter the Password </h3>
                    <input type="password" id="repassword" onChange={this.getRePassword} onBlur={this.getRePasswordError}></input>
                    {this.state.repassworderror}
                    <br></br>

                    <h3>Enter your Email-Id </h3>
                    <input type="text" id="email" onChange={this.getEmail} onBlur={this.getEmailError}></input>
                    {this.state.emailerror}
                    <br></br>

                    <h3>Enter your Mobile Number </h3>
                    <input type="text" id="mobilenumber" onChange={this.getMobileNumber} onBlur={this.getMobileNumberError}></input>
                    {this.state.mobilenumbererror}
                    <br></br>
                    <br></br>
                    <button type="button"  style={{backgroundColor:"cyan"}}>Sign Up</button>
                </form>
            </div>
         );
    }
}
 
export default SignUp;