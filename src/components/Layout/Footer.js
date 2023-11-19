import React from "react";

const Footer = () => {
  return (
    <div
      className="bg-dark text-light p-2 text-center"
      style={{ position: "absolute", bottom: 0, width: "100%", zIndex: 1 }}
    >
      <h6 className="mb-2">Expense Management App</h6>
      <p className="text-muted" style={{ fontSize: "0.8em" }}>
        © 2023 All rights reserved
      </p>
    </div>
  );
};

export default Footer;
