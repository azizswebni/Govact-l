import React from "react";
import Options from "../Options/Options";

const GeneralOptions = (props) => {
  const options = [
    {
      name: "البلدية",
      handler: props.actionProvider.handleMessageParserDocs,
      id: 1,
    },
    {
      name: "خدمات",
      handler: props.actionProvider.handleConfigDocs,
      id: 2,
    },
    {
      name: "المستجدات",
      handler: props.actionProvider.handleActionProviderDocs,
      id: 3,
    },
    {
      name: "التواصل",
      handler: props.actionProvider.handleWidgetDocs,
      id: 5,
    },
  ];

  return <Options options={options} />;
};

export default GeneralOptions;