import React from "react"
import { Card, CardBody, CardTitle, Container } from "reactstrap";

function Header({title}) {

    if(null == title) title = 'SCHOOL MANAGEMENT SYSTEM';

    return (
        <Container>
            <Card color="success" className="text-center" inverse>
                <CardBody>
                    <CardTitle tag="h1" color="">
                        {title}
                    </CardTitle> 
                </CardBody>
            </Card> 
        </Container>
    );
}

export default Header;