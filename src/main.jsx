import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./Components/Home";
import Study from "./Components/Study";
import About from "./Components/About"
import Login from "./Components/Login";
import WebDev from "./Components/Courses/WebDev.jsx";

const Flow = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Home />} />
      <Route path="study" element={<Study />} />
      <Route path="study/web-dev" element={<WebDev />} />
      <Route path="about" element={<About />} />
      <Route path="login" element={<Login />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={Flow} />
  </StrictMode>
);
