// src/components/Documents.js
import React from 'react';
import { documents } from '../data/dummyData';

const Documents = () => {
  return (
    <div>
      <h1>ドキュメント一覧</h1>
      <div className="card document-list">
        <ul>
          {documents.map((doc, index) => (
            <li key={index}>
              <div className="document-title">{doc.name}</div>
              <div className="document-summary"><strong>種別:</strong> {doc.type}</div>
              <div className="document-summary"><strong>AIサマリー:</strong> {doc.summary}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Documents;
