
import Footer from "./Components/Footer/Footer";

import Navigation from "./Components/Navigation/Navigation";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Navigation />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
