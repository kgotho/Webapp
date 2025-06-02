import React from "react";

const CustomBtn = (props) => {
  return (
    <div className="pt-2">
      <a href={props.link}>
        <button
          type="button"
          className="btn custom-btn"
          style={{
            backgroundColor: "#318295	",
            color: "#fff",
            border: "none",
          }}
        >
          {props.btnname}
        </button>
      </a>
    </div>
  );
};

export default CustomBtn;
