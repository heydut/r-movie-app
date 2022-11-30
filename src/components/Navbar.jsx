import "./Navbar.css";
import { WavyLink } from "react-wavy-transitions";
import { Theme } from "../App";
import { useContext, useEffect } from "react";

const Navbar = ({ logout }) => {
  const context = useContext(Theme);
  // context.setThemeColor(true);
  // useEffect(() => {
  //   console.log(context.user);
  // }, [context.user]);

  return (
    <div className="nav">
      <nav className="navbar">
        <div className="navbar-logo">
          {/* <button
            onClick={() => context.setThemeColor(!context.themeColor)}
            style={{
              backgroundColor: `${context.themeColor ? "#fff" : "#ff6600"}`,
            }}
          >
            Oieeeeeeee
          </button> */}
          <WavyLink direction="up" to="/" color="#ff6600">
            <h2>iMovie</h2>
          </WavyLink>
        </div>
        <div className="navbar-links">
          {/* <WavyLink duration={1000} to="/" color="#ff8635">
            <div className="nav-btn-h">Home</div>
          </WavyLink> */}
          {context.user ? (
            <div className="navbar-user-links">
              <WavyLink duration={1000} to="/library" color="#ff6600">
                <div className="nav-btn-library">
                  <i class="fa-solid fa-link icon-library"></i>Library
                </div>
              </WavyLink>

              <WavyLink direction="down" to="/admin" color="#ff6600">
                <div className="nav-btn-profile">
                  <i className="fa-solid fa-user icon-user"></i> Profile
                </div>
              </WavyLink>
              <WavyLink duration={1000} to="/" color="#ff8635">
                <div className="nav-btn-logout" onClick={() => logout("")}>
                  <i className="fa-solid fa-right-from-bracket"></i>
                </div>
              </WavyLink>
            </div>
          ) : (
            <WavyLink direction="up" to="/acess" color="#ff6600">
              <div className="nav-btn-join flex-center">Join Us</div>
            </WavyLink>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
