# AiApp 리디자인 시안

AiApp(aiapp.help) 서비스 리디자인 High-Fidelity 시안입니다.
5개 페이지를 하나의 디자인 시스템으로 통일해, 처음부터 하나의 서비스로 설계된 것처럼 자연스럽게 연결했습니다. **Home을 Source of Truth**로 삼아 공통 컴포넌트를 정렬했습니다.

## 페이지

| 파일 | 페이지 | 설명 |
|---|---|---|
| `index.html` | 홈 (랜딩페이지) | Hero 프롬프트, Agent Relay 데모 영상, mBaaS 소개, 유스케이스, FAQ 등 |
| `templates.html` | 템플릿 | 실서비스 템플릿 32종 · 카테고리 12종 · 라이브 프리뷰(iframe) 연동 |
| `pricing.html` | 요금제 | 플랜 5종 · 월/연 토글 · 기능 비교표 · FAQ |
| `blog.html` | 블로그 | AI 인사이트 · 카테고리 탭 · 카드 그리드 |
| `notice.html` | 공지 | 공지/뉴스 12건 · 카테고리 탭 · 정렬 |
| `etl/` | **ETL 재생 엔진** (CES) | React(Vite) 빌드 산출물 · KR/EN 토글(`?lang=en`) · 소스는 `app/` |

## React 점진 전환 (app/)

CES 대비 ETL 랜딩부터 React(Vite + TypeScript)로 전환을 시작했습니다.

- 소스: [app/](app/) — 개발·빌드 방법은 [app/README.md](app/README.md) 참고
- `app`에서 `npm run build` 하면 루트 `etl/`로 출력되어 기존 정적 페이지와 함께 배포됩니다
- 기존 5개 페이지는 순차적으로 React로 이전 예정 (디자인 시스템은 `app/src/styles/design-system.css`로 이식 완료)

## 보는 방법

- **GitHub Pages**: 배포 URL 접속 후 GNB로 홈 ↔ 템플릿 ↔ 요금제 ↔ 블로그 ↔ 공지 이동
- **로컬**: 각 파일은 외부 의존성 없는 단일 파일이므로 어느 파일이든 그대로 열면 됩니다

## 디자인 시스템 (Source of Truth: Home)

- 컬러: `--accent #2B5CE6` · `--mint #5CDBB4` · `--navy #0A1836` · `--paper #F7F9FC` · `--ink #0E1626`
- 타이포: Pretendard Variable
- 컨테이너: 1160px · 섹션 스페이싱 110px · radius 16px
- 아이콘: Lucide (strokeWidth 2)
- **공통 컴포넌트**: GNB(헤더), Footer, 상단 프로모 배너, 로그인 모달, 버튼(.btn 계열), 칩/태그, 스크롤 리빌 — 5개 페이지에서 완전히 동일하게 통일
- '모두의 창업' CTA 배지, 로고, 공통 아이콘·버튼·CTA는 모두 Home 기준으로 정렬

## 구조 참고

- 각 HTML은 공통 CSS·JS·로고를 **인라인 내장**한 단일 파일입니다 (뷰어·GitHub Pages 어디서나 스타일 깨짐 없이 동작).
- 유지보수용 분리 소스(`assets/design-system.css`, `assets/site.js`)와 공통 파셜(`_partials/`)은 작업 폴더에 별도 보관되어 있습니다. 실제 서비스에 반영할 때는 이 분리 구조를 사용하는 것을 권장합니다.
- 템플릿 페이지의 썸네일·라이브 프리뷰는 실서비스 CDN(`cdn.mbaas.kr`, `registry.aiapp.link`)을 참조합니다.
- 홈 데모 영상은 base64로 내장되어 단일 파일로 동작합니다 (실배포 시 CDN 교체 권장).

---
(주)엠바스 · AiApp 리디자인 프로젝트 · 2026
