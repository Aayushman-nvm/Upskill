import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { Outlet } from "react-router-dom";
import { SpeedInsights } from '@vercel/speed-insights/react';

function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      <SpeedInsights />
    </>
  );
}

export default App;
