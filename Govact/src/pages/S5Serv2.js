import React from 'react'
import Container from "@material-ui/core/Container";
import styled from 'styled-components'
import bg from "../assets/bg2.png";
import svg from "../assets/f.svg";
import HomeIcon from '@material-ui/icons/Home';
import { Link } from 'react-router-dom';
export default function S5Serv2() {
    return (
        <>
            <Body>
                <Container>
                    <Link to="/"><Icon><HomeIcon fontSize="large" /></Icon></Link>
                    <Head>
                        <Card>
                            <Form><Cardsvg src={svg} /><br /><br />
                            <label>  الإسم و اللقب  </label>
                                <br />
                                <input  name="username" type="text" style={{ textAlign: "right" }}></input>
                                <br />
                                
                                <label>رقم بطاقة التعريف</label>
                                <br />
                                <input name="cin" type="number" style={{ textAlign: "right" }}></input>
                                <br />
                                <label> العنوان </label>
                                <br />
                                <input  name="address" type="text" style={{ textAlign: "right" }}></input>
                                <br />
                                <label>  الهاتف</label>
                                <br />
                                <input  name="phone" type="number" style={{ textAlign: "right" }}></input>
                                <br />
                                <label>  إسم الوثيقة</label>
                                <br />
                                <input  name="file" type="text" style={{ textAlign: "right" }}></input>
                                <br />                                <br />

                                
                                <Button>التسجيل</Button>
                            </Form>
                        </Card>
                    </Head>
                </Container></Body>
        </>
    )
}
const Body = styled.div`
background:url(${bg}) no-repeat ;
background-size: cover;
height:100vh;
`
const Icon = styled.div`
color:#2F2E41;
justify-content:left;
align-items:left;
`
const Head = styled.div`
flex:1;
display:flex;
padding:5.8%;
justify-content:center;
`;
const Button = styled.button`
background-color:#05A0AC;
width:60px;
height:30px;
text-color:#fff;
border-radius:20px;
border:none;
font-size:15px;
`
const Form = styled.form`
`
const Card = styled.div`
height:100%;
width:40%;
text-align:center;
  border-radius: 70px; 
  padding: 2px ;
  background-color : #fff;
  display: flex;
  align-items: center;
  justify-content:center
`
const Cardsvg = styled.img`
margin:10px;
width:50px;
height:50px;
`