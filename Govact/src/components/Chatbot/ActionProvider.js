class ActionProvider {
    // The action provider receives createChatBotMessage which you can use to define the bots response, and 
    // the setState function that allows for manipulating the bots internal state.
    constructor(createChatBotMessage, setStateFunc, createClientMessage) {
      this.createChatBotMessage = createChatBotMessage;
      this.setState = setStateFunc;
      this.createClientMessage = createClientMessage
    }
  
    handleMessageParser = () => {
      const messages = this.createChatBotMessage(
        "The message parser controls how the bot reads input and decides which action to invoke.",
        { widget: "messageParser", withAvatar: true }
      );
  
      this.addMessageToBotState(messages);
    };
    GotoBALADIYA(){ window.location = '/Baladiya'}
    GotoKHADAMAT(){ window.location = '/Khadamet'}
    GotoMOSTAJAT(){}
    GotoTAWASOL(){ window.location = '/Contact'}
    handleDefault = () => {
      const message = this.createChatBotMessage("How can I help?", {
        withAvatar: true,
      });
  
      this.addMessageToBotState(message)
    };
  
    addMessageToBotState = (messages) => {
      if (Array.isArray(messages)) {
        this.setState((state) => ({
          ...state,
          messages: [...state.messages, ...messages],
        }));
      } else {
        this.setState((state) => ({
          ...state,
          messages: [...state.messages, messages],
        }));
      }
    };
  }
  
  export default ActionProvider;