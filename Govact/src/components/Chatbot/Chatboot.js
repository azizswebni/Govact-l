import React from "react";
import Chatbot from "react-chatbot-kit";
import ActionProvider from "./ActionProvider";
import config from './config';
import MessageParser from "./MessageParser";
import styled from 'styled-components'
function Chatboot() {
  return (
    <Bot>
      <Chatbot
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
      />
    </Bot>
  );
}

export default Chatboot;
const Bot = styled.div`
 position:fixed;
 bottom:0;
 right:15vh;
 
`