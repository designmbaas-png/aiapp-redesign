import { useState } from 'react'
import { useLang } from '../i18n'
import { STUDIO_URL } from '../config'

export function TrustCta() {
  const { t } = useLang()
  const [url, setUrl] = useState('')
  const startScan = () => window.location.assign(STUDIO_URL)

  return (
    <section className="section etl-trust" id="trust">
      <div className="wrap center">
        <p className="eyebrow reveal">IP &amp; TRUST</p>
        <h2 className="h2 reveal">{t('검증된 기술입니다', 'Verified, patented technology')}</h2>
        <div className="trust-badges stagger reveal">
          <div className="trust-badge hl">
            <span className="trust-ic">
              <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M7.21 15 2.66 7.14a2 2 0 0 1 .13-2.2L4.4 2.8A2 2 0 0 1 6 2h12a2 2 0 0 1 1.6.8l1.6 2.14a2 2 0 0 1 .14 2.2L16.79 15M11 12 5.12 2.2M13 12l5.88-9.8M8 7h8" />
                <circle cx="12" cy="17" r="5" />
                <path d="M12 18v-2h-.5" />
              </svg>
            </span>
            <h3>{t('ETL 기반 재생 엔진 등록 특허', 'Registered patent — ETL revival engine')}</h3>
            <p>KR Patent 10-2624044 · {t('대한민국 특허청(KIPO) 등록', 'Registered with KIPO')}</p>
          </div>
          <div className="trust-badge">
            <span className="trust-ic">
              <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z" />
                <path d="M15 2v5h5M9 15l2 2 4-4" />
              </svg>
            </span>
            <h3>{t('특허 2건 등록 · 5건 출원', '2 patents registered · 5 pending')}</h3>
            <p>{t('멈춘 웹서비스를 작동하는 최신 서비스로 재구성하는 영역', 'Covering reconstruction of stalled web services into working modern ones')}</p>
          </div>
          <div className="trust-badge">
            <span className="trust-ic">
              <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="12" cy="8" r="6" />
                <path d="M15.5 13 17 22l-5-3-5 3 1.5-9" />
              </svg>
            </span>
            <h3>{t('상표 등록 완료', 'Trademark registered')}</h3>
            <p>{t('진단 스키마가 축적될수록 커버리지가 계속 향상됩니다', 'Coverage keeps improving as diagnostic schemas accumulate')}</p>
          </div>
        </div>

        {/* 최종 CTA — 히어로와 수미상관 (네이비 + URL 입력) */}
        <div className="final-card reveal zoom">
          <h2>
            {t(
              <>지금, 멈춘 사이트를<br />되살려 보세요</>,
              <>Bring your stalled site<br />back to life — today</>,
            )}
          </h2>
          <div className="url-box final-url">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="url-ic">
              <circle cx="12" cy="12" r="10" />
              <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
            </svg>
            <input
              type="text"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && startScan()}
              placeholder={t('멈춘 사이트 주소를 알려주세요 — https://…', 'Tell us the URL of the stalled site — https://…')}
              aria-label={t('사이트 주소 입력', 'Site URL')}
            />
            <button className="btn btn-accent" type="button" onClick={startScan}>
              {t('재생 진단 시작', 'Start revival scan')}
            </button>
          </div>
          <a className="final-link" href="../index.html">
            {t('AiApp 플랫폼 둘러보기 →', 'Explore the AiApp platform →')}
          </a>
        </div>
      </div>
    </section>
  )
}
