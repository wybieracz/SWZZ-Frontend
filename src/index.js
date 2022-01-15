import { StrictMode } from "react";
import ReactDOM from "react-dom";
import './index.css';
import App from "./App";
import { BrowserRouter} from 'react-router-dom';
import Background from "./Background";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <BrowserRouter>
        <Background />
        <App />
    </BrowserRouter>
  </StrictMode>,
  rootElement
);