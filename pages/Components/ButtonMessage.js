import React from "react";

const ButtonMessage = () => {
  return (
    <div>
      <button
        className="home-button"
        onClick={() => {
          alert("Button clicked");
          console.log("Button clicked");
        }}
      >
        Click here
      </button>
    </div>
  );
};

export default ButtonMessage;
