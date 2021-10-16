import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";

import Overview from "./widgets/Overview/Overview";
import MessageParser from "./MessageParser";
import ActionProviderDocs from "./ActionProvider";

const botName = "روبوت الدردشة";

const config = {
  botName: botName,
  lang: "no",
  customStyles: {
    botMessageBox: {
      backgroundColor: "#376B7E",
    },
    chatButton: {
      backgroundColor: "#F9A826",
    },
  },
  initialMessages: [
    createChatBotMessage(
      `مرحبًا ، أنا ${botName} هنا لمساعدتك في شرح طريقة عملي.`
    ),
    createChatBotMessage(
      "فيما يلي نظرة عامة سريعة على ما أحتاجه للعمل. اسألني عما تحتاجه لتوجيهك إلى الصفحة الصحيحة",
      {
        withAvatar: false,
        delay: 500,
        widget: "overview",
      }
    ),
  ],
  state: {
    gist: "",
  },
  customComponents: {},
  widgets: [
    {
      widgetName: "overview",
      widgetFunc: (props) => <Overview {...props} />,
      mapStateToProps: ["gist"],
    },
    {
      widgetName: "messageParser",
      widgetFunc: (props) => <MessageParser {...props} />,
      mapStateToProps: ["gist"],
    },
    {
      widgetName: "actionProviderDocs",
      widgetFunc: (props) => <ActionProviderDocs {...props} />,
      mapStateToProps: ["gist"],
    },
  ],
};

export default config;