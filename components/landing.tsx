"use client";
import React from "react";

const Landing: React.FC = () => {
  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "0px",
        margin: "0px",
      }}
    >
      <video
        autoPlay
        loop
        playsInline
        muted
        style={{
          position: "absolute",
          height: "100%",
          width: "100%",
          objectFit: "cover",
        }}
      >
        <source src="/videos/masthead-bg.mp4" type="video/mp4; codecs=hvc1" />
        <source src="/videos/masthead-bg.webm" type="video/webm; codecs=vp9" />
      </video>
      <div
        style={{
          zIndex: "1",
          display: "flex",
          width: "100%",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            color: "white",
            fontSize: "4em",
            background: "-webkit-linear-gradient(white, grey)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Wowdoa Synmage
        </h1>
        <h2
          style={{
            width: "500px",
            textShadow: "5px 5px 10px rgba(0, 0, 0, 0.5)",
          }}
        >
          <strong>
            Empower Early Disease Detection with Synthetic Medical Image Data –
            Privacy, Amplified Data, Robust Models.
          </strong>
        </h2>
      </div>
    </div>
  );
};

export default Landing;
