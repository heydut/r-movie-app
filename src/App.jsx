import "./App.css";
import { createContext, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { WavyContainer } from "react-wavy-transitions";

import Library from "./pages/Library";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Acess from "./pages/Acess";
import Admin from "./pages/Admin";
import Error404 from "./pages/Error404";
import AOS from "aos";
import "aos/dist/aos.css";
export const Theme = createContext(true);

function App() {
  AOS.init();
  const [user, setUser] = useState();

  const getUser = (user) => {
    setUser(user);
  };

  const logout = (data) => {
    setUser(data);
  };

  return (
    <BrowserRouter>
      <Theme.Provider value={{ user, setUser }}>
        <WavyContainer />
        <Navbar logout={logout} />
        <Routes>
          <Route index element={<Home />} />
          <Route path="admin" element={<Admin user={user} />} />
          <Route path="acess" element={<Acess getUser={getUser} />} />
          <Route path="library" element={<Library />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
        <Footer />
      </Theme.Provider>
    </BrowserRouter>
  );
}

export default App;
