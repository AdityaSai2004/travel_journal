import React from "react";
import { FaGlobeAfrica } from "react-icons/fa";
export default function header() {
  return (
    <div className="header">
      <FaGlobeAfrica size={40} className="icon" />
      <h1 className="title">My Travel Journal</h1>
    </div>
  );
}
