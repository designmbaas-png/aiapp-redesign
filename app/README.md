# AiApp React 앱 (점진 전환)

기존 정적 HTML 시안을 React로 점진 전환하기 위한 Vite + React(TypeScript) 프로젝트입니다.
첫 페이지로 **ETL 재생 엔진 랜딩**(CES 대비)을 구현했습니다.

## 명령어

```bash
npm install        # 최초 1회
npm run dev        # 개발 서버 (http://localhost:5173)
npm run build      # 프로덕션 빌드 → 저장소 루트 /etl 폴더로 출력
npm run preview    # 빌드 결과물 로컬 확인 (http://localhost:4173)
```

빌드 산출물은 `vite.config.ts`의 `build.outDir: '../etl'` 설정에 따라 저장소 루트 `etl/`로 나갑니다.
기존 정적 페이지들과 함께 GitHub Pages로 그대로 배포되며, 루트 페이지에서는 `etl/` 상대 링크로 진입합니다.

## 구조

```
src/
  i18n.tsx               # KR/EN 언어 컨텍스트 (?lang=en 파라미터 · localStorage 지원)
  hooks/useReveal.ts     # 스크롤 리빌 (기존 공통 스크립트와 동일 동작, threshold 0)
  styles/
    design-system.css    # 기존 사이트 공통 디자인 시스템 이식본 (Source of Truth: Home)
    etl.css              # ETL 페이지 전용 스타일
  components/            # TopBanner · Gnb(드로어 포함) · Footer — 공통 컴포넌트
  sections/              # ETL 랜딩 섹션 (Demo 섹션이 아래 데모 러너를 임베드)
  assets/logo.png        # 기존 페이지 base64 로고 추출본
public/
  demo/                  # 참고/ETL-demo 러너 사본 (KR: index.html · EN: index_en.html)
                         # 원본(참고/ETL-demo)을 수정하면 여기로 다시 복사해야 반영됩니다
```

## KR/EN 다국어

- GNB의 KR/EN 토글이 실제로 동작합니다 (localStorage에 유지).
- `?lang=en` 쿼리 파라미터가 우선합니다 — CES 심사위원에게는 `…/etl/?lang=en` 링크를 공유하세요.

## 카피 정책 (참고/AiApp-ETL-재생엔진-설명.md 준수)

- 모든 성과 수치에 "자사 내부 측정치" 출처 병기
- 특허번호(KR Patent 10-2624044)는 페이지 내 1회만 노출
- 기술 신뢰성 문맥에서는 vibe coding 대신 no-code/conversational 표현 사용
