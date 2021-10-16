import React, { useState } from "react";
import Navbar from "../components/Naavbar";
import styled from "styled-components";
import bg from "../assets/bg.png";
import chatbot from "../assets/chatbot.png";
import headersvg from "../assets/headersvg.svg";
import Container from "@material-ui/core/Container";
import Footer from "../components/Footer";

import Chatboot from "../components/Chatbot/Chatboot";

export default function Home() {
  const [chat, setChat] = useState(true);
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
            <Titre>بلدية حمام الانف</Titre>
            <Description>
              منصة البلدية الرقمية هي منصة الكترونية أسست من أجل تسهيل التواصل
              الرقميبين البلدية و المواطنين عبر مجموعة من الخدمات الإدارية و
              التشاركية
            </Description>
          </HeaderContent>
        </Header>
      </Container>
      <ChatBot src={chatbot} alt="Chatbot" onClick={OpenChatbot} />
     
      {chat ? <Chatboot /> : <></>}
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
const Description = styled.p`
  color: white;
  font-size: 2vw;
  display: flex;
  text-align: right;
  widht: 100%;
`;
const ChatBot = styled.img`
  height: 15vh;
  width: 15vh;
  position: fixed;
  right: 0;
  bottom: 0;
  cursor:pointer
`;
const Img = styled.img`
  height: 500px;
  width: 50%;
`;
