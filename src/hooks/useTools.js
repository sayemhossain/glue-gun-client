import { useEffect, useState } from "react";

const useTools = () => {
  const [tools, setTools] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/tools`)
      .then((res) => res.json())
      .then((data) => setTools(data));
  }, [tools]);
  return [tools, setTools];
};
export default useTools;

// http://localhost:5000/
