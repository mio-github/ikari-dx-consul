// src/components/Roadmap.js
import React from 'react';
import { roadmap } from '../data/dummyData';

const Roadmap = () => {
  return (
    <div>
      <h1>DXロードマップ（案）</h1>
      <div className="card">
        <h3>2030年を見据えた段階的アプローチ</h3>
        <div className="roadmap-timeline">
          {roadmap.map((phase, index) => (
            <div className="timeline-item" key={index}>
              <div className="timeline-dot"></div>
              <div className="timeline-date">{phase.phase}</div>
              <div className="timeline-content">
                <ul>
                  {phase.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
