import React from "react";

function TodaysDate() {
  return <h2 className="date"> {new Date().toLocaleDateString()} </h2>;
}

export default TodaysDate;
