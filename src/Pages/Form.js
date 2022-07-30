import React, { useState } from 'react';
import FirstSignUpForm from './FirstSignUpForm/FirstSignUpForm';
import FourthSignUpForm from './FourthSignUpForm/FourthSignUpForm';
import SecondSignUpForm from './SecondSignUpForm/SecondSignUpForm';
import ThirdSignUpForm from './ThirdSignUpForm/ThirdSignUpForm';
import "./Form.css";
const Form = () => {

    const [page, setPage] = useState(0);

    const FormTitles = ["firstSignUpForm", "secondSignUpForm", "thirdSignUpForm", "fourthSignUpForm"];
    const [formData, setFormData] = useState({

        email: "",
        code: "",
        first_name: "",
        last_name: "",
        month: "",
        day: "",
        year: "",
        address: "",






    });

    const PageDisplay = () => {
        if (page === 0) {
            return <FirstSignUpForm

                page={page}
                setPage={setPage}
                FormTitles={FormTitles}

            ></FirstSignUpForm>
        } else if (page === 1) {
            return <SecondSignUpForm
                page={page}
                setPage={setPage}
                FormTitles={FormTitles}

            ></SecondSignUpForm>
        }
        else if (page === 2) {

            return <ThirdSignUpForm
                page={page}
                setPage={setPage}
                FormTitles={FormTitles}

            ></ThirdSignUpForm>
        }
        else if (page === 3) {
            return <FourthSignUpForm

                page={page}
                setPage={setPage}
                FormTitles={FormTitles}
            ></FourthSignUpForm>
        }
    };

    return (
        <div className='container-fluid pt-3 bg-color '>

            <div className="form container">

                <div className="form-container">
                    <div className="header">

                    </div>
                    <div className="body">



                        {PageDisplay()}</div>

                </div>
            </div>
        </div>

    );
};

export default Form;