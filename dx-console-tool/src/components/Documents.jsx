import React, { useState } from 'react';
import { FileText, Download, Eye, Folder, File } from 'lucide-react';

const Documents = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const documents = [
    {
      id: 1,
      category: 'レポート',
      name: '業界動向・競合分析レポート',
      fileName: '01_業界動向・競合分析レポート.md',
      type: 'Markdown',
      size: '156 KB',
      date: '2025-11-16',
      status: 'completed',
      description: 'ペストコントロール業界・検査分析業界のDX動向、競合分析、戦略的方向性'
    },
    {
      id: 2,
      category: 'レポート',
      name: 'DX成功事例集',
      fileName: '02_DX成功事例集.md',
      type: 'Markdown',
      size: '124 KB',
      date: '2025-11-16',
      status: 'completed',
      description: '製造業・サービス業・検査分析業務のDX成功事例23件、具体的成果数値付き'
    },
    {
      id: 3,
      category: 'レポート',
      name: '技術要件定義書',
      fileName: '03_技術要件定義書.md',
      type: 'Markdown',
      size: '168 KB',
      date: '2025-11-16',
      status: 'completed',
      description: '現行システム構成、DX推進の技術アーキテクチャ、フェーズ別技術要件'
    },
    {
      id: 4,
      category: 'レポート',
      name: '統合分析レポート（エビデンス版）',
      fileName: 'イカリ消毒DXコンサル_統合分析レポート_エビデンス版.md',
      type: 'Markdown',
      size: '245 KB',
      date: '2025-11-15',
      status: 'completed',
      description: '組織構造、業務フロー、IT資産、課題分析、5ヵ年DXロードマップ（全数値エビデンス付き）'
    },
    {
      id: 5,
      category: 'Word',
      name: 'プロジェクト提案書',
      fileName: 'プロジェクト提案書.md',
      type: 'Markdown/Word',
      size: '11 KB',
      date: '2025-11-15',
      status: 'completed',
      description: '3ヶ月DXコンサルティングPoCの提案書（120万円、2025年11月〜2026年1月）'
    },
    {
      id: 6,
      category: 'Excel',
      name: 'DXロードマップ（2026〜2030年）',
      fileName: '01_DXロードマップ.csv',
      type: 'CSV/Excel',
      size: '4.2 KB',
      date: '2025-11-15',
      status: 'completed',
      description: '5ヵ年計画の年次別施策、KPI、投資規模（業界ベンチマーク付き）'
    },
    {
      id: 7,
      category: 'Excel',
      name: '課題管理表',
      fileName: '02_課題管理表.csv',
      type: 'CSV/Excel',
      size: '3.1 KB',
      date: '2025-11-15',
      status: 'completed',
      description: '8つの主要課題の現状・目指す姿・優先度・具体的施策・担当部門'
    },
    {
      id: 8,
      category: '図表',
      name: '組織構造図',
      fileName: '01_組織構造図.svg',
      type: 'SVG',
      size: '28 KB',
      date: '2025-11-15',
      status: 'completed',
      description: '代表取締役社長、6執行役員、19部門の完全な組織構造図'
    },
    {
      id: 9,
      category: '図表',
      name: 'システム構成図',
      fileName: '02_システム構成図.svg',
      type: 'SVG',
      size: '32 KB',
      date: '2025-11-15',
      status: 'completed',
      description: '総合経営管理システムを中核とした現行システム全体構成図'
    },
    {
      id: 10,
      category: 'レポート',
      name: '費用対効果分析レポート',
      fileName: '04_費用対効果分析レポート.md',
      type: 'Markdown',
      size: '-',
      date: '予定',
      status: 'pending',
      description: 'DX投資のROI分析、投資回収期間、費用対効果シミュレーション'
    },
    {
      id: 11,
      category: 'Excel',
      name: 'リスク管理表',
      fileName: '03_リスク管理表.csv',
      type: 'CSV/Excel',
      size: '-',
      date: '予定',
      status: 'pending',
      description: 'プロジェクトリスクの特定・評価・対策一覧'
    },
    {
      id: 12,
      category: 'レポート',
      name: 'KPI測定フレームワーク',
      fileName: '05_KPI測定フレームワーク.md',
      type: 'Markdown',
      size: '-',
      date: '予定',
      status: 'pending',
      description: 'KPI定義、測定方法、目標値設定、ダッシュボード仕様'
    },
  ];

  const categories = ['all', 'レポート', 'Excel', 'Word', '図表'];
  const filteredDocs = selectedCategory === 'all'
    ? documents
    : documents.filter(doc => doc.category === selectedCategory);

  const completedCount = documents.filter(d => d.status === 'completed').length;
  const pendingCount = documents.filter(d => d.status === 'pending').length;

  const getStatusBadge = (status) => {
    return status === 'completed'
      ? <span className="badge success">完成</span>
      : <span className="badge warning">作成予定</span>;
  };

  return (
    <div>
      <div className="page-header">
        <h2>ドキュメント管理</h2>
        <p className="page-subtitle">プロジェクト成果物一覧</p>
      </div>

      {/* サマリー */}
      <div className="stats-grid">
        <div className="stat-card success">
          <div className="stat-label">完成ドキュメント</div>
          <div className="stat-value">{completedCount}</div>
          <div className="stat-change positive">
            <FileText size={16} />
            <span>全{documents.length}件中</span>
          </div>
        </div>

        <div className="stat-card warning">
          <div className="stat-label">作成予定</div>
          <div className="stat-value">{pendingCount}</div>
          <div className="stat-change">
            <Folder size={16} />
            <span>12月中旬まで</span>
          </div>
        </div>

        <div className="stat-card primary">
          <div className="stat-label">総ページ数（推定）</div>
          <div className="stat-value">350+</div>
          <div className="stat-change">
            <File size={16} />
            <span>Markdown/CSV含む</span>
          </div>
        </div>

        <div className="stat-card primary">
          <div className="stat-label">エビデンス数</div>
          <div className="stat-value">23</div>
          <div className="stat-change">
            <FileText size={16} />
            <span>参考資料・出典</span>
          </div>
        </div>
      </div>

      {/* カテゴリフィルター */}
      <div className="card">
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              style={{
                padding: '0.5rem 1rem',
                border: 'none',
                borderRadius: '6px',
                cursor: 'pointer',
                background: selectedCategory === cat ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' : '#f3f4f6',
                color: selectedCategory === cat ? 'white' : '#374151',
                fontWeight: selectedCategory === cat ? 600 : 400,
                fontSize: '0.875rem',
                transition: 'all 0.2s'
              }}
            >
              {cat === 'all' ? 'すべて' : cat}
            </button>
          ))}
        </div>
      </div>

      {/* ドキュメント一覧 */}
      <div style={{ display: 'grid', gap: '1rem' }}>
        {filteredDocs.map(doc => (
          <div key={doc.id} className="card" style={{ marginBottom: 0 }}>
            <div style={{ display: 'flex', gap: '1.5rem' }}>
              <div style={{
                width: '60px',
                height: '60px',
                borderRadius: '8px',
                background: doc.status === 'completed' ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' : '#f3f4f6',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}>
                <FileText size={32} color={doc.status === 'completed' ? 'white' : '#9ca3af'} />
              </div>

              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
                  <h4 style={{ fontSize: '1.125rem', fontWeight: 600, margin: 0 }}>{doc.name}</h4>
                  {getStatusBadge(doc.status)}
                  <span className="badge">{doc.category}</span>
                </div>

                <p style={{ fontSize: '0.875rem', color: '#6b7280', marginBottom: '0.75rem' }}>
                  {doc.description}
                </p>

                <div style={{ display: 'flex', gap: '2rem', fontSize: '0.75rem', color: '#9ca3af' }}>
                  <div>
                    <span style={{ fontWeight: 600 }}>ファイル名:</span> {doc.fileName}
                  </div>
                  <div>
                    <span style={{ fontWeight: 600 }}>形式:</span> {doc.type}
                  </div>
                  <div>
                    <span style={{ fontWeight: 600 }}>サイズ:</span> {doc.size}
                  </div>
                  <div>
                    <span style={{ fontWeight: 600 }}>更新日:</span> {doc.date}
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', flexShrink: 0 }}>
                {doc.status === 'completed' && (
                  <>
                    <button style={{
                      padding: '0.5rem 1rem',
                      background: '#667eea',
                      color: 'white',
                      border: 'none',
                      borderRadius: '6px',
                      cursor: 'pointer',
                      fontSize: '0.875rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      whiteSpace: 'nowrap'
                    }}>
                      <Eye size={16} />
                      プレビュー
                    </button>
                    <button style={{
                      padding: '0.5rem 1rem',
                      background: '#10b981',
                      color: 'white',
                      border: 'none',
                      borderRadius: '6px',
                      cursor: 'pointer',
                      fontSize: '0.875rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      whiteSpace: 'nowrap'
                    }}>
                      <Download size={16} />
                      ダウンロード
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* フォルダ構成 */}
      <div className="card">
        <div className="card-header">
          <h3 className="card-title">
            <Folder size={20} />
            フォルダ構成
          </h3>
        </div>
        <div style={{ background: '#f9fafb', borderRadius: '8px', padding: '1rem', fontFamily: 'monospace', fontSize: '0.875rem' }}>
          <div style={{ marginBottom: '0.5rem' }}>📁 成果物/</div>
          <div style={{ paddingLeft: '1.5rem' }}>
            <div style={{ marginBottom: '0.5rem' }}>📁 図表_SVG/</div>
            <div style={{ paddingLeft: '1.5rem', color: '#6b7280' }}>
              <div>📄 01_組織構造図.svg</div>
              <div>📄 02_システム構成図.svg</div>
            </div>
          </div>
          <div style={{ paddingLeft: '1.5rem' }}>
            <div style={{ marginBottom: '0.5rem' }}>📁 Excel/</div>
            <div style={{ paddingLeft: '1.5rem', color: '#6b7280' }}>
              <div>📄 01_DXロードマップ.csv</div>
              <div>📄 02_課題管理表.csv</div>
              <div>📄 03_リスク管理表.csv (予定)</div>
            </div>
          </div>
          <div style={{ paddingLeft: '1.5rem' }}>
            <div style={{ marginBottom: '0.5rem' }}>📁 Word/</div>
            <div style={{ paddingLeft: '1.5rem', color: '#6b7280' }}>
              <div>📄 プロジェクト提案書.md</div>
            </div>
          </div>
          <div style={{ paddingLeft: '1.5rem', color: '#6b7280' }}>
            <div>📄 01_業界動向・競合分析レポート.md</div>
            <div>📄 02_DX成功事例集.md</div>
            <div>📄 03_技術要件定義書.md</div>
            <div>📄 04_費用対効果分析レポート.md (予定)</div>
            <div>📄 05_KPI測定フレームワーク.md (予定)</div>
            <div>📄 イカリ消毒DXコンサル_統合分析レポート_エビデンス版.md</div>
          </div>
        </div>
      </div>

      {/* エビデンス・参考資料 */}
      <div className="card">
        <div className="card-header">
          <h3 className="card-title">主要エビデンス・参考資料</h3>
        </div>
        <div className="table-container">
          <table className="data-table">
            <thead>
              <tr>
                <th>資料名</th>
                <th>発行元</th>
                <th>カテゴリ</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>中小企業白書2024</td>
                <td>中小企業庁</td>
                <td>DX投資動向</td>
              </tr>
              <tr>
                <td>企業IT動向調査2024</td>
                <td>JUAS</td>
                <td>IT投資・DX推進</td>
              </tr>
              <tr>
                <td>DX投資調査2024</td>
                <td>デロイト</td>
                <td>投資規模・ROI</td>
              </tr>
              <tr>
                <td>工場におけるAI活用事例25選</td>
                <td>AI総研</td>
                <td>AI活用事例</td>
              </tr>
              <tr>
                <td>製造業におけるAI活用事例23選</td>
                <td>MatrixFlow</td>
                <td>AI導入成果</td>
              </tr>
              <tr>
                <td>中小企業のDX推進に関する調査（2024年）</td>
                <td>中小企業基盤整備機構</td>
                <td>DX実施状況</td>
              </tr>
              <tr>
                <td>DX動向2025</td>
                <td>IPA（情報処理推進機構）</td>
                <td>日米独比較</td>
              </tr>
              <tr>
                <td>中小企業向けゼロトラストガイダンス</td>
                <td>CSA Japan</td>
                <td>セキュリティ</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Documents;
