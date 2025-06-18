// AboutMeText.jsx
import React from 'react';

function AboutMeText() {
  return (
    <div className='flex flex-col'>
      <h2 className='text-4xl text-cyan mb-8'>Expertise & Background</h2>
      
      <div className='space-y-6 text-white text-left'>
        <p>
          I am Simon Madeba, passionate about <span className='text-cyan'>Data Analysis Engineering</span> with a strong academic background in Mathematical Sciences and IT from Maseno University, where I'm currently pursuing my postgraduate studies.
        </p>
        
        <p>
          I apply my expertise in mathematics, statistics, data science, and programming to solve real-world problems.
        </p>
        
        <p>
          At <span className='font-bold'>ICIPE</span>, I conducted advanced geospatial research, built predictive models, and used deep learning to analyze disease vector spread.
        </p>
        
        <p>
          I work fluently with tools like <span className='text-cyan'>Python, R, SQL, Tableau, and Power BI</span> to transform complex data into clear, actionable insights.
        </p>
        
        <p>
          As a <span className='font-bold'>Test Engineer at Syncfusion</span>, I ensure software quality through manual and automated testing using Playwright, Postman, and debugging strategies.
        </p>

        <p>
          I thrive in dynamic, fast-paced environments where collaboration, innovation, and data-driven thinking lead to meaningful impact.
        </p>
      </div>
      
      <button className='border border-cyan rounded-full px-8 py-3 text-lg mt-12 hover:bg-cyan hover:text-black transition-all duration-300 w-fit'>
        My Projects
      </button>
    </div>
  );
}

export default AboutMeText;