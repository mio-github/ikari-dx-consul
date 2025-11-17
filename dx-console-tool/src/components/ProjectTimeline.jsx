import React from 'react';
import { Calendar, CheckCircle, Circle, Clock } from 'lucide-react';

const ProjectTimeline = () => {
  const milestones = [
    {
      phase: '事前準備',
      period: '〜11月上旬',
      status: 'completed',
      tasks: [
        { name: 'NDA締結', status: 'completed', date: '2025-10-25' },
        { name: '現状資料受領', status: 'completed', date: '2025-11-01' },
        { name: 'ヒアリング計画策定', status: 'completed', date: '2025-11-05' },
      ],
      deliverables: ['機密保持契約書', 'ヒアリング計画表']
    },
    {
      phase: 'PoC開始',
      period: '11月中旬〜下旬',
      status: 'in_progress',
      tasks: [
        { name: 'キックオフミーティング', status: 'completed', date: '2025-11-11' },
        { name: '現状ヒアリング（第1回）', status: 'completed', date: '2025-11-13' },
        { name: '現状ヒアリング（第2回）', status: 'in_progress', date: '2025-11-18' },
        { name: '業務フロー可視化', status: 'in_progress', date: '2025-11-25' },
        { name: '課題リスト作成', status: 'pending', date: '2025-11-28' },
      ],
      deliverables: ['現行業務フロー図', '課題リスト']
    },
    {
      phase: '中間成果',
      period: '12月',
      status: 'pending',
      tasks: [
        { name: 'As-Isマップ作成', status: 'pending', date: '2025-12-10' },
        { name: 'システム連携図作成', status: 'pending', date: '2025-12-15' },
        { name: '中間報告ミーティング', status: 'pending', date: '2025-12-20' },
        { name: 'DX推進中間レポート提出', status: 'pending', date: '2025-12-27' },
      ],
      deliverables: ['DX推進中間レポート', 'As-Isマップ', 'システム連携図']
    },
    {
      phase: '最終成果',
      period: '1月',
      status: 'pending',
      tasks: [
        { name: 'To-Beマップ作成', status: 'pending', date: '2026-01-10' },
        { name: '優先度別マイルストーン作成', status: 'pending', date: '2026-01-15' },
        { name: 'DXロードマップ（5ヵ年）作成', status: 'pending', date: '2026-01-20' },
        { name: '最終報告ミーティング', status: 'pending', date: '2026-01-24' },
        { name: '全成果物納品', status: 'pending', date: '2026-01-31' },
      ],
      deliverables: ['DXロードマップ（5ヵ年）', 'To-Beマップ', '全成果物一式']
    },
  ];

  const getStatusIcon = (status) => {
    switch (status) {
      case 'completed':
        return <CheckCircle size={20} style={{ color: '#10b981' }} />;
      case 'in_progress':
        return <Clock size={20} style={{ color: '#667eea' }} />;
      default:
        return <Circle size={20} style={{ color: '#d1d5db' }} />;
    }
  };

  const getStatusBadge = (status) => {
    switch (status) {
      case 'completed':
        return <span className="badge success">完了</span>;
      case 'in_progress':
        return <span className="badge info">進行中</span>;
      default:
        return <span className="badge">未着手</span>;
    }
  };

  return (
    <div>
      <div className="page-header">
        <h2>プロジェクト進行管理</h2>
        <p className="page-subtitle">マイルストーンとタスクの進捗状況</p>
      </div>

      <div className="card" style={{ marginBottom: '1.5rem' }}>
        <div className="card-header">
          <h3 className="card-title">
            <Calendar size={20} />
            プロジェクトタイムライン
          </h3>
        </div>
        <div style={{ padding: '1rem 0' }}>
          {milestones.map((milestone, idx) => (
            <div key={idx} style={{ position: 'relative', paddingLeft: '3rem', paddingBottom: '2rem' }}>
              {/* Timeline line */}
              {idx < milestones.length - 1 && (
                <div style={{
                  position: 'absolute',
                  left: '1.5rem',
                  top: '2rem',
                  bottom: '-0.5rem',
                  width: '2px',
                  background: milestone.status === 'completed' ? '#10b981' : '#e5e7eb'
                }} />
              )}

              {/* Timeline dot */}
              <div style={{
                position: 'absolute',
                left: '0.75rem',
                top: '0.5rem',
                width: '1.5rem',
                height: '1.5rem',
                borderRadius: '50%',
                background: milestone.status === 'completed' ? '#10b981' :
                           milestone.status === 'in_progress' ? '#667eea' : '#e5e7eb',
                border: '3px solid white',
                boxShadow: '0 0 0 2px currentColor'
              }} />

              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.5rem' }}>
                  <h4 style={{ fontSize: '1.125rem', fontWeight: 600, margin: 0 }}>{milestone.phase}</h4>
                  {getStatusBadge(milestone.status)}
                </div>
                <p style={{ fontSize: '0.875rem', color: '#6b7280', marginBottom: '1rem' }}>
                  期間: {milestone.period}
                </p>

                {/* Tasks */}
                <div style={{ background: '#f9fafb', borderRadius: '8px', padding: '1rem' }}>
                  <h5 style={{ fontSize: '0.875rem', fontWeight: 600, marginBottom: '0.75rem', color: '#374151' }}>
                    タスク一覧
                  </h5>
                  {milestone.tasks.map((task, taskIdx) => (
                    <div key={taskIdx} style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.75rem',
                      padding: '0.5rem 0',
                      borderBottom: taskIdx < milestone.tasks.length - 1 ? '1px solid #e5e7eb' : 'none'
                    }}>
                      {getStatusIcon(task.status)}
                      <span style={{
                        flex: 1,
                        fontSize: '0.875rem',
                        color: task.status === 'completed' ? '#6b7280' : '#1f2937',
                        textDecoration: task.status === 'completed' ? 'line-through' : 'none'
                      }}>
                        {task.name}
                      </span>
                      <span style={{ fontSize: '0.75rem', color: '#9ca3af' }}>{task.date}</span>
                    </div>
                  ))}
                </div>

                {/* Deliverables */}
                <div style={{ marginTop: '1rem' }}>
                  <h5 style={{ fontSize: '0.875rem', fontWeight: 600, marginBottom: '0.5rem', color: '#374151' }}>
                    成果物
                  </h5>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                    {milestone.deliverables.map((deliverable, delIdx) => (
                      <span key={delIdx} style={{
                        background: '#ede9fe',
                        color: '#5b21b6',
                        padding: '0.25rem 0.75rem',
                        borderRadius: '4px',
                        fontSize: '0.75rem',
                        fontWeight: 500
                      }}>
                        {deliverable}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 次回予定 */}
      <div className="card">
        <div className="card-header">
          <h3 className="card-title">次回予定</h3>
        </div>
        <div className="table-container">
          <table className="data-table">
            <thead>
              <tr>
                <th>日付</th>
                <th>予定</th>
                <th>参加者</th>
                <th>場所</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>2025-11-18</td>
                <td>現状ヒアリング（第2回）</td>
                <td>情報システムG、技術研究所</td>
                <td>オンライン（Zoom）</td>
              </tr>
              <tr>
                <td>2025-11-25</td>
                <td>業務フロー確認ミーティング</td>
                <td>営業推進部、業務管理室</td>
                <td>イカリ消毒本社</td>
              </tr>
              <tr>
                <td>2025-12-20</td>
                <td>中間報告ミーティング</td>
                <td>経営企画室、DX推進担当役員</td>
                <td>オンライン（Zoom）</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProjectTimeline;
