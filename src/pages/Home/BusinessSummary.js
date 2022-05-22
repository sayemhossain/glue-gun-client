import React, { useEffect, useState } from "react";
import Summary from "./Summary";

const BusinessSummary = () => {
  const [summarys, setSummarys] = useState([]);

  useEffect(() => {
    fetch("counterData.json")
      .then((res) => res.json())
      .then((data) => setSummarys(data));
  }, []);
  return (
    <div className="my-10 px-10">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5 summary-container">
        {summarys.map((summary) => (
          <Summary key={summary.id} summary={summary}></Summary>
        ))}
      </div>
    </div>
  );
};

export default BusinessSummary;
