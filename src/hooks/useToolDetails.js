import { useEffect, useState } from "react";

const useToolDetails = ({ toolId }) => {
  const [tool, setTool] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/tools/${toolId}`)
      .then((res) => res.json())
      .then((data) => setTool(data));
  }, [tool]);
  return [tool];
};
export default useToolDetails;
