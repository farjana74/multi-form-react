import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../../images/logo.svg";
import "./LoginForm.css";

const LoginForm = () => {
    return (
        <div className="container pt-5">
            <div className="row  gy-5">
                <div className="col-12 col-sm-12 col-md-12 col-lg-7">
                    <img src={logo} alt="" />

                    <h4 className='py-5 text-white login-title'>Log In</h4>

                    <div class="mb-2">
                        <label for="exampleFormControlInput1" class="form-label text-white fs-6">Email</label>
                        <input type="email" spellCheck='false' class="form-control form-input   " placeholder="Type here..." />
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label text-white fs-6">PASSWORD</label>
                        <input type="password" class="form-control form-input  " id="exampleFormControlInput1" placeholder="Type here..." />
                    </div>
                    <div class="mb-3  text-end">
                        <label class="form-label text ">FORGOT PASSWORD?</label>
                        <button className='w-100   login-button'>Log In</button>
                    </div>
                    <div class="mb-3 text-center my-5 ">
                        <label class="form-label text-white fs-6 pb-2  ">NEW TO PRIZEPICKS?</label>
                        <Link to="/form">
                            <button className=' sign-button'>Sign Up</button>

                        </Link>

                    </div>
                </div>
                <div className="col-12 col-sm-12 col-md-12 col-lg-5  ">
                    <h1 className='text-center header-title'>DAILY FANTASY,<br />
                        SIMPLIFIED.</h1>
                    <h5 className='text-center header-description py-2'>4.8 Stars Across 15,000+ Reviews</h5>
                </div>
            </div>

        </div>
    );
};

export default LoginForm;