# Repository Guidelines

## Project Structure & Module Organization
This workspace is a document-first project. Authoritative plans live in `必要ドキュメント一覧.md`, day-to-day execution guidance is kept in `平野_実施Todo一覧.md`, and client-supplied reference assets sit inside `イカリ提供資料/` (mirrored in `イカリ提供資料.zip` for archival). Additions should extend these sources rather than duplicating them—e.g., append new deliverables under the relevant phase in `必要ドキュメント一覧.md` and drop supporting slides or scans into `イカリ提供資料/フェーズ名/` so reviewers can trace every artifact back to the client brief.

## Build, Test, and Development Commands
The repo has no binary build, but contributors should keep the Markdown corpus linted and archives verified:
- `npx markdownlint-cli2 "*.md" "!*node_modules"` — quick structural lint; run before every PR.
- `mdformat 必要ドキュメント一覧.md 平野_実施Todo一覧.md` — enforce consistent spacing (install `mdformat` globally if missing).
- `zip -T イカリ提供資料.zip` — confirm archive integrity after changing provided assets. Always re-run when zipping new evidence bundles.

## Coding Style & Naming Conventions
Write Markdown in UTF-8 with full-width characters preserved when coming from the client. Use level-1 headings only for document titles, then descend sequentially (`##`, `###`). Bullets should favor concise action verbs, and emoji callouts already used in the docs (📅, ⚠️, 🎯) may be reused for continuity. Name new files using Japanese titles when they originate from client language; otherwise prefer kebab-case ASCII (e.g., `project-timeline.md`).

## Testing Guidelines
Treat every edit as a document release: (1) lint + format, (2) spell-check proper nouns against the latest client artifacts, (3) cross-link deliverables by referencing the page/slide stored under `イカリ提供資料/`. When adding schedules or checklists, validate totals manually (e.g., sum todo counts) and include the verification note in the PR description.

## Commit & Pull Request Guidelines
Use conventional, descriptive messages such as `docs: update midterm deliverable list` or `assets: add hearing notes deck`. Each PR should include: purpose summary, affected files list, manual verification evidence (lint command output), and stakeholder impact (e.g., “affects PoC phase timeline”). Always request a second reviewer when modifying client-marked confidential files.

## Security & Handling Sensitive Assets
Files prefixed with `㊙` or containing personally identifiable details must never leave the repo. Do not paste their contents into issue trackers; instead, reference them by relative path and page. Encrypt outbound bundles (e.g., `gpg -c イカリ提供資料.zip`) before sharing externally and confirm recipients via the NDA contact list.
