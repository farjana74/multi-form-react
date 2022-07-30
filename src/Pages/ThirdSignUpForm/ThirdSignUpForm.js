
import { FaRegIdCard } from 'react-icons/fa';
import { useForm } from 'react-hook-form';
import "./ThirdSignUpForm.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useState, useEffect } from 'react';

const ThirdSignUpForm = ({ formData, setFormData, content, setContent, contents, setContents, contentDiscussion, setContentDiscussion, contentParticipant, setContentParticipant, page, setPage, FormTitles }) => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {



        console.log(data);
    }
    // animation AOS
    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, [])
    return (
        <div className='container py-5'>
            <div className="row pt-5 align-items-center justify-content-between ">
                <div className='col-12 col-sm-12 col-md-12 col-lg-6'>
                    <div className="progressbar w-50 mt-3">
                        <div
                            style={{ width: page === 0 ? "25%" : page === 1 ? "50%" : page === 2 ? "75%" : "100%" }}
                            className="d-flex"
                        >
                        </div>
                    </div>
                    <h1 className='secondSignUp-title pb-2'>Enter Your Date of Birth</h1>
                    <h6 className='text-white pb-4'>Let's check if you're old enough to play</h6>


                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div class="mb-3">
                            <label class="form-label text-white fs-6">DATE OF BIRTH</label>
                            <br />
                            <select className='select-day' required {...register("DAY")}>
                                <option value="day">Day</option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                <option>6</option>
                                <option>7</option>
                            </select>

                            <select className='mx-2 select-month' required {...register("MONTH")}>
                                <option value="month">Month</option>
                                <option>January</option>
                                <option>feb</option>
                                <option>march</option>
                                <option>april</option>
                                <option>may</option>
                                <option>june</option>
                                <option>july</option>
                                {/* <option value="male">male</option>
                                <option value="other">other</option> */}
                            </select>
                            <select className='select-year' required {...register("Year")}>
                                <option value="year">Year</option>
                                <option>2001</option>
                                <option>2002</option>
                                <option>2003</option>
                                <option>2004</option>
                                <option>2005</option>
                                <option>2006</option>
                                <option>2007</option>
                            </select>
                        </div>


                    </form>
                    <div className=" text-start py-3">
                        <button
                            className='control-btn-back'
                            disabled={page === 0}
                            onClick={() => {
                                setPage((currPage) => currPage - 1);
                            }}
                        >
                            Back
                        </button>
                        <button
                            className='control-btn-continue '
                            onClick={() => {
                                if (page === FormTitles.length - 1) {
                                    alert('submitted')



                                } else {
                                    setPage((currPage) => currPage + 1);
                                }
                            }}
                        >
                            {page === FormTitles.length - 1 ? "Submit" : "Continue"}
                            {/* {page === FormTitles.length - 1 ? "Submit" :} */}
                        </button>
                    </div>

                </div>
                <div data-aos="fade-left" className="col-12 col-sm-12 col-md-12 col-lg-4">
                    <div className=' card p-5'>
                        <h5 className='text-center text'>Important</h5>

                        <div className='text-center card-icon py-2'>
                            <FaRegIdCard />
                        </div>
                        <div className='text-center card-title'>
                            <h5> Make sure this info <br />
                                matches your driver's <br />
                                license.</h5>

                        </div>
                        <p className='py-2 fs-6 text-white text-center'>This is essential for our user verification process.</p>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default ThirdSignUpForm;