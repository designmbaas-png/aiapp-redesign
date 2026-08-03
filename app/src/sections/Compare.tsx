import { useLang } from '../i18n'
import type { ReactNode } from 'react'

export function Compare() {
  const { t } = useLang()
  const X = (
    <span className="cmp-x" role="img" aria-label={t('미지원', 'Not supported')}>
      <svg viewBox="0 0 24 24" width="11" height="11" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" aria-hidden="true">
        <path d="M18 6 6 18M6 6l12 12" />
      </svg>
    </span>
  )
  const O = (
    <span className="cmp-o" role="img" aria-label={t('지원', 'Supported')}>
      <svg viewBox="0 0 24 24" width="11" height="11" fill="none" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M20 6 9 17l-5-5" />
      </svg>
    </span>
  )
  const rows: { label: ReactNode; a: ReactNode; b: ReactNode; c: ReactNode }[] = [
    {
      label: t('시작점', 'Starting point'),
      a: t('빈 캔버스', 'Blank canvas'),
      b: t('빈 프롬프트', 'Blank prompt'),
      c: <b>{t('기존 라이브 서비스', 'Your existing live service')}</b>,
    },
    {
      label: t('기존 서비스 진단', 'Diagnoses the existing service'),
      a: X,
      b: X,
      c: <>{O} {t('작업 전 리포트', 'pre-work report')}</>,
    },
    {
      label: t('원본 데이터·브랜드 보존', 'Preserves original data & brand'),
      a: X,
      b: X,
      c: O,
    },
    {
      label: t('결과물 성격', 'What you get'),
      a: t('새 사이트', 'A new site'),
      b: t('정적 결과물', 'A static artifact'),
      c: <b>{t('상용 운영 가능 서비스', 'A commercially operable service')}</b>,
    },
    {
      label: t('결제·회원·예약 연결', 'Payments, members, bookings'),
      a: t('별도 연동', 'Separate integration'),
      b: X,
      c: <>{O} {t('내장 BaaS 자동', 'built-in BaaS, automatic')}</>,
    },
    {
      label: t('생성 구조', 'Generation model'),
      a: t('수동 편집', 'Manual editing'),
      b: t('단일 모델', 'Single model'),
      c: <b>{t('MCP 멀티에이전트 병렬', 'MCP multi-agent, parallel')}</b>,
    },
  ]
  /* 모바일 2열 표용 압축 데이터 — 경쟁 2군을 '기존 도구' 한 열로 합치고 라벨·값을 짧게 */
  const duoRows: { label: ReactNode; etc: ReactNode; ai: ReactNode }[] = [
    {
      label: t('시작점', 'Starting point'),
      etc: t('빈 캔버스·프롬프트', 'Blank canvas / prompt'),
      ai: t('기존 라이브 서비스', 'Your live service'),
    },
    {
      label: t('기존 서비스 진단', 'Diagnosis'),
      etc: X,
      ai: <>{O} {t('작업 전 리포트', 'pre-work report')}</>,
    },
    {
      label: t('원본 보존', 'Original preserved'),
      etc: X,
      ai: O,
    },
    {
      label: t('결과물', 'What you get'),
      etc: t('새 사이트·정적물', 'New site / static'),
      ai: t('상용 운영 서비스', 'Operable service'),
    },
    {
      label: t('결제·회원·예약', 'Payments, members'),
      etc: t('별도 연동·미지원', 'Separate / none'),
      ai: <>{O} {t('내장 BaaS', 'built-in BaaS')}</>,
    },
    {
      label: t('생성 구조', 'Generation'),
      etc: t('수동·단일 모델', 'Manual / single model'),
      ai: t('멀티에이전트 병렬', 'Multi-agent, parallel'),
    },
  ]

  return (
    <section className="section etl-compare" id="compare">
      <div className="wrap">
        <div className="center">
          <p className="eyebrow reveal">WHY DIFFERENT</p>
          <h2 className="h2 reveal">{t('기존 도구와 무엇이 다른가', 'How it differs from existing tools')}</h2>
        </div>
        {/* 데스크톱: 표 그대로 / 모바일(≤760): 항목별 카드 스택으로 전환 (CSS로 상호 배타 노출) */}
        <div className="cmp-scroll reveal">
          <table className="cmp-table">
            <thead>
              <tr>
                <th />
                <th>{t('템플릿 노코드·웹빌더', 'Template no-code builders')}</th>
                <th>{t('AI 프롬프트→앱 생성기', 'AI prompt-to-app generators')}</th>
                <th className="hl">AiApp</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <tr key={i}>
                  <th>{r.label}</th>
                  <td>{r.a}</td>
                  <td>{r.b}</td>
                  <td className="hl">{r.c}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* 모바일 전용(≤760): 경쟁 2군을 '기존 도구' 한 열로 압축한 2열 표 —
            가로 스크롤 없이 항목 6개가 한 화면에서 좌우 대비되도록 */}
        <div className="cmp-duo-wrap reveal">
          <div className="cmp-duo-card">
            <table className="cmp-duo">
              <thead>
                <tr>
                  <th />
                  <th>{t('기존 도구*', 'Existing tools*')}</th>
                  <th className="hl">AiApp</th>
                </tr>
              </thead>
              <tbody>
                {duoRows.map((r, i) => (
                  <tr key={i}>
                    <th>{r.label}</th>
                    <td className="etc">{r.etc}</td>
                    <td className="hl">{r.ai}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="cmp-duo-note">
            * {t('템플릿 노코드·웹빌더, AI 프롬프트→앱 생성기', 'Template no-code builders, AI prompt-to-app generators')}
          </p>
        </div>
        <p className="cmp-punch reveal">
          {t(
            <>멈춘 서비스를 <b>입력으로 받아</b> 상용 운영 가능하게 되살리는 방식은 <b>AiApp이 유일</b>합니다.</>,
            <>AiApp is <b>the only approach</b> that takes a stalled service <b>as input</b> and revives it into a commercially operable one.</>,
          )}
        </p>
      </div>
    </section>
  )
}
