import { useState } from "react";
import { Navigate } from "react-router-dom";


const About = () => {
  const [user, setUser] = useState('yuni')

  if(!user){
    return <Navigate to="/" replace={true} />
  }
  return (
    <div className="about">
      <h2>About Us</h2>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum reiciendis nostrum quasi,
        iure obcaecati sequi minus voluptas ipsa magni totam dolor porro laudantium a inventore
        voluptates dolore, nulla ratione! Cumque?
      </p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, corrupti!</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, aliquid dolorem eum eveniet sit debitis corporis sed reiciendis ea quidem corrupti, aliquam soluta possimus alias impedit aspernatur optio fugiat laborum porro dolores, mollitia inventore deleniti enim delectus. Dolorem, ducimus commodi!</p>

      <button onClick={() => setUser(null)}>Log Out</button>
    </div>
  );
};

export default About;
