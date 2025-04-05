import React, { useEffect, useRef } from "react";

const Modal = ({ children }) => {
  const elRef = useRef(null);

  if (!elRef.current) {
    elRef.current = document.createElement("div");
    document.body.appendChild(elRef.current);
  }

  useEffect(() => {}, []);
};

export default Modal;
