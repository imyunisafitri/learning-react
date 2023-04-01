import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="error">
      <h1>404</h1>
      <p>Page not found</p>
      <Link to="/">Go back to the homepage</Link>
    </div>
  );
};

export default NotFound;
