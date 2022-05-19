import React from "react";
import ReactDOM from "react-dom/client";
import App from "App";
import reportWebVitals from "reportWebVitals";
import Provider from "components/common/Provider";
import { queryClient } from "states/api/client";
import "./styles/style.css";

const root = document.getElementById("root");
if (root) {
  ReactDOM.createRoot(root).render(
    <React.StrictMode>
      <Provider queryClient={queryClient}>
        <App />
      </Provider>
    </React.StrictMode>
  );
} else {
  console.log("루트 요소를 찾지 못했습니다.");
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
