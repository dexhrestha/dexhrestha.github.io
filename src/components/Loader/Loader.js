import React from 'react';
import './Loader.css'; // Assuming you have a CSS file for styling

const Loader = ({ name }) => {
  return (
    <div className="center_loading">
      <h1 className='loader_text'>
        Hi, I am <span className={`about__name loading`} data-name={name}></span>.
      </h1>
    </div>
  );
};

export default Loader;
