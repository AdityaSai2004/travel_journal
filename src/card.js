import React from "react";
import { IoIosPin } from "react-icons/io";
import aus from "./pictures/aus.jpg";
import jap from "./pictures/jap.jpg";
import nor from "./pictures/nor.jpg";

const images = {
  aus,
  jap,
  nor,
};

export default function card(props) {
  return (
    <div className="card">
      <div className="pic-div">
        <img src={images[props.id]} className="Pic" />
      </div>
      <div className="others">
        <div className="card-header">
          <IoIosPin color="#F55A5A" />
          <h3 className="location">{props.location}</h3>
          <a href={props.map}>
            <p>View on Google Maps</p>
          </a>
        </div>
        <div className="card-title">
          <h1 className="pic-details">{props.pic_details}</h1>
          <br />
          <p className="when">{props.when}</p>
        </div>
        <div className="card-body">
          <p>{props.write_up}</p>
        </div>
      </div>
    </div>
  );
}
