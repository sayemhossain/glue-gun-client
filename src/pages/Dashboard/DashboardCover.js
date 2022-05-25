import React from "react";

const DashboardCover = () => {
  return (
    <div
      class="hero min-h-screen"
      style={{
        backgroundImage:
          "url(https://www.wikihow.com/images/thumb/5/52/Use-a-Glue-Gun-Step-13-Version-2.jpg/aid722589-v4-1200px-Use-a-Glue-Gun-Step-13-Version-2.jpg)",
      }}
    >
      <div class="hero-overlay bg-opacity-95"></div>
      <div class="hero-content text-center text-neutral-content">
        <div class="max-w-md" style={{ fontFamily: "Macondo" }}>
          <h1 class="mb-5 text-5xl font-bold">Glue Gun the pro manufacturer</h1>
          <p class="mb-5">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DashboardCover;
