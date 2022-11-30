import "./Error404.css";

const Error404 = () => {
  return (
    <section className="container">
      <div id="error-page">
        <div className="error-number">404</div>
        <div className="error-text">
          <h2>Nothing to see here</h2>
          <p>
            Page you are trying to open does not exist. You may have mistyped
            the address, or the page has been moved to another URL. If you think
            this is an error contact support.
          </p>
          <button>Take me back to home page</button>
        </div>
      </div>
    </section>
  );
};

export default Error404;
