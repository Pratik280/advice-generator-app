import React from "react";

const Loading = () => {
  return (
    <>
      <div className="fs-2 text-white fw-bolder mt-5 text-center">
        <div class="spinner-border" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
        <p>Please Wait ...</p>
      </div>
    </>
  );
};

export default Loading;
