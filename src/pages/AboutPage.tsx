import React from "react";
import {NavLink} from 'react-router-dom';
import '../index.css';

export const AboutPage: React.FC = () => {
  return (
    <div className='container'>
      <h1>Info page</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem aperiam
        nostrum possimus dolor eaque, exercitationem tenetur, debitis,
        voluptatibus recusandae libero quos sint nesciunt quasi qui dolorum cum
        optio ratione doloremque!
      </p>
      <NavLink to='/' className='btn'>Previous page</NavLink>
    </div>
  );
};
