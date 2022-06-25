import React, { useState } from "react";
import SignUpForm from "./SignUpForm";
import { ModalHeader, Modal, ModalBody, ModalFooter, Button } from "reactstrap";
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import base_url from "../api/smsBackendApi";

const SignUp = () => {

    const [openSignUpForm, setSignUpFormState] = useState(false);
    const toggle = () => setSignUpFormState(!openSignUpForm);
    const [schoolDetails, setSchoolDetails] = useState({});
    let timmer = 3000;
    const submitForm = () => {

        if(schoolDetails.school_name == null) {
            toast.warn("Enter School Name", {position: toast.POSITION.TOP_CENTER, autoClose: timmer});
        } else if(schoolDetails.phone_number == null) {
            toast.warn("Enter Phone Number", {position: toast.POSITION.TOP_CENTER, autoClose: timmer});
        } else if(schoolDetails.email == null) {
            toast.warn("Enter Email Address", {position: toast.POSITION.TOP_CENTER, autoClose: timmer});
        } else if(schoolDetails.password == null) {
            toast.warn("Set Password", {position: toast.POSITION.TOP_CENTER, autoClose: timmer});
        } else {
            const test = { city: 'Aligarh', 
            email: 'demo@school', 
            password: 'demopass', 
            phone_number: '+917500502522', 
            pincode: '202001', 
            school_name: 'checkSchool', 
            state: 'Uttar Pradesh' };
            
            const headers = { 
                'Content-Type': 'application/json'
            }

            axios.post(`/sms/addSchoolDetails`, schoolDetails).then(
                (response) => {
                    console.log(response);
                    toast.success("School information added successfully", {position: toast.POSITION.TOP_CENTER, autoClose: timmer});
                    setSignUpFormState(false);
                },
                (error) => {
                    console.log(error);
                    toast.warn("Error while adding school information", {position: toast.POSITION.TOP_CENTER, autoClose: timmer});
                    setSignUpFormState(false);
                }
            )
        }
        
        console.log(schoolDetails)
        console.log(schoolDetails.school_name)
        
    }

    return (
        <div>
            <ToastContainer  autoClose={timmer} limit={1}/>
            <Button onClick={toggle} block color="success" size="lg">
                Create New Account
            </Button>
            <Modal
                isOpen={openSignUpForm}
                centered
                scrollable
                size="lg"
                toggle={toggle}
            >
                <ModalHeader toggle={toggle}>
                Sign Up
                </ModalHeader>
                <ModalBody>
                    <SignUpForm setSchoolDetailsMain={ setSchoolDetails }/>
                </ModalBody>
                <ModalFooter>
                    <Button
                        color="primary"
                        onClick={submitForm}
                    > 
                    Submit
                    </Button>
                    {' '}
                    <Button onClick={toggle}>
                        Cancel
                    </Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default SignUp;