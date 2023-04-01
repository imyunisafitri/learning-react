import { useParams, useLoaderData } from "react-router-dom";

const CareersDetail = () => {
  const { id } = useParams();
  const career = useLoaderData();
  return (
    <div className="career-details">
      <h2>Careers Details for {career.title}</h2>
      <p>Starting Salary : {career.salary}</p>
      <p>Location : {career.location}</p>
      <div className="deatils">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum nostrum modi ullam
          voluptatibus veritatis ex nisi aspernatur inventore beatae, repellendus necessitatibus
          laboriosam voluptate vel voluptas?
        </p>
      </div>
    </div>
  );
};

export default CareersDetail;

//Loader function
// loader function
export const careersDetailsLoader = async ({ params }) => {
  const { id } = params;
  const res = await fetch("http://localhost:4000/careers/" + id);

  if (!res.ok) {
    throw Error("Could not find that career");
  }

  return res.json();
};
