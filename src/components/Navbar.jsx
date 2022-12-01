// design
import "./Navbar.css";

// libraries
import { WavyLink } from "react-wavy-transitions";
import { useContext } from "react";

// usecontext
import { Theme, User } from "../App";

//////////////////////////////////////////////////////////////

const Navbar = ({ logout }) => {
  // ** useContext coming from app.js with information about the user
  const context = useContext(User);

  // context.setThemeColor(true);
  // useEffect(() => {
  //   console.log(context.user);
  // }, [context.user]);

  return (
    <div className="nav">
      <nav className="navbar">
        <div className="navbar-logo">
          <WavyLink direction="down" to="/" color="#ffa263">
            <h2>iMovie</h2>
          </WavyLink>
        </div>
        <div className="navbar-links">
          {context.user ? (
            <div className="navbar-user-links">
              <WavyLink direction="up" to="/library" color="#ff6600">
                <div className="nav-btn-library">
                  <i className="fa-solid fa-link icon-library"></i>Library
                </div>
              </WavyLink>

              <WavyLink direction="down" to="/admin" color="#ff8635">
                <div className="nav-btn-profile">
                  <i className="fa-solid fa-user icon-user"></i> Profile
                </div>
              </WavyLink>
              <WavyLink direction="up" to="/" color="#ff8635">
                <div className="nav-btn-logout" onClick={() => logout(null)}>
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
