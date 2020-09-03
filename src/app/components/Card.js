import React from "react";

function Card({ img, name, content, link }) {
  return (
    <div
      style={{
        margin: "5% 5%",

        width: 300,
        height: 350,
        boxShadow: "0 4px 5px rgba(40,120,100,0.4)",
        borderRadius: 20,
        overflow: "hidden",
        backgroundColor: "#f6f6f6",
      }}
    >
      <img style={{ width: "100%", height: "180px" }} src={img} alt="death" />

      <div style={{ padding: 10 }}>
        <h3>{name}</h3>
        <p>{content}</p>

        <button style={{ width: "100%", padding: "5px 10px" }}>Get It</button>
      </div>
    </div>
  );
}

export default Card;
