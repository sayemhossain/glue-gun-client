import { useEffect, useState } from "react";

const useToolDetails = ({ toolId }) => {
  const [tool, setTool] = useState([]);
  useEffect(() => {
    fetch(`https://intense-cove-25675.herokuapp.com/tools/${toolId}`)
      .then((res) => res.json())
      .then((data) => setTool(data));
  }, []);
  return [tool];
};
export default useToolDetails;
