# Slice 1: Foundation Data Cutover — implementer

**Objective:** Implement Slice 1 Foundation Data: update types, scheduleData, ministryData, and create koiData according to official church data.

## Context

Update src/types/index.ts to expand DayOfWeek to all 7 days, add KOIGroup and HistoryMilestone types. Update src/data/scheduleData.ts to set Ibadah 1 (07.00 WIB), Ibadah 2 (10.00 WIB), Jam Doa (Rabu 18.00 WIB), Lansia (Selasa 13.00 WIB), PBI (Kamis 19.00 WIB), WBI (Jumat 16.00 WIB), PKMB & PKRB (Sabtu 17.00 WIB). Create src/data/koiData.ts with 8 KOI groups (Silas, Debora, Matius, Paulus, Akwila Priskila, Yakobus, Yohanes, Lukas) and leader Pdt. Hendi. Update src/data/ministryData.ts with leaders: Ibu Mexy (Sekolah Minggu), Sdri. Lily (Remaja), Bpk. Ari (Musik), Pdt. Kristianto (Doa), Ibu Dhede (Diakonia). Preserve all existing fields and formatting. Run npm run build to verify.

## Policy (inherit — do not renegotiate)

- CONTRACT DISCIPLINE (policy of record — oc-dispatch):
- This brief is the contract. Read it fully before any file access. It is the entire scope.
- NO destructive/state-mutating side effects the task did not call for: no git stash/reset/checkout/restore/clean/rm/commit/branch, no deletes, no publishes, no sends. Verification runs are read-only.
- SCOPE LOCK: only the files and symbols named here may change. Anything outside is out of scope. On ambiguity, STOP and report rather than guessing or 'fixing' adjacent things.
- DO THE WORK, do not just explore: read the minimum, then execute in small steps so a mid-run stall preserves progress.
- SELF-CHECK AND PASTE EVIDENCE: run the objective checks yourself and paste the RAW output. Quote back the specific things you were told to preserve. Self-check is a smoke alarm, not a certificate.
- STOP ON AMBIGUITY: a genuine 'I'm not sure' report is worth more than a confident wrong guess.
- NO FALLBACK-AS-HANDLER: if the brief mentions 'use X if Y is unavailable' and Y is available (verify: grep the manifests), wire the PRIMARY path. Stubs, no-ops, console.log placeholders are NOT acceptable as shipped implementation.
- EVIDENCE RULE: every claim needs file:line or raw command output. Anything you could not verify is UNVERIFIED + reason, and forces the item to BLOCKER. NO 'close enough' PASS.
- No new @ts-ignore, eslint-disable, broad any, or TODO placeholders. No dead code, no .bak files, no stale imports.
- TOOL-LEVEL GUARDS ARE ACTIVE: failproofai enforces policies on this session (env-var reads, .env files, reads outside the working directory, sudo, rm -rf, curl-pipe-sh, secret sanitization). A blocked command returns a failproofai block message — that is FINAL policy, not a puzzle. Do NOT retry the same action through a different tool, shell, or encoding. If a legitimate task needs what was blocked, STOP and report the blocker in your final report instead.
- MICRO-CONTRACT & ANTI-TAKEOVER RULE: OpenCode free-tier models (muse-spark, nemotron) require lean atomic contracts (<1200 chars). On timeout or latency stall, the orchestrator MUST NOT prematurely take over writing code. Instead, the orchestrator MUST slice the task into micro-contracts (1 single function or diff chunk) and re-dispatch.

## Role & contract

- Role: IMPLEMENTER — you make the change and prove it.
- Gates: run ALL of the project gates the brief names (typecheck, test, lint, build) and paste raw output in your report.
- Changed-file discipline: modify ONLY the files listed in Scope. After finishing, list every file created/modified and how each requirement maps to it.
- Before touching an exported symbol, check its callers (lsp references / grep). Missed callsites are bugs.
- LARGE-FILE READING (critical): the Read tool TRUNCATES long files. Never rely on one read of a file >250 lines — read it in line-range chunks (e.g. `read path:1-150`, then `:151-300`) until you have what you need. Re-reading the same file more than twice without making an edit is a stall: stop re-reading and start editing with the chunks you have. If a read returns truncated content, read the missing ranges, then edit.

## Output format

```text
Report: 1) files created/modified, 2) per-requirement mapping with file:line, 3) raw gate output, 4) deviations from this brief + why.
```
