import React, { useState } from "react";
import bg from "../assets/bbg.png";
import u from "../assets/rec.jpg";

import styled from "styled-components";
import Container from "@material-ui/core/Container";
import HomeIcon from "@material-ui/icons/Home";
import { Link } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import axios from "axios";
export default function Reclamation() {
  const [sujet, setSujet] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState("");
  const [filename, setFilename] = useState("");
  const sendReclamation = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", file);
    formData.append("title", localStorage.getItem("username"));
    formData.append("subject", sujet);
    formData.append("message", description);
    formData.append("name", filename);

    axios
      .post("/api/reclams/", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log(res.data);
        alert("Reclamation Envoyée");
        window.location = "/"
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <Body>
        <Container>
          <Link to="/">
            <Icon>
              <HomeIcon fontSize="large" />
            </Icon>
          </Link>
          <Head>
            <Card>
              <Form>
                <TextField
                  id="standard-basic"
                  value={localStorage.getItem("username")}
                  type="text"
                  fullWidth="true"
                  style={{ marginTop: "10px", marginBottom: "10px" }}
                />
                <br />
                <TextField
                  id="standard-basic"
                  label="الموضوع"
                  type="email"
                  fullWidth="true"
                  style={{ marginTop: "10px", marginBottom: "10px" }}
                  onChange={(e) => setSujet(e.target.value)}
                />
                <br />
                <TextField
                  id="standard-basic"
                  type="file"
                  fullWidth="true"
                  style={{ marginTop: "10px", marginBottom: "10px" }}
                  onChange={(e) => {
                    setFile(e.target.files[0]);
                    setFilename(e.target.files[0].name);
                  }}
                />
                <br />
                <TextField
                  id="standard-basic"
                  label="  الرسالة"
                  type="text"
                  fullWidth="true"
                  style={{ marginTop: "10px", marginBottom: "10px" }}
                  multiline="true"
                  onChange={(e) => setDescription(e.target.value)}
                />
                <br />

                <Button
                  size="lg"
                  style={{ marginTop: "10px" }}
                  onClick={sendReclamation}
                >
                  ارسال
                </Button>
              </Form>
            </Card>
            <Card2>
              <I src={u}></I>
            </Card2>
          </Head>
        </Container>
      </Body>
    </div>
  );
}
const I = styled.img`
  height: 70vh;
  width: 100%;
  margin-top: 20px;
  display: block;
  justify-content: center;
  border-radius: 0px 70px 70px 0px;
`;
const Body = styled.body`
  background: url(${bg}) no-repeat center fixed;
  background-size: cover;
`;
const Icon = styled.div`
  color: #fff;
  justify-content: left;
  align-items: left;
`;

const Head = styled.div`
  flex: 1;
  display: flex;
  padding: 5.8%;
  justify-content: center;
`;
const Button = styled.button`
  background-color: #05a0ac;
  width: 100px;
  height: 30px;
  text-color: #fff;
  border-radius: 20px;
  border: none;
  font-size: 15px;
`;
const Form = styled.div`
  width: 80%;
`;
const Card = styled.div`
  height: 80vh;
  width: 45%;
  text-align: center;
  border-radius: 70px 0px 0px 70px;
  padding: 2px;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Card2 = styled.div`
  height: 80vh;
  width: 45%;
  text-align: center;
  margin-left: 20px;
  background-color: #fff;
  display: block;
  align-items: center;
  justify-content: center;
`;
