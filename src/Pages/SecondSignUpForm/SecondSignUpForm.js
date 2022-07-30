
import { useForm } from 'react-hook-form';
import "./SecondSignUpForm.css";
import { FaRegIdCard } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useState, useEffect } from 'react';

const SecondSignUpForm = ({ formData, setFormData, content, setContent, contents, setContents, contentDiscussion, setContentDiscussion, contentParticipant, setContentParticipant, page, setPage, FormTitles }) => {
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
                    <h1 className='secondSignUp-title pb-2'>Enter Your Full Name</h1>


                    <form onSubmit={handleSubmit(onSubmit)} className="">


                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label text-white fs-6">FIRST NAME</label>
                            <input type="text" spellCheck='false' required class="form-control form-input   " placeholder="Type here..." />
                        </div>

                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label text-white fs-6">LAST NAME</label>
                            <input type="text" spellCheck='false' required class="form-control form-input   " placeholder="Type here..." />
                        </div>
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
                        <br />



                    </form>
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

export default SecondSignUpForm;