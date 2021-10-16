import React, { useState } from "react";
import headersvg from "../assets/k4.svg";
import Navbar from "../components/Naavbar";
import styled from "styled-components";
import bg from "../assets/bg.png";
import Footer from "../components/Footer";
import Chatboot from "../components/Chatbot/Chatboot";
import chatbot from "../assets/chatbot.png";
import Container from "@material-ui/core/Container";
import { Collapse } from "react-bootstrap";
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import S1 from "../assets/s4_1.png";
import S2 from "../assets/s4_2.png";
import S3 from "../assets/s4_3.png";
import S4 from "../assets/s4_4.png";
export default function Service4() {
  const [chat, setChat] = useState(false);
  const OpenChatbot = () => {
    setChat((prev) => !prev);
  };
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);

  return (
    <>
      <Navbar />
      <Container maxWidth="false" disableGutters="false">
        <Header className="Header">
          <Img src={headersvg} alt="svg" />
          <HeaderContent>
            <Titre> خدمات الشؤون الاقتصادية</Titre>
          </HeaderContent>
        </Header>
      </Container><br/><br/>
      <ChatBot src={chatbot} alt="Chatbot" onClick={OpenChatbot} />
      {chat ? <Chatboot /> : <></>}

      <Card><Tl>  التراخيص الاقتصادية<ArrowDropDownIcon onClick={() => setOpen(!open)}
      aria-controls="example-collapse-text"
      aria-expanded={open} /></Tl>
     
      </Card>
    <Collapse in={open}>
      <div style={{textAlign:"center"}}>
       <I src={S1}  />
      </div>
    </Collapse><br/>

    <Card><Tl>  رخصة تنظيم تظاهرة<ArrowDropDownIcon onClick={() => setOpen1(!open1)}
      aria-controls="example-collapse-text"
      aria-expanded={open1} /></Tl>
     
      </Card>
    <Collapse in={open1}>
      <div style={{textAlign:"center"}}>
       <I src={S2}  />
      </div>
    </Collapse><br/>

    <Card><Tl>  رخصة الاشغال الوقتي للملك العمومي <ArrowDropDownIcon onClick={() => setOpen2(!open2)}
      aria-controls="example-collapse-text"
      aria-expanded={open2} /></Tl>

    
      </Card>
    <Collapse in={open2}>
      <div style={{textAlign:"center"}}>
       <I src={S3}  />
      </div>
    </Collapse><br/>

    <Card><Tl>  رخصة تركيز علامات اشهارية<ArrowDropDownIcon onClick={() => setOpen3(!open3)}
      aria-controls="example-collapse-text"
      aria-expanded={open3} /></Tl>
     
      </Card>
    <Collapse in={open3}>
      <div style={{textAlign:"center"}}>
       <I src={S4}  />
      </div>
    </Collapse>

      <Footer />
    </>
  );
}
const Header = styled.div`
  flex: 1;
  padding: 10%;
  background: url(${bg}) no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
const HeaderContent = styled.div`
  width:100%
  display: flex;
  flex-direction: column;
  align-items: flex-end;
 
`;
const Titre = styled.p`
  width: 100%;
  color: white;
  font-size: 5vw;
  text-align: center;
`;

const ChatBot = styled.img`
  height: 15vh;
  width: 15vh;
  position: fixed;
  right: 0;
  bottom: 0;
`;
const Img = styled.img`
  height: 500px;
  width: 50%;
`;
const I=styled.img`
width:45vw;
`
const Tl = styled.p`
font-size:130%;
color:#F9A826;
`
const Card = styled.div`
height:8vh;
width:70%;
margin-left:25%;
  border-radius: 5px; 
  padding: 2px 16px;
  background-color : #EBF5FB;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content:right
  text-decoration:none;

  `
