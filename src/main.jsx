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
import ProtectedRoute from "./Components/ProtectedRoute";
import Home from "./Components/Home";
import Study from "./Components/Study";
import About from "./Components/About"
import Login from "./Components/Login";
import WebDev from "./Components/Courses/WebDev.jsx";

const Flow = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="study" element={<ProtectedRoute><Study /></ProtectedRoute>} />
      <Route path="study/web-dev" element={<ProtectedRoute><WebDev /></ProtectedRoute>} />
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
