import React, {useState, useHistory} from "react";
import { Button, Form, FormGroup, Input, Label, Nav, NavLink, Badge } from "reactstrap";
import { Link } from "react-router-dom";
import base64 from 'react-native-base64'
import axios from 'axios';
import base_url from "../api/smsBackendApi";
import { ToastContainer, toast } from 'react-toastify';
import SignUpForm from "../SignupComponent/SignUpForm";
import SignUp from "../SignupComponent/SignUp";
import SchoolDetails from "../api/SchoolDetails";

const timmer = 1000
const warnText = "Username or password incorrect"
const successText = "Successfully Login"

const LoginForm = () => {

    let checkDuplicate = false;

    const [credentials, getCredentials] = useState([
        { userName: "demo", password: "demo" },
        { userName: "G.D.S.M. School", password: "1969" }
    ]);

    const [input, setCredentials] = useState({});

    const handleForm = (e) => {

        const encodedString = base64.encode(input.password);
        verifyLoginDetails(input, encodedString);

        console.log(input);
        console.log(encodedString);
        e.preventDefault();
    };

    //function to call backend for login
    const verifyLoginDetails = (input, encodedString) => {

        <ToastContainer  autoClose={timmer} limit={1}/>
        axios.get(`/sms/loginRequest?user_name=${input.userName}&password=${encodedString}`).then(
            (response) => {
                
                console.log(response);
                SchoolDetails.setSchoolId(response.school_id);
                if(response.status == 200) {
                    localStorage.setItem('school', response.school_id);
                    window.location = "/sms"
                }
                toast.success(successText, {position: toast.POSITION.TOP_CENTER, autoClose: timmer});
            
            },
            (error) => {
                console.log(error);
                if(!checkDuplicate) {
                    toast.warn(warnText, {position: toast.POSITION.TOP_CENTER, autoClose: timmer});
                    checkDuplicate = true;
                }
            }
        )
    };

    // const history = useHistory();

    // function handleClick(path) {history.push(path);

    return (
        <Form onSubmit={handleForm} >
            <FormGroup floating>
                <Input 
                bsSize="lg"
                id="loginValue"
                name="loginName"
                placeholder="Email or School Id"
                type="text" 
                onChange={(e) => {
                    setCredentials({...input, userName: e.target.value})
                }}/>
                <Label for="loginValue">Email or School Id</Label>
            </FormGroup>
            <FormGroup floating>
                <Input 
                bsSize="lg"
                id="loginPassword"
                name="password"
                placeholder="Password"
                type="password" 
                onChange={(e) => {
                    setCredentials({...input, password: e.target.value})
                }}/>
                <Label for="loginPassword">Password</Label>
            </FormGroup>
            {/* <Link className="list-group-item list-group-item-action bg-primary text-white"
                    tag="a"
                    to="/sms"
                    action="true"
                    role="button"
                    type="submit"
                >Login
            </Link> */}
            <Button type="submit" block color="primary" size="lg" >  
                Login
            </Button>
            
            <Nav>
                <NavLink href="#">
                    Forgotten password?
                </NavLink>
            </Nav>
            <hr />
            <SignUp />
        </Form>
    );

}

export default LoginForm;