import React from "react";

function Header() {
  return (
    <header style={styles}>
      <h2>Five Cards</h2>
    </header>
  );
}

export default Header;

const styles = {
  width: "100%",
  display: "flex",
  justifyContent: "center",
  backgroundColor: "#f6f6f6",
  boxShadow: "0 4px 5px rgba(40,120,100,0.4)",
  color: "#6e6d6d",
};
