import { useLang } from '../i18n'

export function Architecture() {
  const { t } = useLang()

  const subs = [
    { name: 'FRONTEND', desc: t('병렬 생성', 'Generated in parallel') },
    { name: 'BACKEND', desc: t('병렬 생성', 'Generated in parallel') },
    { name: 'API', desc: t('병렬 생성', 'Generated in parallel') },
    { name: 'ADMIN DASHBOARD', desc: t('셀프서비스', 'Self-service') },
  ]
  const etl = [
    {
      name: 'EXTRACT',
      lines: [t('헤드리스 브라우저', 'Headless browser'), 'DOM/CSSOM', t('화면을 데이터로', 'Code as data')],
    },
    {
      name: 'TRANSFORM',
      lines: [t('AST 분석', 'AST analysis'), t('LLM 시맨틱 추론', 'LLM semantics'), t('최신 스택 재구성', 'Modern stack')],
    },
    {
      name: 'LOAD',
      lines: [t('서버리스 프로비저닝', 'Serverless provisioning'), 'Zero-Ops'],
    },
  ]
  const baas = ['AUTH / SSO', 'CMS / CRM', 'UMS', t('DB · 스토리지 · CDN', 'DB · STORAGE · CDN'), 'AI MCP']

  return (
    <section className="section etl-arch" id="architecture">
      <div className="wrap center">
        <p className="eyebrow reveal">ARCHITECTURE</p>
        <h2 className="h2 reveal">{t('재생을 가능하게 하는 구조', 'The architecture behind revival')}</h2>
        <p className="sub reveal">
          {t(
            '주소 한 줄이 입력되면 — 멀티에이전트가 분해하고, ETL 파이프라인이 재생하고, 내장 BaaS가 운영을 받칩니다.',
            'One URL goes in — a multi-agent system decomposes the work, the ETL pipeline revives it, and built-in BaaS runs it.',
          )}
        </p>

        {/* .reveal의 on 토글을 트리거로 자식들이 위→아래 순차 등장 (etl.css .arch2 규칙) */}
        <div className="arch2 reveal">
          {/* INPUT */}
          <div className="arch2-input">
            <span className="arch2-input-label">INPUT</span>
            <span className="arch2-input-desc">{t('멈춘 사이트 주소 / 자연어 요청', 'Legacy URL / Plain-language request')}</span>
          </div>
          <div className="arch2-arrow" aria-hidden="true">↓</div>

          {/* 01 Multi-agent */}
          <div className="arch2-layer">
            <div className="arch2-layer-head">
              <span className="arch2-no">01</span>
              <h3>AI MULTI-AGENT · MAIN–SUB</h3>
            </div>
            <div className="arch2-main">
              <b>MAIN AGENT</b>
              <span>{t('요청 분해 · 오케스트레이션', 'Plans and orchestrates')}</span>
            </div>
            <div className="arch2-subs">
              {subs.map((s) => (
                <div className="arch2-sub" key={s.name}>
                  <b>{s.name}</b>
                  <span>{s.desc}</span>
                </div>
              ))}
            </div>
            <p className="arch2-foot-note">
              {t('오류는 Self-Fix 루프가 감지 → 수정 반복', 'Errors are caught and repaired by a Self-Fix loop')}
            </p>
          </div>
          <div className="arch2-arrow" aria-hidden="true">↓</div>

          {/* 02 Semantic ETL pipeline */}
          <div className="arch2-layer hl">
            <div className="arch2-layer-head">
              <span className="arch2-no">02</span>
              <h3>SEMANTIC ETL PIPELINE</h3>
            </div>
            <div className="arch2-etl">
              {etl.map((s, i) => (
                <div className="arch2-etl-item" key={s.name}>
                  {i > 0 && <span className="arch2-etl-arrow" aria-hidden="true">→</span>}
                  <div className="arch2-etl-card">
                    <b>{s.name}</b>
                    <span>
                      {s.lines.map((l, j) => (
                        <span key={j} className="nb">
                          {l}
                          {j < s.lines.length - 1 && ' · '}
                        </span>
                      ))}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="arch2-arrow" aria-hidden="true">↓</div>

          {/* 03 Built-in BaaS */}
          <div className="arch2-layer">
            <div className="arch2-layer-head">
              <span className="arch2-no">03</span>
              <h3>BUILT-IN BAAS OPERATIONS</h3>
            </div>
            <div className="arch2-baas">
              {baas.map((b, i) => (
                <span className="arch2-chip" key={i}>
                  {b}
                </span>
              ))}
            </div>
          </div>
          <div className="arch2-arrow" aria-hidden="true">↓</div>

          {/* Foundation */}
          <div className="arch2-found">
            <div className="arch2-found-txt">
              <b>SERVERLESS FOUNDATION</b>
              <span>AWS Lambda · FastAPI</span>
            </div>
            <span className="arch2-badge">{t('빠른 배포에 최적화', 'Built for rapid deployment')}</span>
          </div>
        </div>
      </div>
    </section>
  )
}
