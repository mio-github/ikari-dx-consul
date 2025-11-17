// src/components/Interviews.js
import React from 'react';
import { interviewPlan } from '../data/dummyData';

const Interviews = () => {
  return (
    <div>
      <h1>ヒアリング計画</h1>
      <div className="card">
        <h3>{interviewPlan.title}</h3>
        <p>{interviewPlan.purpose}</p>
      </div>
      <div className="card">
        <h3>主要な質問項目</h3>
        <div className="issue-list">
            {interviewPlan.questions.map((q, index) => (
                <div className="issue-item" key={index} style={{borderColor: '#2196f3'}}>
                    <div className="issue-category" style={{color: '#1976d2'}}>{q.category}</div>
                    <p>{q.text}</p>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Interviews;
