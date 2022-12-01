// design
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";

// libraries

import { createContext, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { WavyContainer } from "react-wavy-transitions";

// components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// pages
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import Acess from "./pages/Acess";
import Library from "./pages/Library";
import Error404 from "./pages/Error404";

// usecontext
export const Theme = createContext(true);
export const User = createContext();

//////////////////////////////////////////////////////////////

function App() {
  // ** AOS = library with effects on the cards
  AOS.init();

  // ** functions + useState to bring my user from the "access" page to the "app.js"
  const [user, setUser] = useState();

  // ** function for the navbar, when the person clicks in the logout btn it defines my "user" as ("") = no user
  const logout = (data) => {
    setUser(data);
  };

  console.log(user, "MY USERRR***");

  return (
    <BrowserRouter>
      <Theme.Provider value={true}>
        <User.Provider value={{ user, setUser }}>
          <WavyContainer />
          <Navbar logout={logout} />
          <Routes>
            <Route index element={<Home />} />
            <Route path="admin" element={<Admin user={user} />} />
            <Route path="acess" element={<Acess />} />
            <Route path="library" element={<Library />} />
            <Route path="*" element={<Error404 />} />
          </Routes>
          <Footer />
        </User.Provider>
      </Theme.Provider>
    </BrowserRouter>
  );
}

export default App;
