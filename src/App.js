import React from "react";
import Header from "./app/components/Header";
import Card from "./app/components/Card";

import data from "./app/components/data";
import Footer from "./app/components/Footer";

function App() {
  return (
    <>
      <Header />
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {data.map((item, index) => {
          return (
            <Card img={item.img} name={item.name} content={item.content} />
          );
        })}
      </div>
      <Footer />
    </>
  );
}

export default App;
