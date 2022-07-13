import React from "react";
import { FaGlobeAfrica } from "react-icons/fa";
export default function header() {
  return (
    <div class="header">
      <FaGlobeAfrica size={40} class="icon" />
      <h1 class="title">My Travel Journal</h1>
    </div>
  );
}
