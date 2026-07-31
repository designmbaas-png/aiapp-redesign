import { useLang } from '../i18n'
import type { ReactNode } from 'react'

function StepVisual({ children, label }: { children: ReactNode; label: string }) {
  return (
    <div className="step-visual">
      <div className="step-visual-head">{label}</div>
      <div className="step-visual-body">{children}</div>
    </div>
  )
}

export function Process() {
  const { t } = useLang()
  return (
    <section className="section etl-process" id="process">
      <div className="wrap">
        <div className="center">
          <p className="eyebrow reveal">HOW IT WORKS</p>
          <h2 className="h2 reveal">{t('3단계 동작 원리', 'How it works — three stages')}</h2>
          <p className="sub reveal">
            {t(
              '빈 화면에서 새로 만드는 것이 아니라, 있는 것을 읽어서 다시 살립니다.',
              "It doesn't start from a blank screen — it reads what exists and brings it back to life.",
            )}
          </p>
        </div>

        {/* 01 Extract */}
        <div className="step-row reveal from-left">
          <div className="step-txt">
            <span className="step-no">01</span>
            <h3>
              Extract — {t('살아 있는 화면을 데이터로 되돌리기', 'Turn the rendered screen back into data')}
            </h3>
            <ul>
              <li>
                {t(
                  <>라이브 사이트의 <b>런타임 DOM/CSSOM</b>을 캡처해, 실제 렌더된 결과를 구조 데이터로 확보</>,
                  <>Capture the live site's <b>runtime DOM/CSSOM</b> — the actually rendered result becomes structured data</>,
                )}
              </li>
              <li>
                {t(
                  <><b>네트워크 호출</b>을 추적해 어떤 API·엔드포인트에 의존하고 있었는지 파악</>,
                  <>Trace <b>network calls</b> to map which APIs and endpoints the site depended on</>,
                )}
              </li>
              <li>
                {t(
                  <>두 정보를 역추적해 <b>데이터 스키마 복원</b></>,
                  <>Reverse-engineer both to <b>reconstruct the data schema</b></>,
                )}
              </li>
            </ul>
            <p className="step-note">
              {t(
                '원본 소스코드나 문서가 남아 있지 않아도, 브라우저에 그려진 결과물로부터 구조를 되돌립니다.',
                'Even with no source code or documentation left, the structure is recovered from what the browser rendered.',
              )}
            </p>
          </div>
          <StepVisual label={t('브라우저 → 구조 데이터', 'Browser → structured data')}>
            <div className="sv-flow">
              <span className="sv-box">DOM / CSSOM</span>
              <span className="sv-arrow">→</span>
              <span className="sv-box">Network</span>
              <span className="sv-arrow">→</span>
              <span className="sv-box hl">Schema</span>
            </div>
          </StepVisual>
        </div>

        {/* 02 Transform */}
        <div className="step-row rev reveal from-right">
          <div className="step-txt">
            <span className="step-no">02</span>
            <h3>
              Transform — {t('의미를 이해한 뒤 최신 스택으로 재구성', 'Understand the meaning, rebuild on a modern stack')}
            </h3>
            <ul>
              <li>
                {t(
                  <><b>AST(추상 구문 트리) 분석</b>으로 코드를 문법 구조 단위로 해부</>,
                  <><b>AST (abstract syntax tree) analysis</b> dissects the code into its grammatical structure</>,
                )}
              </li>
              <li>
                {t(
                  <><b>LLM 시맨틱 추론</b>으로 각 구조가 담당하던 비즈니스 로직·의도를 해석</>,
                  <><b>LLM semantic inference</b> interprets the business logic and intent behind each structure</>,
                )}
              </li>
              <li>
                {t(
                  <>원본의 <b>데이터·레이아웃·브랜드를 보존한 상태로</b> 최신 스택 위에 로직 재구성</>,
                  <>Logic is rebuilt on a modern stack <b>while preserving the original data, layout and brand</b></>,
                )}
              </li>
            </ul>
            <p className="step-note">
              {t(
                '여기가 범용 템플릿 이식과 갈리는 지점입니다. 결과물은 "비슷한 사이트"가 아니라 여전히 내 사이트로 읽힙니다.',
                'This is where it diverges from generic template migration: the result reads not as "a similar site," but as still your site.',
              )}
            </p>
          </div>
          <StepVisual label={t('의미 기반 재구성', 'Semantic reconstruction')}>
            <div className="sv-flow">
              <span className="sv-box">AST</span>
              <span className="sv-plus">+</span>
              <span className="sv-box">LLM</span>
              <span className="sv-arrow">→</span>
              <span className="sv-box hl">{t('의도·로직 보존', 'Intent preserved')}</span>
            </div>
          </StepVisual>
        </div>

        {/* 03 Load */}
        <div className="step-row reveal from-left">
          <div className="step-txt">
            <span className="step-no">03</span>
            <h3>
              Load — {t('관리형 백엔드에 프로비저닝, 즉시 운영', 'Provision onto a managed backend — operating from day one')}
            </h3>
            <ul>
              <li>
                {t(
                  <>재구성된 서비스를 <b>관리형 백엔드에 자동 프로비저닝</b></>,
                  <>The rebuilt service is <b>auto-provisioned onto a managed backend</b></>,
                )}
              </li>
              <li>
                {t(
                  <>내장 BaaS로 <b>회원·결제·예약·문의</b>를 자동 연결</>,
                  <>Built-in BaaS wires up <b>members, payments, bookings and inquiries</b> automatically</>,
                )}
              </li>
              <li>
                {t(
                  <>정적 페이지가 아니라, <b>처음부터 거래가 발생하는 상용 서비스</b>로 기동</>,
                  <>Not a static page — it launches as <b>a commercial service transacting from day one</b></>,
                )}
              </li>
            </ul>
          </div>
          <StepVisual label={t('BaaS 자동 연결', 'BaaS auto-wired')}>
            <div className="sv-baas">
              <span className="sv-chip">{t('회원', 'Auth')}</span>
              <span className="sv-chip">{t('결제', 'Payments')}</span>
              <span className="sv-chip">{t('예약', 'Bookings')}</span>
              <span className="sv-chip">{t('문의', 'Inquiries')}</span>
            </div>
          </StepVisual>
        </div>
      </div>
    </section>
  )
}
