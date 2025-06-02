import React from "react";

function DetailCard(props) {
  return (
    <>
      <div className="detail-box">
        <i className={props.icon}></i>
        <h5 className="text-color pt-2">{props.title}</h5>
        <ul className="navbar-nav">
          <li className="nav-item">{props.content_line1}</li>
          <li className="nav-item">{props.content_line2}</li>
          <li className="nav-item">{props.content_line3}</li>
          <li className="nav-item">{props.content_line4}</li>
          <li className="nav-item">{props.content_line5}</li>
        </ul>
      </div>
    </>
  );
}

export default DetailCard;
