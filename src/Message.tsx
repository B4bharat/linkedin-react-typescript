import React from "react";

interface UserMessage {
  name: string;
  message: string;
}

const Message = (props: UserMessage): any => {
  return (
    <div>
      {props.name}, {props.message}
    </div>
  );
};

export default Message;
