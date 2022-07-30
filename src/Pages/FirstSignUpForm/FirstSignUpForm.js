import React from 'react';
import signLogo from "../../images/logo.svg";
import "./FirstSignUpForm.css";

const FirstSignUpForm = ({ formData, setFormData, content, setContent, contents, setContents, contentDiscussion, setContentDiscussion, contentParticipant, setContentParticipant, page, setPage, FormTitles }) => {
    return (
        <div className="container py-5">
            <div className="row gy-5 ">
                <div className="col-12 col-sm-12 col-md-12 col-lg-7">
                    <div className='d-flex pb-5 align-items-center'>
                        <div>
                            <img src={signLogo} alt="" />
                        </div>
                        <div>
                            <p className='text pt-3 px-5'>Have an account ?</p>
                        </div>
                    </div>
                    <div className="progressbar w-50 mt-3">
                        <div
                            style={{ width: page === 0 ? "25%" : page === 1 ? "50%" : page === 2 ? "75%" : "100%" }}
                            className="d-flex"
                        >
                        </div>
                    </div>

                    <h1 className='pt-2 text-white sign-title'>Enter Your Email</h1>
                    <p className='sign-title'>You'll use this to log into your account.</p>

                    <div class="mb-3">
                        <label class="form-label text-white">Email</label>
                        <input type="email" spellCheck='false' required class="form-control form-input   " placeholder="Type here..." />

                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label text-white">PROMO CODE(OPTIONAL)</label>
                        <input type="password" required class="form-control form-input " placeholder="Type here..." />

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

                </div>
                <div className="col-12 col-sm-12 col-md-12 col-lg-5">
                    <h1 className='text-center header-title'>DAILY FANTASY,<br />
                        SIMPLIFIED.</h1>
                    <h5 className='text-center header-description py-2'>4.8 Stars Across 15,000+ Reviews</h5>
                </div>
            </div>

        </div>
    );
};

export default FirstSignUpForm;