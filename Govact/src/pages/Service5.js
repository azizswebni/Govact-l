import React, { useState } from "react";
import headersvg from "../assets/k5.svg"
import Card from "../components/Card2"
import card1 from "../assets/ka1.svg"
import card2 from "../assets/ka2.svg"
import card3 from "../assets/ka3.svg"
import Navbar from "../components/Naavbar";
import Footer from "../components/Footer";
import Chatboot from "../components/Chatbot/Chatboot";
import styled from "styled-components";
import bg from "../assets/bg.png";
import chatbot from "../assets/chatbot.png";
import Container from "@material-ui/core/Container";
import { Link } from 'react-router-dom';

export default function Service5() {
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
                        <Titre>   خدمات على الخط </Titre>

                    </HeaderContent>
                </Header>
            </Container>
            <ChatBot src={chatbot} alt="Chatbot" onClick={OpenChatbot} />
            <Wrapper>
            <Link to="/S5Service3" style={{textDecoration:"none"}}><div ><Card titre="  مثال التهيئة العمرانية" svg={card3} /></div></Link>
            <Link to="/S5Service2" style={{textDecoration:"none"}}><div> <Card titre=" النفاذ إلى المعلومة " svg={card2} /></div></Link>
            <Link to="/S5Service1" style={{textDecoration:"none"}}><div ><Card titre="  متابعة رخص البناء" svg={card1} /></div></Link>
            </Wrapper>
            <ChatBot src={chatbot} alt="Chatbot" onClick={OpenChatbot} />
     
      {chat ? <Chatboot /> : <></>}
      <Footer />
        </>

    )
}
const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(12rem, 16rem));
  gap: 4rem;
  justify-content: center;
  margin:30px;
`
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