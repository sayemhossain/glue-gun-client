import { useEffect, useState } from "react";

const useSummary = () => {
  const [summary, setSummary] = useState([]);
  useEffect(() => {
    fetch("counterData.json")
      .then((res) => res.json())
      .then((data) => setSummary(data));
  }, []);
  return [summary];
};
export default useSummary;
