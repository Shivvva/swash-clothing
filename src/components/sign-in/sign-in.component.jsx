import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { signInWithGoogle } from '../../firebase/firebase.utils.js';

import './sign-in.styles.scss';

class SignIn extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            email:'',
            password:''
        }
    }

    handleSubmit = event =>{
        event.preventDefault();
        
        this.setState({email:'', password:''});
    }

    handleChange = event =>{
        const {value, name} = event.target;

        this.setState({[name]: value});
    }

    render(){
        return(
            <div className='sign-in'>
                <h1>I already have an account</h1>
                <span>Sign in with your Email and Password</span>

                <form onSubmit={this.handleSubmit}>
                    
                    <FormInput 
                    name="email" 
                    type ="email" 
                    handleChange={this.handleChange} 
                    value={this.state.email}
                    label='Email' 
                    required
                    />
                   
                    <FormInput 
                    name="password" 
                    type ="password" 
                    handleChange={this.handleChange} 
                    value={this.state.password} 
                    label='Password'
                    required 
                    />

                    <div className='buttons'>

                    <CustomButton type="submit" >SIGN IN </CustomButton>
                    <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
                        Sign In With Google 
                    </CustomButton>
                    
                    </div>
                </form>

            </div>
        );
    }
}

export default SignIn; 