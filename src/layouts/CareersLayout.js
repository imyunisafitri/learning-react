import { Outlet } from "react-router-dom";

const CareersLayout = () => {
  return (
    <div className="careers-layout">
      <h1>Careers</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium explicabo
        tenetur assumenda inventore optio beatae commodi molestiae dolores, quis nesciunt nulla.
        Suscipit similique soluta natus ea minima debitis magni.
      </p>

      <Outlet />
    </div>
  );
};

export default CareersLayout;
