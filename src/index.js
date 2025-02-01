import { StrictMode } from "react";
import ReactDOM from "react-dom/client"; // Note the change here
import { Provider } from "react-redux";

import App from "./App";
import "./bootstrap.min.css";
import store from "./redux/store";

// Use ReactDOM.createRoot for React 18
const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

// Render the App with Provider and StrictMode
root.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
