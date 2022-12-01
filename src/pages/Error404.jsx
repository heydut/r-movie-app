// design
import "./Error404.css";

// libraries
import { WavyLink } from "react-wavy-transitions";

const Error404 = () => {
  return (
    <section className="">
      <div id="error-page">
        <div className="error-number">404</div>
        <div className="error-text">
          <h2>Nothing to see here</h2>
          <p>
            Page you are trying to open does not exist. You may have mistyped
            the address, or the page has been moved to another URL. If you think
            this is an error contact support.
          </p>
          <WavyLink direction="down" to="/" color="#2b2b2b">
            <div>Take me back to home page</div>
          </WavyLink>
        </div>
      </div>
    </section>
  );
};

export default Error404;
