import React, { useState } from "react";
import Navbar from "../components/Naavbar";
import styled from "styled-components";
import bg from "../assets/bg.png";
import chatbot from "../assets/chatbot.png";
import Container from "@material-ui/core/Container";
import Footer from '../components/Footer'
import Chatboot from "../components/Chatbot/Chatboot";
import Card from "../components/Card2"
import card1 from "../assets/k1.svg"
import card2 from "../assets/k2.svg"
import card3 from "../assets/k3.svg"
import card4 from "../assets/k4.svg"
import card5 from "../assets/k5.svg"
import headersvg from "../assets/header.svg";
import { Link } from 'react-router-dom';

export default function Khadamet() {
  const [chat, setChat] = useState(false);
  const OpenChatbot = () => {
    setChat((prev) => !prev);
  };
  return (
    <>
      <Navbar />
      <Container maxWidth="false" disableGutters="false">
        <Header className="Header">
          <Img src={headersvg} alt="svg" />
          <HeaderContent>
            <Titre>دليل الخدمات</Titre>

          </HeaderContent>
        </Header>
      </Container>

      <Wrapper>
        <Link to="/Service3" style={{textDecoration:"none"}}><div><Card titre=" الجباية المحلية" svg={card3} /></div></Link>
        <Link to="/Service2" style={{textDecoration:"none"}}><div><Card titre="الخدمات الادارية " svg={card2} /></div></Link>
        <Link to="/Service1" style={{textDecoration:"none"}}><div><Card titre=" الحالة المدنية" svg={card1} /></div></Link>
      </Wrapper>
      <Wrapper>
      <Link to="/Service5" style={{textDecoration:"none"}}><div><Card titre=" خدمات على الخط" svg={card5} /></div></Link>
      <Link to="/Service4" style={{textDecoration:"none"}}><div><Card titre=" الشؤون الاقتصادية" svg={card4} /></div></Link>
      </Wrapper>
      <ChatBot src={chatbot} alt="Chatbot" onClick={OpenChatbot} />
     
     {chat ? <Chatboot /> : <></>}
     <Footer />
    </>

  )
}
const Header = styled.div`
flex:1;
padding:10%;
background:url(${bg}) no-repeat;
background-size: cover;
display:flex;
flex-direction:row;
align-items:center;
justify-content:space-between;
`;
const HeaderContent = styled.div`
  width:100%
  display: flex;
  flex-direction: column;
  align-items: flex-end;
 
`;
const Titre = styled.p`
 width:100%;
  color: white;
  font-size:5vw;
  text-align:center;
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
  width:50%
`;
const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(12rem, 16rem));
  gap: 4rem;
  justify-content: center;
  margin:30px;
`