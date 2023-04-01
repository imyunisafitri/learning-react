import { useLocation } from "react-router-dom";

const Breadcumbs = () => {
  const location = useLocation();

  console.log(location);
  return (
    <div className="breadcumbs">
      <h1>Breadcumbs</h1>
    </div>
  );
};

export default Breadcumbs;
