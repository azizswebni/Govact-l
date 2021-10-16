import React, { useState,Component } from "react";
import headersvg from "../assets/k1.svg"
import Navbar from "../components/Naavbar";
import styled from "styled-components";
import bg from "../assets/bg.png";
import chatbot from "../assets/chatbot.png";
import Footer from "../components/Footer";
import Chatboot from "../components/Chatbot/Chatboot";
import Container from "@material-ui/core/Container";
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import S1 from "../assets/s1_1.png";
import S2 from "../assets/s1_2.png";
import S3 from "../assets/s1_3.png";
import S4 from "../assets/s1_4.png";
import S5 from "../assets/s1_5.png";
import S6 from "../assets/s1_6.png";
import Popup from "reactjs-popup";
export default function Service1(){
  const [chat, setChat] = useState(false);
  const OpenChatbot = () => {
    setChat((prev) => !prev);
  };
    return (
        <div>
            <Navbar />
            <Container maxWidth="false" disableGutters="false">
                <Header className="Header">
                    <Img src={headersvg} alt="svg" />
                    <HeaderContent>
                        <Titre>الحالة المدنية </Titre>

                    </HeaderContent>
                </Header>
            </Container>
      <br />
     
     <Card><Tl>ترسيم ولادة</Tl><T> إطلع على المزيد</T>
     <StyledPopup trigger={<ArrowDropDownIcon  />} position=" center">
    <I src={S1}/>
  </StyledPopup>
</Card><br/>
     <Card><Tl> مضمون ولادة</Tl>
     <T> إطلع على المزيد</T> 
     <StyledPopup trigger={<ArrowDropDownIcon  />} position=" center">
    <I src={S2}/>
  </StyledPopup>
</Card><br/>
     <Card><Tl> إبرام عقد زواج</Tl>
     <T> إطلع على المزيد</T>
     <StyledPopup trigger={<ArrowDropDownIcon  />} position=" center">
    <I src={S3}/>
  </StyledPopup></Card><br/>
     <Card><Tl> زواج مضمون</Tl>
     <T> إطلع على المزيد</T>
     <StyledPopup trigger={<ArrowDropDownIcon  />} position=" center">
    <I src={S4}/>
  </StyledPopup></Card><br/>
     <Card><Tl> استخراج الدفتر العائلي لأول مرة</Tl>
     <T> إطلع على المزيد</T> <StyledPopup trigger={<ArrowDropDownIcon  />} position=" center">
    <I src={S5}/>
  </StyledPopup></Card><br/>
     <Card><Tl> استخراج نظیر من الدفتر العائلي (في صورة الضیاع)</Tl>
     <T> إطلع على المزيد</T>
     <StyledPopup trigger={<ArrowDropDownIcon  />} position=" center">
    <I src={S6}/>
    
  </StyledPopup></Card><br/>

  <ChatBot src={chatbot} alt="Chatbot" onClick={OpenChatbot} />
     {chat ? <Chatboot /> : <></>}
     <Footer />
        </div>

    )
}
const I=styled.img`
width:45vw;
`
const StyledPopup = styled(Popup)`
  &-overlay {
    background: rgba(0, 0, 0, 0.5);
  }
  &-content {
    margin: auto;
    background: rgb(255, 255, 255);
    width: 50%;
    padding: 20px;  }
`;

const T=styled.p`
font-size:60%;
`
const Tl = styled.p`
font-size:130%;
color:#F9A826;
`
const Card = styled.div`
height:100px;
width:80%;
margin-left:10%;
  border-radius: 30px; 
  padding: 2px 16px;
  background-color : #EBF5FB;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content:right
  text-decoration:none;
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