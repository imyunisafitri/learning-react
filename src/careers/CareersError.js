import { useRouteError, Link } from "react-router-dom";

const CareersError = () => {
  const error = useRouteError();
  return (
    <div className="error">
      <h2>Error</h2>
      <p>{error.message}</p>
      <Link to="/">Go back to the homepage</Link>
    </div>
  );
};

export default CareersError;
