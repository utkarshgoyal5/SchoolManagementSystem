import './App.css';
import React, { useEffect } from "react";
import Header from './components/Header';
import { ToastContainer, toast } from 'react-toastify';
import { Button, Container } from 'reactstrap';
import Body from './components/Body';
import base64 from 'react-native-base64'

function App() {

  // let timmer = 8000;

  // const encodedString = base64.encode('Some string to encode to base64');
  // const success = () => toast.success(encodedString, {position: toast.POSITION.TOP_CENTER, autoClose: timmer});

  useEffect(() => {
    document.title = `SCHOOL MANAGEMENT SYSTEM`
  })

  return (
      <Container>
          <Header />
          <Body />
          {/* <ToastContainer  pauseOnFocusLoss={timmer} limit={3} /> */}
          {/* <Button onClick = {success}></Button> */}
      </Container>
    
  );
}

export default App;
