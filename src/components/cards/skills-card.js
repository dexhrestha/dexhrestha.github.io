
import React from 'react';
import { HoverEffect } from '../ui/card-hover-effect';


const SkillsGrid = ({ skills }) => {
  return (
    <HoverEffect items={skills} />
  );
};


export default SkillsGrid;
