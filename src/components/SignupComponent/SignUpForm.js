import React, { useState } from "react";
import { Button, Col, Form, FormGroup, Input, Label, Nav, NavLink, Row } from "reactstrap";

const SignUpForm = ({ setSchoolDetailsMain }) => {

    const [schoolDetails, setSchoolDetails] = useState({});

    const setData = setSchoolDetailsMain(schoolDetails);

    return (
        <Form onChange={setData}>
            <Row>
                <Col>
                    <FormGroup floating>
                        <Input 
                            id="schoolName"
                            name="SchoolName"
                            placeholder="School Name"
                            type="text"
                            onChange={(e) => {
                                setSchoolDetails({...schoolDetails, school_name: e.target.value})
                            }} />
                        <Label for="schoolName">School Name</Label>
                    </FormGroup>
                </Col>
            </Row>
            <Row>
                <Col md={8}>
                    <FormGroup floating>
                        <Input 
                            id="email"
                            name="Email"
                            placeholder="Email Id"
                            type="email"
                            onChange={(e) => {
                                setSchoolDetails({...schoolDetails, email: e.target.value})
                            }} />
                        <Label for="email">Email Id</Label>
                    </FormGroup>
                </Col>
                <Col md={4}>
                    <FormGroup floating>
                        <Input 
                            id="phoneNumber"
                            name="PhoneNumber"
                            placeholder="Phone Number"
                            type="tel"
                            onChange={(e) => {
                                setSchoolDetails({...schoolDetails, phone_number: e.target.value})
                            }} />
                        <Label for="phoneNumber">Phone Number</Label>
                    </FormGroup>
                </Col>
            </Row>            
            <Row>
                <Col md={7}>
                    <FormGroup floating>
                        <Input 
                        id="address2"
                        name="Address2"
                        placeholder="Road name, Area, Colony"
                        type="text"
                        onChange={(e) => {
                            setSchoolDetails({...schoolDetails, area: e.target.value})
                        }} />
                        <Label for="address2">Road name, Area, Colony</Label>
                    </FormGroup>
                </Col>
                <Col md={5}>
                    <FormGroup floating>
                        <Input 
                        id="address3"
                        name="Address3"
                        placeholder="Village/Town/City"
                        type="text"
                        onChange={(e) => {
                            setSchoolDetails({...schoolDetails, city: e.target.value})
                        }} />
                        <Label for="address3">Village/Town/City</Label>
                    </FormGroup>
                </Col>
            </Row>
            <Row>
                <Col md={4}>
                    <FormGroup floating>
                        <Input 
                        id="address4"
                        name="Address4"
                        placeholder="State"
                        type="text"
                        onChange={(e) => {
                            setSchoolDetails({...schoolDetails, state: e.target.value})
                        }} />
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
                        onChange={(e) => {
                            setSchoolDetails({...schoolDetails, pincode: e.target.value})
                        }} />
                        <Label for="pincode">Pincode</Label>
                    </FormGroup>
                </Col>
                <Col md={5}>
                    <FormGroup floating>
                        <Input 
                        id="setPassword"
                        name="SetPassword"
                        placeholder="Set Password"
                        type="password" 
                        onChange={(e) => {
                            setSchoolDetails({...schoolDetails, password: e.target.value})
                        }} />
                        <Label for="setPassword">Set Password</Label>
                    </FormGroup>
                </Col>
            </Row>
              
        </Form>
    );
}

export default SignUpForm;