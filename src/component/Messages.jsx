import React from "react";
import Message from "./Message";
import { useSelector } from "react-redux";
import usegetMessages from "../hooks/usegetMessages";

const Messages = () => {
  usegetMessages();
  const { messages } = useSelector((store) => store.message);
  return (
    <div className=" px-4 flex-1 overflow-auto">
      {(messages?.length > 0)?(messages?.map((message, index) => (
        <Message key={index} message={message} />
      ))):(<div className="text-center text-2xl">No Messages</div>)}
    </div>
  );
};

export default Messages;
