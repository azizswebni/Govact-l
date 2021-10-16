import Container from "@material-ui/core/Container";
import React, { useState } from "react";
import styled from "styled-components";
import bg from "../assets/bg2.png";
import svg from "../assets/f.svg";
import HomeIcon from "@material-ui/icons/Home";
import { Link } from "react-router-dom";
import axios from "axios";
export default function S5Service1() {
  const [cin, setCin] = useState();
  const [num, setNum] = useState();
  const [accept, setAccept] = useState(false);
  const [res, setRes] = useState();
  const Acceept =()=>{
      if(res.length>0){
          return <h1>Accepted</h1>
      }else{
          return <h1>still in progress</h1>
      }
  }
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
            {!accept ? (
              <Card>
                <Form>
                  <Cardsvg src={svg} />
                  <br />
                  <br />
                  <label>رقم بطاقة التعريف</label>
                  <br />
                  <br />
                  <input
                    name="cin"
                    type="number"
                    style={{ textAlign: "right" }}
                    onChange={(e) => setCin(e.target.value)}
                  ></input>
                  <br />
                  <br />
                  <label>رقم الرخصة</label>
                  <br />
                  <br />
                  <input
                    name="pwd"
                    type="password"
                    style={{ textAlign: "right" }}
                    onChange={(e) => setNum(e.target.value)}
                  ></input>
                  <br />
                  <br />
                  <Button
                    onClick={() =>
                      axios
                        .post("/api/Demande/citoyen", { CIN: cin, NumDemande: num })
                        .then((res) => {
                          setRes(res.data);
                          setAccept(true);
                        }).catch(err=>{
                            alert(err)
                            window.location.reload()
                        })
                    }
                  >
                    متابعة
                  </Button>
                </Form>
              </Card>
            ) : (
              <Acceept />
            )}
          </Head>
        </Container>
      </Body>
    </>
  );
}
const Body = styled.div`
  background: url(${bg}) no-repeat;
  background-size: cover;
  height: 100vh;
`;
const Icon = styled.div`
  color: #2f2e41;
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
  width: 60px;
  height: 30px;
  text-color: #fff;
  border-radius: 20px;
  border: none;
  font-size: 15px;
`;
const Form = styled.div``;
const Card = styled.div`
  height: 400px;
  width: 300px;
  text-align: center;
  border-radius: 70px;
  padding: 2px;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Cardsvg = styled.img`
  margin: 10px;
  width: 50px;
  height: 50px;
`;
