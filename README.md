# AiApp 리디자인 시안

AiApp(aiapp.help) 서비스 리디자인 High-Fidelity 시안입니다.

## 페이지

| 파일 | 페이지 | 설명 |
|---|---|---|
| `index.html` | 홈 (랜딩페이지) | Hero 프롬프트, Agent Relay 데모 영상, mBaaS 소개, 유스케이스, FAQ 등 |
| `templates.html` | 템플릿 | 실서비스 템플릿 32종 · 카테고리 12종 · 라이브 프리뷰(iframe) 연동 |

## 보는 방법

- **GitHub Pages**: 배포 URL 접속 후 GNB로 홈 ↔ 템플릿 이동
- **로컬**: 두 파일을 같은 폴더에 두고 `index.html` 열기

## 디자인 시스템

- 컬러: `--accent #2B5CE6` · `--mint #5CDBB4` · `--navy #0A1836` · `--paper #F7F9FC`
- 타이포: Pretendard Variable
- 컨테이너: 1160px · 섹션 스페이싱 110px · radius 16px
- 아이콘: Lucide (strokeWidth 2)

## 참고

- 템플릿 페이지의 썸네일·라이브 프리뷰는 실서비스 CDN(`cdn.mbaas.kr`, `registry.aiapp.link`)을 참조합니다.
- 홈 데모 영상은 base64로 내장되어 단일 파일로 동작합니다 (실배포 시 CDN 교체 권장).

---
(주)엠바스 · AiApp 리디자인 프로젝트 · 2026
