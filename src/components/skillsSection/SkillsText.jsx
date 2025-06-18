// SkillsText.jsx (enhanced)
import React from 'react';

function SkillsText() {
  return (
    <div className="bg-black/50 p-8 rounded-xl border border-lightblue mb-16">
      <h3 className="text-2xl text-cyan mb-6">Skills Overview</h3>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-4 text-white/80">
          <p>
            <span className="text-cyan">Data Analysis:</span> Python, RStudio, statistical modeling, and machine learning
          </p>
          <p>
            <span className="text-cyan">Geospatial:</span> QGIS, geospatial analysis, and mapping
          </p>
        </div>
        <div className="space-y-4 text-white/80">
          <p>
            <span className="text-cyan">Frontend:</span> React, JavaScript, HTML5, and Tailwind CSS
          </p>
          <p>
            <span className="text-cyan">Testing:</span> Automated testing and quality assurance
          </p>
        </div>
      </div>
    </div>
  );
}

export default SkillsText;