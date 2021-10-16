import React, { useState } from "react";
import styled from "styled-components";
import imgright from "../assets/signinright.svg";
import imgleft from "../assets/signinleft.svg";
import { Button } from "react-bootstrap";
import HomeIcon from "@material-ui/icons/Home";
import TextField from "@material-ui/core/TextField";
import axios from "axios";
import "./SignIn.css";
export default function SignUp() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const SignUpp = () => {
    axios
      .post("/api/users", { email, name, password })
      .then((res) => {
        localStorage.setItem("Token", res.data.token);
        localStorage.setItem("username", res.data.user.name);
        localStorage.setItem("email", res.data.user.email);
        window.location = "/";
      })
      .catch((err) => alert(err));
  };
  return (
    <>
      <HomeIcon
        style={{
          color: "#00B0FF",
          marginLeft: "80px",
          marginTop: "50px",
          cursor: "pointer",
        }}
        fontSize="large"
        onClick={() => (window.location = "/")}
      />
      <Container className="scale-up-center">
        <FormContainer>
          <ImgLeft src={imgleft} />
          <Form>
            <h1 style={{ color: "#00B0FF" }}> تسجيل الدخول</h1>

            <TextField
              id="standard-basic"
              label="  الاسم و اللقب"
              type="text"
              style={{ marginTop: "10px", marginBottom: "10px" }}
              onChange={(e) => setName(e.target.value)}
            />
            <TextField
              id="standard-basic"
              label=" البريد الالكتروني"
              type="email"
              style={{ marginTop: "10px", marginBottom: "10px" }}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              id="standard-basic"
              label="كلمة السر"
              type="password"
              style={{ marginTop: "10px", marginBottom: "10px" }}
              onChange={(e) => setPassword(e.target.value)}
            />

            <Button
              variant="outline-info"
              style={{ marginTop: "10px" }}
              onClick={SignUpp}
            >
              دخول
            </Button>
            <p
              onClick={() => (window.location = "/signin")}
              style={{ color: "#F9A826", cursor: "pointer" }}
            >
              تملك حساب؟
            </p>
          </Form>
          <ImgRight src={imgright} />
        </FormContainer>
      </Container>
    </>
  );
}
const Container = styled.div`
  height: 40vw;
  width: 100%;
  display: flex;
  justify-content: center;
`;
const FormContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;
const ImgRight = styled.img`
  height: 50vh;
  width: 50vh;
`;
const ImgLeft = styled.img`
  height: 50vh;
  width: 50vh;
`;
const Form = styled.form`
  text-align: center;
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 10%;
  margin: 20px;
  width: 25vw;
`;
