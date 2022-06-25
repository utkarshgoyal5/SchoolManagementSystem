import React from "react";
import { Link } from "react-router-dom";
import { ListGroup } from "reactstrap";
import { Accordion } from "react-bootstrap";
const Menu = () => {
    return (
        <div>
            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Student Enquiry</Accordion.Header>
                    <Accordion.Body >
                        <ListGroup flush>
                            <Link className="list-group-item list-group-item-action" tag="a" to="/sms/student-enquiry" action="true">
                                Student Enquiry Form
                            </Link>
                            <Link className="list-group-item list-group-item-action" tag="a" to="/" action="true">
                                Sign Out
                            </Link>
                        </ListGroup>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Student Enquiry TEST</Accordion.Header>
                    <Accordion.Body >
                        <ListGroup flush>
                            <Link className="list-group-item list-group-item-action" tag="a" to="/sms/student-enquiry" action="true">
                                Student Enquiry Form
                            </Link>
                            <Link className="list-group-item list-group-item-action" tag="a" to="/" action="true">
                                Sign Out
                            </Link>
                        </ListGroup>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2" as={Link} className="list-group-item list-group-item-action" tag="a" to="/" action="true">
                    Sign Out
                </Accordion.Item>
            </Accordion>
        </div>
    );
}

export default Menu;