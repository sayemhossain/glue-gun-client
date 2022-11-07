import { useEffect, useState } from "react";

const useToolDetails = ({ toolId }) => {
  const [tool, setTool] = useState([]);
  useEffect(() => {
    fetch(`https://immense-/demo/waters-78864.herokuapp.com/tools/${toolId}`)
      .then((res) => res.json())
      .then((data) => setTool(data));
  }, [tool]);
  return [tool];
};
export default useToolDetails;
