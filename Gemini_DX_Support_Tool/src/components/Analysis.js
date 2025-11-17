// src/components/Analysis.js
import React from 'react';
import { issues } from '../data/dummyData';

const Analysis = () => {
  return (
    <div>
      <h1>現状分析 (As-Is)</h1>
      <div className="card">
        <h3>課題リスト（仮説）</h3>
        <p>提供資料の分析と、一般的なDXの課題から抽出された仮説です。今後のヒアリングで検証します。</p>
        <div className="issue-list">
          {issues.map((issue, index) => (
            <div className="issue-item" key={index}>
              <div className="issue-category">{issue.category}</div>
              <p>{issue.text}</p>
              <small>根拠: {issue.source}</small>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Analysis;
