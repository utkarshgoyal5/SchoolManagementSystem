import React, { useEffect } from "react";
import StudentEnquiryForm from "./StudentEnquiryForm";

const StudentEnquiry = () => {

    useEffect(() => {
        document.title = `STUDENT ENQUIRY`
    })
    
    return(
        <div className="p-5">
            <StudentEnquiryForm />
        </div>
    );
}

export default StudentEnquiry;