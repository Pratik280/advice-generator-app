import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Error from "./Error";
import Button from "./Button";

const url = "https://api.adviceslip.com/advice";

const Advice = () => {
  const [isLoading, setisLoading] = useState(true);
  const [isError, setisError] = useState(false);
  const [isData, setisData] = useState("No Data");

  const getData = () => {
    fetch(url)
      .then((resp) => {
        if (resp.status >= 200 && resp.status <= 299) {
          return resp.json();
        } else {
          setisLoading(false);
          setisError(true);
          throw new Error(resp.statusText);
        }
      })
      .then((data) => {
        const advice = data;
        setisData(advice);
        setisLoading(false);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getData();
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <Error />;
  }

  return (
    <>
      <p
        className="fs-6 text-neongreen fw-bolder text-uppercase"
        style={{ marginBottom: "0", letterSpacing: "2px" }}
      >
        Advice #{isData.slip.id || ""}
      </p>
      <p className="fs-2 text-lightcyan fw-bolder text-center my-3">
        "{isData.slip.advice}"
      </p>
      <svg
        width="295"
        height="16"
        xmlns="http://www.w3.org/2000/svg"
        className="my-3"
        style={{ minWidth: "250px" }}
      >
        <g fill="none" fillRule="evenodd">
          <path fill="#4F5D74" d="M0 8h122v1H0zM173 8h122v1H173z" />
          <g transform="translate(138)" fill="#CEE3E9">
            <rect width="6" height="16" rx="3" />
            <rect x="14" width="6" height="16" rx="3" />
          </g>
        </g>
      </svg>
      <Button getData={getData} />
    </>
  );
};

export default Advice;
