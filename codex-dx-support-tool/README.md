# Codex DX Support Tool (Mock)

Vite + React で構成したモックツールです。`平野_実施Todo一覧.md` と `必要ドキュメント一覧.md` から拾える情報をカード化して、Todo・成果物・会議・リスクをまとめて確認できるようにしています。データは `src/data.js` に集約しているので、ドキュメントが更新された際はこのファイルを書き換えるだけでモックを差し替えできます。

## セットアップ

```bash
cd codex-dx-support-tool
npm install
npm run dev    # http://localhost:5173
```

本番ビルドは `npm run build`、確認は `npm run preview` で行えます。

## 主なコンポーネント
-	`PhaseBoard` : Todoをフェーズ別に整理し、優先度と成果物を確認。
-	`DeliverableSchedule` : 提出物ID・形式・担当を一望できるテーブル。
-	`MeetingsRisks` : 打ち合わせスケジュールとリスクテーブル。
-	`data.js` : モックに渡す静的データ。Todo/成果物/会議/リスクをここで管理します。

## カスタマイズヒント
- Todoや成果物の追加は `data.js` に追記し、必要なら `phaseOrder` にフェーズを追加。
- UIのスタイルは `src/App.css` で統一管理。ガイドカラーを変えるだけで雰囲気を変更可能。
- 実データ連携を行う際は `data.js` を API 呼び出しに差し替え、状態管理を導入してください。
