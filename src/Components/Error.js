import React from "react";

const Error = () => {
  return (
    <div
      className="alert alert-danger mx-auto p-5 rounded-3 shadow d-flex flex-row align-items-center justify-content-center"
      style={{ width: "min(90%, 35rem", marginTop: "15rem" }}
      role="alert"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        className="feather feather-alert-circle me-2"
      >
        <circle cx="12" cy="12" r="10"></circle>
        <line x1="12" y1="8" x2="12" y2="12"></line>
        <line x1="12" y1="16" x2="12.01" y2="16"></line>
      </svg>
      <div className="fs-4">Oops... Something went wrong.</div>
    </div>
  );
};

export default Error;
