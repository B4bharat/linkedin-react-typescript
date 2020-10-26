import React from "react";

const Message = (prop: { message: string }): any => {
  return <div>{prop.message}</div>;
};

export default Message;
