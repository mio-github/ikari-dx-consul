import React from 'react';
import { Target, TrendingUp, AlertCircle } from 'lucide-react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';

const KPIMonitor = () => {
  // DX成熟度スコア
  const maturityData = [
    { category: 'データ統合', current: 65, target: 90 },
    { category: '業務デジタル化', current: 45, target: 85 },
    { category: 'AI活用', current: 20, target: 75 },
    { category: 'セキュリティ', current: 80, target: 95 },
    { category: '人材育成', current: 50, target: 80 },
    { category: '組織体制', current: 60, target: 85 },
  ];

  // 月次KPI推移
  const monthlyKPI = [
    { month: '10月', completion: 0, efficiency: 0, satisfaction: 0 },
    { month: '11月', completion: 35, efficiency: 42, satisfaction: 85 },
    { month: '12月', completion: 65, efficiency: 68, satisfaction: 88 },
    { month: '1月', completion: 95, efficiency: 85, satisfaction: 90 },
  ];

  // 部門別DX進捗
  const departmentProgress = [
    { dept: '情報システムG', progress: 85, target: 90 },
    { dept: '営業推進部', progress: 60, target: 80 },
    { dept: '技術研究所', progress: 55, target: 75 },
    { dept: '業務管理室', progress: 70, target: 85 },
    { dept: '異物分析部', progress: 40, target: 70 },
    { dept: '食品医薬分析部', progress: 38, target: 70 },
  ];

  // ROI予測データ
  const roiData = [
    { year: '2026年', investment: 500, benefit: 300, roi: -200 },
    { year: '2027年', investment: 800, benefit: 850, roi: 50 },
    { year: '2028年', investment: 1200, benefit: 1600, roi: 400 },
    { year: '2029年', investment: 1000, benefit: 2200, roi: 1200 },
    { year: '2030年', investment: 800, benefit: 2800, roi: 2000 },
  ];

  const kpiCards = [
    {
      label: 'プロジェクト完遂率',
      current: 56,
      target: 100,
      unit: '%',
      status: 'on-track',
      trend: '+12%',
    },
    {
      label: '業務効率化達成度',
      current: 42,
      target: 85,
      unit: '%',
      status: 'on-track',
      trend: '+8%',
    },
    {
      label: 'ステークホルダー満足度',
      current: 85,
      target: 90,
      unit: '%',
      status: 'on-track',
      trend: '+5%',
    },
    {
      label: 'ドキュメント完成率',
      current: 65,
      target: 100,
      unit: '%',
      status: 'on-track',
      trend: '+25%',
    },
  ];

  return (
    <div>
      <div className="page-header">
        <h2>KPI監視ダッシュボード</h2>
        <p className="page-subtitle">主要業績指標とDX成熟度の可視化</p>
      </div>

      {/* KPIカード */}
      <div className="stats-grid">
        {kpiCards.map((kpi, idx) => (
          <div key={idx} className="stat-card primary">
            <div className="stat-label">{kpi.label}</div>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem' }}>
              <div className="stat-value">{kpi.current}{kpi.unit}</div>
              <span style={{ fontSize: '1rem', color: '#6b7280' }}>/ {kpi.target}{kpi.unit}</span>
            </div>
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: `${(kpi.current / kpi.target) * 100}%` }} />
            </div>
            <div className="stat-change positive">
              <TrendingUp size={16} />
              <span>{kpi.trend} vs 先月</span>
            </div>
          </div>
        ))}
      </div>

      {/* チャート */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))', gap: '1.5rem' }}>
        {/* DX成熟度レーダーチャート */}
        <div className="card">
          <div className="card-header">
            <h3 className="card-title">
              <Target size={20} />
              DX成熟度スコア
            </h3>
          </div>
          <ResponsiveContainer width="100%" height={350}>
            <RadarChart data={maturityData}>
              <PolarGrid />
              <PolarAngleAxis dataKey="category" />
              <PolarRadiusAxis angle={90} domain={[0, 100]} />
              <Radar name="現在" dataKey="current" stroke="#667eea" fill="#667eea" fillOpacity={0.6} />
              <Radar name="目標" dataKey="target" stroke="#10b981" fill="#10b981" fillOpacity={0.3} />
              <Legend />
              <Tooltip />
            </RadarChart>
          </ResponsiveContainer>
        </div>

        {/* 月次KPI推移 */}
        <div className="card">
          <div className="card-header">
            <h3 className="card-title">月次KPI推移</h3>
          </div>
          <ResponsiveContainer width="100%" height={350}>
            <LineChart data={monthlyKPI}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis domain={[0, 100]} />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="completion" stroke="#667eea" name="完遂率" strokeWidth={2} />
              <Line type="monotone" dataKey="efficiency" stroke="#10b981" name="効率化" strokeWidth={2} />
              <Line type="monotone" dataKey="satisfaction" stroke="#f59e0b" name="満足度" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* 部門別DX進捗 */}
        <div className="card">
          <div className="card-header">
            <h3 className="card-title">部門別DX進捗状況</h3>
          </div>
          <ResponsiveContainer width="100%" height={350}>
            <BarChart data={departmentProgress} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" domain={[0, 100]} />
              <YAxis dataKey="dept" type="category" width={150} />
              <Tooltip />
              <Legend />
              <Bar dataKey="progress" fill="#667eea" name="進捗" />
              <Bar dataKey="target" fill="#e5e7eb" name="目標" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* ROI予測 */}
        <div className="card">
          <div className="card-header">
            <h3 className="card-title">投資対効果（ROI）予測</h3>
          </div>
          <ResponsiveContainer width="100%" height={350}>
            <BarChart data={roiData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="year" />
              <YAxis label={{ value: '万円', angle: -90, position: 'insideLeft' }} />
              <Tooltip />
              <Legend />
              <Bar dataKey="investment" fill="#ef4444" name="投資額" />
              <Bar dataKey="benefit" fill="#10b981" name="効果額" />
              <Bar dataKey="roi" fill="#667eea" name="純利益" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* KPI詳細テーブル */}
      <div className="card">
        <div className="card-header">
          <h3 className="card-title">KPI詳細一覧</h3>
        </div>
        <div className="table-container">
          <table className="data-table">
            <thead>
              <tr>
                <th>KPI項目</th>
                <th>測定方法</th>
                <th>現在値</th>
                <th>目標値</th>
                <th>達成率</th>
                <th>ステータス</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>データ統合基盤構築</td>
                <td>API連携数 / 全システム数</td>
                <td>4 / 7</td>
                <td>7 / 7</td>
                <td>57%</td>
                <td><span className="badge info">進行中</span></td>
              </tr>
              <tr>
                <td>業務効率化（工数削減）</td>
                <td>自動化された工数 / 総工数</td>
                <td>150h / 月</td>
                <td>300h / 月</td>
                <td>50%</td>
                <td><span className="badge info">進行中</span></td>
              </tr>
              <tr>
                <td>経営ダッシュボード稼働</td>
                <td>リアルタイムKPI数</td>
                <td>設計中</td>
                <td>12項目</td>
                <td>20%</td>
                <td><span className="badge warning">計画中</span></td>
              </tr>
              <tr>
                <td>DX推進組織設置</td>
                <td>専任メンバー数</td>
                <td>0名</td>
                <td>5名</td>
                <td>0%</td>
                <td><span className="badge warning">未着手</span></td>
              </tr>
              <tr>
                <td>全社員デジタル研修</td>
                <td>受講率</td>
                <td>0%</td>
                <td>100%</td>
                <td>0%</td>
                <td><span className="badge warning">未着手</span></td>
              </tr>
              <tr>
                <td>AI活用開始</td>
                <td>AI活用業務数</td>
                <td>0件</td>
                <td>3件</td>
                <td>0%</td>
                <td><span className="badge">2028年予定</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* アラート */}
      <div className="card" style={{ borderLeft: '4px solid #f59e0b' }}>
        <div className="card-header">
          <h3 className="card-title">
            <AlertCircle size={20} style={{ color: '#f59e0b' }} />
            KPIアラート
          </h3>
        </div>
        <div>
          <div style={{ padding: '1rem', borderBottom: '1px solid #e5e7eb' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
              <span className="badge warning">注意</span>
              <span style={{ fontWeight: 600 }}>部門別進捗のバラツキ</span>
            </div>
            <p style={{ fontSize: '0.875rem', color: '#6b7280' }}>
              異物分析部、食品医薬分析部の進捗が目標に対して遅れています。ヒアリング強化を推奨します。
            </p>
          </div>
          <div style={{ padding: '1rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
              <span className="badge info">情報</span>
              <span style={{ fontWeight: 600 }}>ROI達成予測</span>
            </div>
            <p style={{ fontSize: '0.875rem', color: '#6b7280' }}>
              投資回収は2027年度に黒字化の見込み。計画通りに推移しています。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KPIMonitor;
