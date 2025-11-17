import React from 'react';
import { TrendingUp, TrendingDown, CheckCircle, AlertCircle } from 'lucide-react';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const Dashboard = () => {
  // プロジェクト進捗データ
  const progressData = [
    { phase: '事前準備', progress: 100, status: 'completed' },
    { phase: 'PoC開始', progress: 85, status: 'in_progress' },
    { phase: '中間成果', progress: 40, status: 'pending' },
    { phase: '最終成果', progress: 0, status: 'pending' },
  ];

  // 課題ステータス
  const issueData = [
    { name: '最優先', value: 3, color: '#ef4444' },
    { name: '高', value: 3, color: '#f59e0b' },
    { name: '中', value: 2, color: '#10b981' },
  ];

  // 工数推移データ
  const workloadData = [
    { month: '11月', planned: 40, actual: 35 },
    { month: '12月', planned: 50, actual: 48 },
    { month: '1月', planned: 45, actual: 0 },
  ];

  // 成果物完成状況
  const deliverableData = [
    { category: '図表', total: 2, completed: 2 },
    { category: 'Excel', total: 2, completed: 2 },
    { category: 'レポート', total: 5, completed: 3 },
    { category: 'その他', total: 3, completed: 1 },
  ];

  return (
    <div>
      <div className="page-header">
        <h2>プロジェクトダッシュボード</h2>
        <p className="page-subtitle">イカリ消毒様 DXコンサルティングPoC - 全体進捗状況</p>
      </div>

      {/* 主要指標 */}
      <div className="stats-grid">
        <div className="stat-card primary">
          <div className="stat-label">全体進捗率</div>
          <div className="stat-value">56%</div>
          <div className="stat-change positive">
            <TrendingUp size={16} />
            <span>順調に進行中</span>
          </div>
        </div>

        <div className="stat-card success">
          <div className="stat-label">完了タスク</div>
          <div className="stat-value">12/26</div>
          <div className="stat-change positive">
            <CheckCircle size={16} />
            <span>46% 完了</span>
          </div>
        </div>

        <div className="stat-card warning">
          <div className="stat-label">未解決課題</div>
          <div className="stat-value">8件</div>
          <div className="stat-change">
            <AlertCircle size={16} />
            <span>対応中 3件</span>
          </div>
        </div>

        <div className="stat-card danger">
          <div className="stat-label">リスク項目</div>
          <div className="stat-value">5件</div>
          <div className="stat-change negative">
            <TrendingDown size={16} />
            <span>高リスク 2件</span>
          </div>
        </div>
      </div>

      {/* チャート群 */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))', gap: '1.5rem' }}>
        {/* フェーズ別進捗 */}
        <div className="card">
          <div className="card-header">
            <h3 className="card-title">フェーズ別進捗状況</h3>
          </div>
          <div>
            {progressData.map((phase, index) => (
              <div key={index} style={{ marginBottom: '1.5rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                  <span style={{ fontSize: '0.875rem', fontWeight: 600 }}>{phase.phase}</span>
                  <span style={{ fontSize: '0.875rem', color: '#6b7280' }}>{phase.progress}%</span>
                </div>
                <div className="progress-bar">
                  <div
                    className="progress-fill"
                    style={{
                      width: `${phase.progress}%`,
                      background: phase.status === 'completed' ? '#10b981' :
                                 phase.status === 'in_progress' ? 'linear-gradient(90deg, #667eea 0%, #764ba2 100%)' :
                                 '#e5e7eb'
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 課題優先度分布 */}
        <div className="card">
          <div className="card-header">
            <h3 className="card-title">課題優先度分布</h3>
          </div>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={issueData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, value }) => `${name}: ${value}件`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {issueData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* 工数推移 */}
        <div className="card">
          <div className="card-header">
            <h3 className="card-title">工数推移（計画vs実績）</h3>
          </div>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={workloadData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis label={{ value: '工数（時間）', angle: -90, position: 'insideLeft' }} />
              <Tooltip />
              <Legend />
              <Bar dataKey="planned" fill="#8b5cf6" name="計画" />
              <Bar dataKey="actual" fill="#667eea" name="実績" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* 成果物完成状況 */}
        <div className="card">
          <div className="card-header">
            <h3 className="card-title">成果物完成状況</h3>
          </div>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={deliverableData} layout="horizontal">
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" />
              <YAxis dataKey="category" type="category" />
              <Tooltip />
              <Legend />
              <Bar dataKey="completed" fill="#10b981" name="完成" stackId="a" />
              <Bar dataKey={data => data.total - data.completed} fill="#e5e7eb" name="未完成" stackId="a" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* 最近のアクティビティ */}
      <div className="card">
        <div className="card-header">
          <h3 className="card-title">最近のアクティビティ</h3>
        </div>
        <div className="table-container">
          <table className="data-table">
            <thead>
              <tr>
                <th>日付</th>
                <th>カテゴリ</th>
                <th>内容</th>
                <th>ステータス</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>2025-11-16</td>
                <td>ドキュメント</td>
                <td>技術要件定義書 作成完了</td>
                <td><span className="badge success">完了</span></td>
              </tr>
              <tr>
                <td>2025-11-16</td>
                <td>ドキュメント</td>
                <td>DX成功事例集 作成完了</td>
                <td><span className="badge success">完了</span></td>
              </tr>
              <tr>
                <td>2025-11-16</td>
                <td>ドキュメント</td>
                <td>業界動向・競合分析レポート 作成完了</td>
                <td><span className="badge success">完了</span></td>
              </tr>
              <tr>
                <td>2025-11-15</td>
                <td>図表</td>
                <td>システム構成図（SVG）作成完了</td>
                <td><span className="badge success">完了</span></td>
              </tr>
              <tr>
                <td>2025-11-15</td>
                <td>図表</td>
                <td>組織構造図（SVG）作成完了</td>
                <td><span className="badge success">完了</span></td>
              </tr>
              <tr>
                <td>2025-11-15</td>
                <td>Excel</td>
                <td>DXロードマップ・課題管理表 作成完了</td>
                <td><span className="badge success">完了</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
