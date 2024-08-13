import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { CORE_CONCEPTS } from "./data";

const entryPoint = document.getElementById("root");
ReactDOM.createRoot(entryPoint).render(<App />);
