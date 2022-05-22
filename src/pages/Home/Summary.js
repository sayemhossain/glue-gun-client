import React, { useEffect, useState } from "react";

function Summary({ summary }) {
  const [count, setCount] = useState("0");
  const { number, duration, img, text } = summary;

  useEffect(() => {
    let start = 0;
    const end = parseInt(number.substring(0, 3));
    if (start === end) return;

    let totalMilSecDur = parseInt(duration);
    let incrementTime = (totalMilSecDur / end) * 1000;

    let timer = setInterval(() => {
      start += 1;
      setCount(String(start) + number.substring(3));
      if (start === end) clearInterval(timer);
    }, incrementTime);
  }, [number, duration]);

  return (
    <div>
      <div class="text-center py-5">
        <img className="w-20 mx-auto" src={img} alt="" />
        <p className="font-bold mt-1 text-red-400 text-xl">{count}</p>
        <p className="font-bold uppercase" style={{ fontFamily: "Macondo" }}>
          {text}
        </p>
      </div>
    </div>
  );
}

export default Summary;
