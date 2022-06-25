import React, { useEffect } from "react";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import { Container } from "reactstrap";
import Login from "./LoginComponent/Login";
import OuterComponent from "./OuterComponent";
import SignUp from "./SignupComponent/SignUp";
import StudentEnquiry from "./StudentEnquiry/StudentEnquiry";

const Body = () => {

    useEffect(() => {
        document.title = `SCHOOL MANAGEMENT SYSTEM`
    })

    return (
        <Container>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login />} exact/>
                    <Route path="/sign-up" element={<SignUp />} exact/>
                    <Route path="/*" element={<OuterComponent />} exact/>
                </Routes>
            </BrowserRouter>
        </Container>
    );
}

export default Body;