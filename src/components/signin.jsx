import '../index.css';
import logo from "../assets/IMGPP.png";
import logo2 from "../assets/IMGPP2.png";
import left_img from "../assets/Group 18.png";
export default function Signin(){
    return (
        <div className='sign_content'>
           <div className='left_sign'>
            <div>
                <img className='logo' src={logo} alt="logo" />
            </div>

            <div className='left_sign-content'>
                <img className='img-group' src={left_img} alt="img-group" />

            <h3>Image Processor Pro</h3>
            <p>Everything you need in an easily customizable dashboard</p>
            </div>
            
            
           </div>

           <div className='right_sign'>
             <img className='logo2' src={logo2} alt="logo2" />

                <div className='right_sign-contnet'>
                    <h3>Sign In</h3>
                    <p>Welcome back! Please enter your details </p>
                    <form className='form_content' action="">
                        <label htmlFor="">Email</label>
                        <input type="email" placeholder='Enter Email' required/>
                        <label htmlFor="">Password</label>
                        <input type="password" placeholder='Enter Password' required/>
                    </form>
                    <div className='btn btn-submit'>
                    Sign in
                    </div>
                </div>
            
            </div>
           
        </div>
    )
}