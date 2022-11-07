import { useEffect, useState } from "react";

const useTools = () => {
  const [tools, setTools] = useState([]);

  useEffect(() => {
    fetch(`https://immense-/demo/waters-78864.herokuapp.com/tools`)
      .then((res) => res.json())
      .then((data) => setTools(data));
  }, [tools]);
  return [tools, setTools];
};
export default useTools;

// https://immense-/demo/waters-78864.herokuapp.com/
