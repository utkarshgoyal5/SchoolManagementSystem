import React from "react";
import { Col, Container, Row } from 'reactstrap';
import {Route, Routes} from 'react-router-dom';
import Menu from "./Menu";
import StudentEnquiry from "./StudentEnquiry/StudentEnquiry";
import Login from "./LoginComponent/Login";

const OuterComponent = () => {

    return (
        
        <Container className="text-center">
            <Row>
                <Col md={3}>
                    <Routes>
                        <Route path="/sms/*" element={<Menu />} exact/>
                    </Routes>
                </Col>
                <Col md={9}>
                  
                    <Routes>
                        <Route path="/sms/student-enquiry/*" element={<StudentEnquiry />} exact/>
                    </Routes>
                
                </Col>
            </Row>
        </Container> 
        
    );
}

export default OuterComponent;