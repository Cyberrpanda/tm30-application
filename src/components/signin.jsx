import '../index.css';
import logo from "../assets/IMGPP.png";
import logo2 from "../assets/IMGPP2.png";
import left_img from "../assets/Group 18.png";
import google from "../assets/google.png";
import password from "../assets/password.png";
export default function Signin(){
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

           <div className='right_sign'>
             <img className='logo2' src={logo2} alt="logo2" />

                <div className='right_sign-content'>
                    <h2>Sign In</h2>
                    <p>Welcome back! Please enter your details </p>
                    <form className='form_content' action="">
                        <h6>Email</h6>
                        <input type="email" placeholder='Enter Email' required/>
                        <br />
                        <h6>Password</h6>
                        <input type="password" placeholder='Enter Password' required/>
                    </form>
                    <br />
                    <div className='btn btn-submit'>
                    Sign in
                    </div>
                    <br />
                    <div className='btn btn-google'>
                    <img className='google' src={google} alt="google" />
                    Sign in with Google
                    </div>

                    <div className='account-style'>
                    <p>
                        Need an account ? <span>Create an account</span>
                    </p>
                    </div>
                    
                </div>
            
            </div>
           
        </div>
    )
}