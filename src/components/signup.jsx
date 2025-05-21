import '../index.css';
import { useNavigate } from 'react-router-dom';
import { useRef } from 'react';
import logo from "../assets/IMGPP.png";
import logo2 from "../assets/IMGPP2.png";
import left_img from "../assets/Group 18.png";
import google from "../assets/google.png";
import password from "../assets/password.png";

export default function Signup(){
    const navigate = useNavigate();
    const passwordRef = useRef(null);

    return (
        <div className='sign_content'>
                   <div className='left_sign'>
                    <div>
                        <img className='logo' src={logo} alt="logo" />
                    </div>
        
                    <div className='left_sign-content'>
                        <img className='img-group' src={left_img} alt="img-group" />
        
                    <h2>Image Processor Pro</h2>
                    <p>Everything you need in an easily customizable dashboard</p>
                    </div>
                    
                    
                   </div>
        
                   <div className='right_sign2'>
                     <img className='logo2sign' src={logo2} alt="logo2" />
        
                        <div className='right_sign-content2'>
                            <h2>Sign up</h2>
                            <p>Welcome please fill in your details to get started. </p>
                            <form className='form_content' action="">
                                <h6>Name</h6>
                                <input type="email" placeholder='Enter Name' required/>
                                <br />
                                <h6>Business Name</h6>
                                <input type="email" placeholder='Enter Business Name' required/>
                                <br />
                                <h6>Email</h6>
                                <input type="email" placeholder='Enter Email' required/>
                                <br />
                                <h6>Password</h6>
                                <div className='password-wrapper'>
                                  <input ref={passwordRef} type="password" placeholder='Enter Password' required />
                                  <img src={password} alt="password" className='password' 
                                  onClick={() => {
                                    const input = passwordRef.current;
                                    input.type = input.type === "password" ? "text" : "password";
                                    }}
                                  />
                                </div>
                                
                            </form>
                            <br />
                            <div className='btn btn-submit'>
                            Sign up
                            </div>
                            <br />
                            <div className='btn btn-google'>
                            <img className='google' src={google} alt="google" />
                            Sign up with Google
                            </div>
        
                            <div className='account-style'>
                            <p>
                                Already have an account ?{" "} 
                                <span onClick={() => navigate('/')}>Sign in</span>
                            </p>
                            </div>
                            
                        </div>
                    
                    </div>
                   
                </div>
            )
}