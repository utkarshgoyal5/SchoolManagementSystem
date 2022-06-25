import React, { useEffect, useState } from "react";
import { Card, CardBody, CardTitle, Col, Container, Row, UncontrolledCarousel } from "reactstrap";
import LoginForm from "./LoginForm";

const Login = () => {

    useEffect(() => {
        document.title = `SCHOOL MANAGEMENT SYSTEM`
    })
    return (
        <Container className="text-center my-5">
            <Row className="align-items-center">
                <Col md={{size: 5, offset: 1}} >
                    <UncontrolledCarousel
                        items={[
                            {
                            altText: 'Slide 1',
                            caption: 'Slide 1',
                            key: 1,
                            src: 'https://picsum.photos/id/123/1200/600'
                            },
                            {
                            altText: 'Slide 2',
                            caption: 'Slide 2',
                            key: 2,
                            src: 'https://picsum.photos/id/456/1200/600'
                            },
                            {
                            altText: 'Slide 3',
                            caption: 'Slide 3',
                            key: 3,
                            src: 'https://picsum.photos/id/678/1200/600'
                            }
                        ]}
                    />
                    {/* <Card className="text-center">
                    <CardBody>
                        <CardTitle tag="h1" className="text-danger">
                            SCHOOL MANAGEMENT SYSTEM
                        </CardTitle>
                    </CardBody>
                    </Card> */}
                </Col>
                <Col md={{size: 4, offset: 1}} >
                    <Card className="text-center">
                    <CardBody>
                        <CardTitle>
                            <LoginForm />
                        </CardTitle>
                    </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>  
    );
}

export default Login;