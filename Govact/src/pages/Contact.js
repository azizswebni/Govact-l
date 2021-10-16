import React from "react";
import bg from "../assets/bbg.png";
import styled from "styled-components";
import Container from "@material-ui/core/Container";
import HomeIcon from "@material-ui/icons/Home";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import { Link } from "react-router-dom";
import TextField from "@material-ui/core/TextField";

export default function Contact() {
  return (
    <>
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
                  label="  الاسم و اللقب"
                  type="text"
                  fullWidth="true"
                  style={{ marginTop: "10px", marginBottom: "10px" }}
                />
                <br />
                <TextField
                  id="standard-basic"
                  label="  الموضوع"
                  type="email"
                  fullWidth="true"
                  style={{ marginTop: "10px", marginBottom: "10px" }}
                />
                <br />
                <TextField
                  id="standard-basic"
                  type="file"
                  fullWidth="true"
                  style={{ marginTop: "10px", marginBottom: "10px" }}
                />
                <br />
                <TextField
                  id="standard-basic"
                  label="  الرسالة"
                  type="text"
                  fullWidth="true"
                  style={{ marginTop: "10px", marginBottom: "10px" }}
                  multiline="true"
                />
                <br />

                <Button
                  size="lg"
                  variant="outline-info"
                  style={{ marginTop: "10px" }}
                >
                  ارسال
                </Button>
              </Form>
            </Card>
            <Card2>
              <h6>
                {" "}
                الهاتف الجوال : 007 218 79 <br /> <br />
                الهاتف القار : 110 218 79 <br />
                <br />
                contact@commune-hammamlif.gov.tn : البريد الالكتروني <br />
                <br />
                العنوان : بلدية حمام الأنف شارع الجمهورية
              </h6>
              <br />
              <br />
              <Div>
                <Link to="#">
                  <Icon1>
                    <LinkedInIcon fontSize="large" />
                  </Icon1>
                </Link>
                <Link to="#">
                  <Icon2>
                    <FacebookIcon fontSize="large" />
                  </Icon2>
                </Link>
                <Link to="#">
                  <Icon3>
                    <TwitterIcon fontSize="large" />
                  </Icon3>
                </Link>
              </Div>
            </Card2>
          </Head>
        </Container>
      </Body>
    </>
  );
}
const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Body = styled.body`
  background: url(${bg}) no-repeat center fixed;
  background-size: cover;
  heigth: 100vh;
`;
const Icon = styled.div`
  color: #fff;
  justify-content: left;
  align-items: left;
`;
const Icon2 = styled.div`
  color: #4267b2;
  display: inline-block;
  float: left;
`;
const Icon1 = styled.div`
  color: #2867b2;
  display: inline-block;
  float: left;
`;
const Icon3 = styled.div`
  color: #1da1f2;
  display: inline-block;
  float: left;
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
const Form = styled.form``;
const Card = styled.div`
  height: 80vh;
  width: 45%;
  text-align: center;
  border-radius: 70px;
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
