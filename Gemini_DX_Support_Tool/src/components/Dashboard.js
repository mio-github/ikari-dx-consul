// src/components/Dashboard.js
import React from 'react';
import { projectInfo, milestones } from '../data/dummyData';

const Dashboard = () => {
  return (
    <div>
      <h1>{projectInfo.name} - ダッシュボード</h1>
      
      <div className="grid-container">
        <div className="card">
          <h3>プロジェクト概要</h3>
          <p><strong>期間:</strong> {projectInfo.period}</p>
          <p><strong>現在のフェーズ:</strong> {projectInfo.phase}</p>
          <p><strong>全体進捗:</strong></p>
          <progress value={projectInfo.progress} max="100" style={{width: "100%"}}></progress>
          <p>{projectInfo.progress}%</p>
        </div>

        <div className="card">
          <h3>次のマイルストーン</h3>
          <p><strong>日付:</strong> {milestones.find(m => !m.completed)?.date}</p>
          <p><strong>内容:</strong> {milestones.find(m => !m.completed)?.event}</p>
        </div>
      </div>

      <div className="card">
        <h3>プロジェクトマイルストーン</h3>
        <div className="roadmap-timeline">
          {milestones.map((milestone, index) => (
            <div className="timeline-item" key={index}>
              <div className="timeline-dot" style={{borderColor: milestone.completed ? '#4caf50' : '#3f51b5'}}></div>
              <div className="timeline-date">{milestone.date}</div>
              <div className="timeline-content">
                <p style={{textDecoration: milestone.completed ? 'line-through' : 'none'}}>
                  {milestone.event}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
