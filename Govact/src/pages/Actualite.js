import React, { useState } from "react";
import Navbar from "../components/Naavbar";
import styled from "styled-components";
import Footer from "../components/Footer";
import Slider from "../components/Slider";
import Card from "../components/CardsActualite";
import ImageCard from "../components/ImageCard";
import Chatboot from "../components/Chatbot/Chatboot";
import chatbot from "../assets/chatbot.png";
import { Container, Row, Col } from "react-bootstrap";
import I1 from "../assets/9.png";
import I2 from "../assets/2.png";
import I3 from "../assets/1.png";
import I4 from "../assets/8.png";
import I5 from "../assets/5.png";
import I6 from "../assets/6.png";
import I7 from "../assets/7.png";
import { useEffect } from "react";
import axios from "axios";
export default function Actualite() {
  const [chat, setChat] = useState(false);
  const [acts, setActs] = useState([]);
  useEffect(() => {
    axios
      .get("/api/actuals")
      .then((res) => {
        console.log(res.data);
        setActs(res.data);
      })
      .catch((err) => window.location.reload());
  }, []);
  const OpenChatbot = () => {
    setChat((prev) => !prev);
  };
  return (
    <>
      <Navbar />
      <Slider />
      <br />
      <br />
      <H>المستجدات</H>
      <br />
      <br />
      <Cont>
        {acts.map((act, id) => {
          return (
            <div key={id}>
              <ImageCard title={act.title} text={act.message} img={act.name} />
            </div>
          );
        })}
      </Cont>

      <ChatBot src={chatbot} alt="Chatbot" onClick={OpenChatbot} />
      <Footer />
      {chat ? <Chatboot /> : <></>}
    </>
  );
}
const Cont = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const H = styled.h1`
  text-align: center;
  color: #f9a826;
`;

const ChatBot = styled.img`
  height: 15vh;
  width: 15vh;
  position: fixed;
  right: 0;
  bottom: 0;
  z-index: 9999;
`;
