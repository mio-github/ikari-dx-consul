import React from 'react';
import { AlertTriangle, Shield, TrendingDown } from 'lucide-react';

const RiskManagement = () => {
  const risks = [
    {
      id: 'R001',
      category: '技術',
      title: '既存システムとのAPI連携遅延',
      description: '総合経営管理システムのAPI仕様が未確定のため、連携開発に遅延リスク',
      impact: 'high',
      probability: 'medium',
      status: 'active',
      mitigation: 'ヒアリング段階で技術仕様を詳細確認。代替連携方式（ファイル連携）も検討',
      owner: '情報システムG',
      dueDate: '2025-12-15'
    },
    {
      id: 'R002',
      category: '組織',
      title: 'DX推進専任組織の未設置',
      description: '現状、DX推進の専任組織が明確でないため、意思決定・実行が遅延する可能性',
      impact: 'high',
      probability: 'high',
      status: 'active',
      mitigation: '2026年Q1にDX推進室設置を提案。それまでは経営企画室が暫定で推進',
      owner: '経営企画室',
      dueDate: '2026-03-31'
    },
    {
      id: 'R003',
      category: '予算',
      title: '投資対効果の不透明性',
      description: '初期投資が大きく、短期的なROIが見えにくいため、継続投資判断が困難',
      impact: 'medium',
      probability: 'medium',
      status: 'monitoring',
      mitigation: 'クイックウィン施策を優先実施し、早期の効果実感を獲得。段階的投資計画を提示',
      owner: '業務管理室',
      dueDate: '2025-12-27'
    },
    {
      id: 'R004',
      category: '人材',
      title: 'デジタル人材不足',
      description: 'DX推進に必要なITスキル・データ分析スキルを持つ人材が不足',
      impact: 'medium',
      probability: 'high',
      status: 'active',
      mitigation: '外部専門家の活用、社内人材の育成プログラム実施、段階的なスキル習得',
      owner: '人事部',
      dueDate: '2026-06-30'
    },
    {
      id: 'R005',
      category: 'セキュリティ',
      title: 'クラウド移行に伴うセキュリティリスク',
      description: 'データをクラウドに移行する際のセキュリティリスク、ISO27001認証への影響',
      impact: 'high',
      probability: 'low',
      status: 'mitigated',
      mitigation: 'ISO27001認証取得済みの強みを活かし、ゼロトラストモデルへ段階移行。クラウドベンダーのセキュリティ認証確認',
      owner: '情報システムG',
      dueDate: '2026-12-31'
    },
    {
      id: 'R006',
      category: '業務',
      title: '現場の抵抗・変革疲れ',
      description: '業務プロセス変更に対する現場の抵抗、既存業務への負荷増',
      impact: 'medium',
      probability: 'medium',
      status: 'monitoring',
      mitigation: '現場を巻き込んだ改善活動、丁寧なコミュニケーション、成功事例の共有',
      owner: 'DX推進室',
      dueDate: '継続'
    },
    {
      id: 'R007',
      category: '技術',
      title: '技術の陳腐化',
      description: '導入した技術が数年後に陳腐化し、再投資が必要になるリスク',
      impact: 'medium',
      probability: 'low',
      status: 'monitoring',
      mitigation: 'クラウドサービス活用により技術更新を容易に。柔軟なアーキテクチャ設計',
      owner: '情報システムG',
      dueDate: '継続'
    },
    {
      id: 'R008',
      category: '外部',
      title: 'ベンダーロックイン',
      description: '特定ベンダーに依存し、将来的な選択肢が制限されるリスク',
      impact: 'low',
      probability: 'medium',
      status: 'monitoring',
      mitigation: 'API Firstアプローチ、標準技術の採用、マルチベンダー戦略',
      owner: '情報システムG',
      dueDate: '継続'
    },
  ];

  const getImpactLabel = (impact) => {
    switch (impact) {
      case 'high':
        return <span className="badge danger">高</span>;
      case 'medium':
        return <span className="badge warning">中</span>;
      case 'low':
        return <span className="badge success">低</span>;
      default:
        return <span className="badge">不明</span>;
    }
  };

  const getProbabilityLabel = (prob) => {
    switch (prob) {
      case 'high':
        return <span className="badge danger">高</span>;
      case 'medium':
        return <span className="badge warning">中</span>;
      case 'low':
        return <span className="badge success">低</span>;
      default:
        return <span className="badge">不明</span>;
    }
  };

  const getStatusLabel = (status) => {
    switch (status) {
      case 'active':
        return <span className="badge danger">対応中</span>;
      case 'monitoring':
        return <span className="badge warning">監視中</span>;
      case 'mitigated':
        return <span className="badge success">軽減済み</span>;
      case 'closed':
        return <span className="badge">終了</span>;
      default:
        return <span className="badge">不明</span>;
    }
  };

  const getRiskScore = (impact, probability) => {
    const impactScore = { high: 3, medium: 2, low: 1 };
    const probScore = { high: 3, medium: 2, low: 1 };
    return impactScore[impact] * probScore[probability];
  };

  const riskMatrix = [
    { impact: 'high', probability: 'high', count: risks.filter(r => r.impact === 'high' && r.probability === 'high').length },
    { impact: 'high', probability: 'medium', count: risks.filter(r => r.impact === 'high' && r.probability === 'medium').length },
    { impact: 'high', probability: 'low', count: risks.filter(r => r.impact === 'high' && r.probability === 'low').length },
    { impact: 'medium', probability: 'high', count: risks.filter(r => r.impact === 'medium' && r.probability === 'high').length },
    { impact: 'medium', probability: 'medium', count: risks.filter(r => r.impact === 'medium' && r.probability === 'medium').length },
    { impact: 'medium', probability: 'low', count: risks.filter(r => r.impact === 'medium' && r.probability === 'low').length },
    { impact: 'low', probability: 'high', count: risks.filter(r => r.impact === 'low' && r.probability === 'high').length },
    { impact: 'low', probability: 'medium', count: risks.filter(r => r.impact === 'low' && r.probability === 'medium').length },
    { impact: 'low', probability: 'low', count: risks.filter(r => r.impact === 'low' && r.probability === 'low').length },
  ];

  const highRisks = risks.filter(r => getRiskScore(r.impact, r.probability) >= 6);
  const mediumRisks = risks.filter(r => getRiskScore(r.impact, r.probability) >= 4 && getRiskScore(r.impact, r.probability) < 6);
  const lowRisks = risks.filter(r => getRiskScore(r.impact, r.probability) < 4);

  return (
    <div>
      <div className="page-header">
        <h2>リスク管理</h2>
        <p className="page-subtitle">プロジェクトリスクの特定・評価・対策</p>
      </div>

      {/* サマリー */}
      <div className="stats-grid">
        <div className="stat-card danger">
          <div className="stat-label">高リスク</div>
          <div className="stat-value">{highRisks.length}</div>
          <div className="stat-change negative">
            <AlertTriangle size={16} />
            <span>優先対応必要</span>
          </div>
        </div>

        <div className="stat-card warning">
          <div className="stat-label">中リスク</div>
          <div className="stat-value">{mediumRisks.length}</div>
          <div className="stat-change">
            <TrendingDown size={16} />
            <span>継続監視</span>
          </div>
        </div>

        <div className="stat-card success">
          <div className="stat-label">低リスク</div>
          <div className="stat-value">{lowRisks.length}</div>
          <div className="stat-change positive">
            <Shield size={16} />
            <span>管理下</span>
          </div>
        </div>

        <div className="stat-card primary">
          <div className="stat-label">総リスク数</div>
          <div className="stat-value">{risks.length}</div>
          <div className="stat-change">
            <span>全8件登録</span>
          </div>
        </div>
      </div>

      {/* リスクマトリックス */}
      <div className="card">
        <div className="card-header">
          <h3 className="card-title">リスクマトリックス（影響度 × 発生確率）</h3>
        </div>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '600px' }}>
            <thead>
              <tr>
                <th style={{ border: '1px solid #e5e7eb', padding: '1rem', background: '#f9fafb', width: '100px' }}></th>
                <th style={{ border: '1px solid #e5e7eb', padding: '1rem', background: '#f9fafb' }}>発生確率: 低</th>
                <th style={{ border: '1px solid #e5e7eb', padding: '1rem', background: '#f9fafb' }}>発生確率: 中</th>
                <th style={{ border: '1px solid #e5e7eb', padding: '1rem', background: '#f9fafb' }}>発生確率: 高</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ border: '1px solid #e5e7eb', padding: '1rem', background: '#f9fafb', fontWeight: 600 }}>影響度: 高</td>
                <td style={{ border: '1px solid #e5e7eb', padding: '2rem', background: '#fef3c7', textAlign: 'center', fontSize: '1.5rem', fontWeight: 600 }}>
                  {riskMatrix.find(r => r.impact === 'high' && r.probability === 'low').count}
                </td>
                <td style={{ border: '1px solid #e5e7eb', padding: '2rem', background: '#fed7aa', textAlign: 'center', fontSize: '1.5rem', fontWeight: 600 }}>
                  {riskMatrix.find(r => r.impact === 'high' && r.probability === 'medium').count}
                </td>
                <td style={{ border: '1px solid #e5e7eb', padding: '2rem', background: '#fecaca', textAlign: 'center', fontSize: '1.5rem', fontWeight: 600 }}>
                  {riskMatrix.find(r => r.impact === 'high' && r.probability === 'high').count}
                </td>
              </tr>
              <tr>
                <td style={{ border: '1px solid #e5e7eb', padding: '1rem', background: '#f9fafb', fontWeight: 600 }}>影響度: 中</td>
                <td style={{ border: '1px solid #e5e7eb', padding: '2rem', background: '#d1fae5', textAlign: 'center', fontSize: '1.5rem', fontWeight: 600 }}>
                  {riskMatrix.find(r => r.impact === 'medium' && r.probability === 'low').count}
                </td>
                <td style={{ border: '1px solid #e5e7eb', padding: '2rem', background: '#fef3c7', textAlign: 'center', fontSize: '1.5rem', fontWeight: 600 }}>
                  {riskMatrix.find(r => r.impact === 'medium' && r.probability === 'medium').count}
                </td>
                <td style={{ border: '1px solid #e5e7eb', padding: '2rem', background: '#fed7aa', textAlign: 'center', fontSize: '1.5rem', fontWeight: 600 }}>
                  {riskMatrix.find(r => r.impact === 'medium' && r.probability === 'high').count}
                </td>
              </tr>
              <tr>
                <td style={{ border: '1px solid #e5e7eb', padding: '1rem', background: '#f9fafb', fontWeight: 600 }}>影響度: 低</td>
                <td style={{ border: '1px solid #e5e7eb', padding: '2rem', background: '#d1fae5', textAlign: 'center', fontSize: '1.5rem', fontWeight: 600 }}>
                  {riskMatrix.find(r => r.impact === 'low' && r.probability === 'low').count}
                </td>
                <td style={{ border: '1px solid #e5e7eb', padding: '2rem', background: '#d1fae5', textAlign: 'center', fontSize: '1.5rem', fontWeight: 600 }}>
                  {riskMatrix.find(r => r.impact === 'low' && r.probability === 'medium').count}
                </td>
                <td style={{ border: '1px solid #e5e7eb', padding: '2rem', background: '#fef3c7', textAlign: 'center', fontSize: '1.5rem', fontWeight: 600 }}>
                  {riskMatrix.find(r => r.impact === 'low' && r.probability === 'high').count}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* リスク一覧 */}
      <div className="card">
        <div className="card-header">
          <h3 className="card-title">リスク詳細一覧</h3>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {risks.sort((a, b) => getRiskScore(b.impact, b.probability) - getRiskScore(a.impact, a.probability)).map((risk) => (
            <div key={risk.id} style={{
              border: '1px solid #e5e7eb',
              borderRadius: '8px',
              padding: '1.5rem',
              background: getRiskScore(risk.impact, risk.probability) >= 6 ? '#fef2f2' :
                         getRiskScore(risk.impact, risk.probability) >= 4 ? '#fffbeb' : '#f9fafb'
            }}>
              <div style={{ display: 'flex', justifyContent: 'between', marginBottom: '1rem' }}>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                    <span style={{ fontWeight: 600, color: '#6b7280', fontSize: '0.875rem' }}>{risk.id}</span>
                    <span className="badge">{risk.category}</span>
                    {getStatusLabel(risk.status)}
                  </div>
                  <h4 style={{ fontSize: '1.125rem', fontWeight: 600, marginBottom: '0.5rem' }}>{risk.title}</h4>
                  <p style={{ fontSize: '0.875rem', color: '#6b7280', marginBottom: '1rem' }}>{risk.description}</p>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', minWidth: '200px', paddingLeft: '1rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: '0.75rem', color: '#6b7280' }}>影響度:</span>
                    {getImpactLabel(risk.impact)}
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: '0.75rem', color: '#6b7280' }}>発生確率:</span>
                    {getProbabilityLabel(risk.probability)}
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: '0.75rem', color: '#6b7280' }}>リスクスコア:</span>
                    <span style={{ fontWeight: 600 }}>{getRiskScore(risk.impact, risk.probability)}/9</span>
                  </div>
                </div>
              </div>

              <div style={{ background: 'white', borderRadius: '6px', padding: '1rem', marginBottom: '0.75rem' }}>
                <h5 style={{ fontSize: '0.875rem', fontWeight: 600, marginBottom: '0.5rem', color: '#10b981' }}>
                  <Shield size={16} style={{ display: 'inline', marginRight: '0.25rem' }} />
                  対策・軽減策
                </h5>
                <p style={{ fontSize: '0.875rem', color: '#374151' }}>{risk.mitigation}</p>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: '#6b7280' }}>
                <div>
                  <span style={{ fontWeight: 600 }}>担当:</span> {risk.owner}
                </div>
                <div>
                  <span style={{ fontWeight: 600 }}>期限:</span> {risk.dueDate}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RiskManagement;
