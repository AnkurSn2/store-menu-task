import React from 'react';
import './AboutMe.css';
import Card from '@mui/material/Card';

const AboutMe = () => {
  return (
    <div className='about-me'>
      <h1>About Me</h1>
      <Card sx={{ maxWidth: 500, marginLeft: '400px', fontSize: 18, textAlign: 'justify', backgroundColor: 'lavender'}}>
        <p sx={{ lineHeight: '1.5' }}>
          Author: Ankur Maurya <br/>
          Hello! I'm a React developer with 3+ years of experience Software IT domain. My technical skill involve Javascript, React, Node, MySQL and some managing devOps tech as well.
          I'm creating this Meal App in React using MealAPI and styling it using CSS and some third party library.
        </p>
      </Card>
    </div>
  );
};

export default AboutMe;
