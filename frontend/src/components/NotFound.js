import React from "react";
import lost from "../images/Lost_sign.jpg";

const NotFound = () => {
  return (
    <div>
      <h1>404 Not Found</h1>
      <img src={lost} alt="You seem lost..." />
    </div>
  );
};
export default NotFound;
