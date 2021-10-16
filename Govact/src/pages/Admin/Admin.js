import React, { useEffect, useState } from "react";
import SignUp from "./Components/SignUp";
import SignIn from "./Components/SignIn";
import styled from "styled-components";
import Dashboard from './Components/Dashboard/Dashboard'
function Admin() {
  const [form, setForm] = useState(true);
  const [authAdmin, setAuthAdmin] = useState(false);
  useEffect(() => {
    if(localStorage.getItem('token')){
      setAuthAdmin(true)
    }
  }, [authAdmin])
  const changeForm = () => {
    setForm((prev) => !prev);
  };
  if(authAdmin){
    return <Dashboard />
  }else{
    return (
      <div>
        {form ? (
          <Form>
            <SignIn />
  
            <h5 style={{ cursor: "pointer" }} onClick={changeForm}>
              Don't have an account? Sign Up
            </h5>
          </Form>
        ) : (
          <Form>
            <SignUp />
  
            <h5 style={{ cursor: "pointer" }} onClick={changeForm}>
              Already have an account? Sign in
            </h5>
          </Form>
        )}
      </div>
    );
  }
}

export default Admin;
const Form = styled.div`
display:flex;
flex-direction: column;
justify-content:center;
align-items:center;
`