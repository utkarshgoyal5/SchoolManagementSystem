import React, { useState } from "react";
import { Button, ButtonGroup, Col, Form, FormGroup, Input, Label, Nav, NavLink, Row } from "reactstrap";
import SchoolDetails from "../api/SchoolDetails";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import Classes from "../../utils/Classes";

const StudentEnquiryForm = () => {

    const [studentDetails, setStudentDetails] = useState({});

    const timmer = 3000;


    const handleStudentEnquiryForm = (e) => {
        // setStudentDetails({...studentDetails, school_id: SchoolDetails.getSchoolId});
        setStudentDetails({...studentDetails, school_id: localStorage.getItem('school')});

        addStudentDetails(studentDetails)
        console.log(studentDetails);
        e.preventDefault();
    }

    const addStudentDetails = (input) => {

        if(input.student_name == null) {
            toast.warn("Enter Student Name", {position: toast.POSITION.TOP_CENTER, autoClose: timmer});
        } 
        
        else if(input.mobile_number == null) {
            toast.warn("Enter Phone Number", {position: toast.POSITION.TOP_CENTER, autoClose: timmer});
        }   

        else {
            axios.post(`/sms/addStudentDetails`, input).then(
                (response) => {
                    console.log(response);
                    toast.success("Student information added successfully", {position: toast.POSITION.TOP_CENTER, autoClose: timmer});
                },
                (error) => {
                    console.log(error);
                    toast.warn("Error while adding student information", {position: toast.POSITION.TOP_CENTER, autoClose: timmer});
                }
            )
        }
    };
    // const classNames = Classes.getClasses;
    const classNames = [
        { label: "Play Group", value: "Play_Group" },
        { label: "Nursery", value: "Nursery" },
        { label: "L.K.G.", value: "LKG" },
        { label: "U.K.G.", value: "UKG" },
        { label: "1st", value: "I" },
        { label: "2nd", value: "II" },
        { label: "3rd", value: "III" },
        { label: "4th", value: "IV" },
        { label: "5th", value: "V" },
        { label: "6th", value: "VI" },
        { label: "7th", value: "VII" },
        { label: "8th", value: "VIII" },
        { label: "9th", value: "IX" },
        { label: "10th", value: "X" },
        { label: "11th", value: "XI" },
        { label: "12th", value: "XII" }
    ];

    
    return (
        <Form onSubmit={handleStudentEnquiryForm}>
        <ToastContainer />
            <Row>
                <Col md={6}>
                    <FormGroup floating>
                        <Input 
                        id="studentName"
                        name="studentName"
                        placeholder="Student Name"
                        type="text" 
                        onChange={(e) => 
                            setStudentDetails({...studentDetails, student_name: e.target.value})}
                        />
                        <Label for="studentName">Student Name</Label>
                    </FormGroup>
                </Col>
                <Col md = {6}>
                    <FormGroup floating>
                        <Input 
                        id="guardianName"
                        name="guardianName"
                        placeholder="Guardian Name"
                        type="text" 
                        onChange={(e) => 
                            setStudentDetails({...studentDetails, guardian_name: e.target.value})}
                        />
                        <Label for="guardianName">Guardian Name</Label>
                    </FormGroup>
                </Col>
            </Row>
            <Row>
                <Col md={4}>
                    <FormGroup floating>
                        <Input 
                        id="mobileNumber"
                        name="MobileNumber"
                        placeholder="Mobile Number"
                        type="tel" 
                        onChange={(e) => 
                            setStudentDetails({...studentDetails, mobile_number: e.target.value})}
                        />
                        <Label for="mobileNumber">Mobile Number</Label>
                    </FormGroup>
                </Col>
                <Col md={4}>
                    <FormGroup floating>
                        <Input 
                        id="whatsappNumber"
                        name="WhatsapNumber"
                        placeholder="Whatsapp Number"
                        type="tel" 
                        onChange={(e) => 
                            setStudentDetails({...studentDetails, whatsapp_number: e.target.value})}
                        />
                        <Label for="whatsappNumber">Whatsapp Number</Label>
                    </FormGroup>
                </Col>
                <Col md={4}>
                    <FormGroup floating>
                        <Input 
                        id="otherNumber"
                        name="otherNumber"
                        placeholder="Other Number"
                        type="tel"
                        onChange={(e) => 
                            setStudentDetails({...studentDetails, other_number: e.target.value})}
                        />
                        <Label for="otherNumber">Other Number</Label>
                    </FormGroup>
                </Col>
            </Row>
            <Row>
                <Col md={4}>
                    <FormGroup floating>
                        <Input 
                        id="lastClass"
                        name="previousClass"
                        placeholder="Last Class Attended"
                        type="select"
                        onChange={(e) => 
                            setStudentDetails({...studentDetails, last_school_class_attended: e.target.value})}
                        >
                        {classNames.map((option) => (
                            <option value={option.value}>{option.label}</option>
                        ))}
                        </Input>
                        <Label for="lastClass">Last Class Attended</Label>
                    </FormGroup>
                </Col>
                <Col md = {8}>
                    <FormGroup floating>
                        <Input 
                        id="previousSchool"
                        name="previousSchool"
                        placeholder="Last School Attended"
                        type="text"
                        onChange={(e) => 
                            setStudentDetails({...studentDetails, last_school_attended: e.target.value})}
                        />
                        <Label for="previousSchool">Last School Attended</Label>
                    </FormGroup>
                </Col>
            </Row>
            <Row>
                <Col md={6}>
                    <FormGroup floating>
                        <Input 
                        id="address1"
                        name="Address1"
                        placeholder="Flat, House no., Building name"
                        type="text"
                        onChange={(e) => 
                            setStudentDetails({...studentDetails, house: e.target.value})} 
                    />
                        <Label for="address1">Flat, House no., Building name</Label>
                    </FormGroup>
                </Col>
                <Col md={6}>
                    <FormGroup floating>
                        <Input 
                        id="address2"
                        name="Address2"
                        placeholder="Road name, Area, Colony"
                        type="text"
                        onChange={(e) => 
                            setStudentDetails({...studentDetails, area: e.target.value})}
                        />
                        <Label for="address2">Road name, Area, Colony</Label>
                    </FormGroup>
                </Col>
            </Row>
            <Row>
                <Col md={5}>
                    <FormGroup floating>
                        <Input 
                        id="address3"
                        name="Address3"
                        placeholder="Village/Town/City"
                        type="text" 
                        onChange={(e) => 
                            setStudentDetails({...studentDetails, city: e.target.value})}
                        />
                        <Label for="address3">Village/Town/City</Label>
                    </FormGroup>
                </Col>
                <Col md={4}>
                    <FormGroup floating>
                        <Input 
                        id="address4"
                        name="Address4"
                        placeholder="State"
                        type="text" 
                        onChange={(e) => 
                            setStudentDetails({...studentDetails, state: e.target.value})}
                        />
                        <Label for="address4">State</Label>
                    </FormGroup>
                </Col>
                <Col md={3}>
                    <FormGroup floating>
                        <Input 
                        id="pincode"
                        name="Pincode"
                        placeholder="Pincode"
                        type="text" 
                        onChange={(e) => 
                            setStudentDetails({...studentDetails, pincode: e.target.value})}
                        />
                        <Label for="pincode">Pincode</Label>
                    </FormGroup>
                </Col>
            </Row>
            <Row>
                <Col>
                    <FormGroup floating>
                        <Input 
                        id="email"
                        name="Email"
                        placeholder="Email Address"
                        type="email" />
                        <Label for="email">Email Address</Label>
                    </FormGroup>
                </Col>
            </Row>
            <Row>
                <Col className="position-relative">
                    <ButtonGroup className="position-absolute top-50 start-50 translate-middle-x">
                        <Button type="submit" color="success" size="lg" >  
                            Add Student Enquiry
                        </Button>
                        <Button type="reset" color="secondary" size="lg" >  
                            Clear
                        </Button>
                    </ButtonGroup>
                </Col>
            </Row>
           
        </Form>
    );

}

export default StudentEnquiryForm;