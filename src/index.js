import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import styled from "styled-components";
const Global = styled.html`
  margin: 0px auto;
  padding: 0px auto;
`;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Global>
      <App />
    </Global>
  </React.StrictMode>
);
