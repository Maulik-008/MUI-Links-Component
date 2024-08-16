import React from "react";
import ReactDOM from "react-dom";
import MuiButtons from "../../src";
import * as urls from "./urls"; // Import all URLs as an object

const Demo = () => {
  const tasks = [
    {
      name: "Claims",
      icon: "fa-file-text",
      envUrlKey: "REACT_APP_CLAIMS_URL",
      bgColorCode: "#074cbc",
    },
    {
      name: "Financial",
      icon: "fa-usd",
      envUrlKey: "REACT_APP_FIN_URL",
      bgColorCode: "#077266",
    },
    {
      name: "Provider",
      icon: "fa-users",
      envUrlKey: "REACT_APP_WP_URL",
      bgColorCode: "#2d4967",
    },
  ];

  const handleButtonClick = (envUrlLink, event) => {
    console.log(`Button clicked with Link: ${envUrlLink}`, event);
  };

  return (
    <>
      <MuiButtons tasks={tasks} urls={urls} onClick={handleButtonClick} />
    </>
  );
};

ReactDOM.render(<Demo />, document.getElementById("app"));
