import React, { useEffect } from "react";
import "./Continue.css";

const Continue = () => {
  useEffect(() => {
    const modal = document.getElementById("login-modal");
    const btn = document.getElementById("facebook-login-btn");
    const span = document.getElementsByClassName("close")[0];

    btn.onclick = () => {
      modal.style.display = "block";
    };

    span.onclick = () => {
      modal.style.display = "none";
    };

    window.onclick = (event) => {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    };
  });
  return (
    <>
      
    </>
  );
};

export default Continue;
