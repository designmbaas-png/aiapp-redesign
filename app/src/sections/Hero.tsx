import { useState } from 'react'
import { useLang } from '../i18n'
import { useLogin } from '../components/LoginModal'

export function Hero() {
  const { t } = useLang()
  const { openLogin } = useLogin()
  const [url, setUrl] = useState('')
  const [scanning, setScanning] = useState(false)

  // 파이프라인이 잠깐 반응한 뒤 로그인(가입) 모달로 연결
  const startScan = () => {
    setScanning(true)
    setTimeout(() => {
      openLogin('signup')
      setScanning(false)
    }, 700)
  }

  return (
    <section className="etl-hero">
      <div className="etl-hero-glow" aria-hidden="true" />
      <div className="etl-hero-grid" aria-hidden="true" />
      <div className="wrap etl-hero-in">
        <p className="eyebrow">SEMANTIC ETL REVIVAL ENGINE</p>
        <h1>
          {t(
            <>
              새로 만들지 말고,
              <br />
              <span className="grad">되살리세요</span>
            </>,
            <>
              Revive,
              <br />
              <span className="grad">don't rebuild.</span>
            </>,
          )}
        </h1>
        <p className="etl-lead">
          {t(
            <>
              멈춘 웹사이트·앱을 <b>원본 그대로 보존한 채</b> 최신 스택 위에 다시 세워, 즉시 운영 가능한
              상태로 되살리는 AiApp의 핵심 기술입니다.
            </>,
            <>
              AiApp's core technology takes a stalled website or app as <b>input</b>, preserves its data,
              content and brand, and rebuilds it on a modern stack — ready to operate immediately.
            </>,
          )}
        </p>

        <div className="url-box reveal">
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="url-ic">
            <circle cx="12" cy="12" r="10" />
            <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
          </svg>
          <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && startScan()}
            placeholder={t('멈춘 사이트 주소를 입력해 보세요 — https://…', 'Enter the URL of a stalled site — https://…')}
            aria-label={t('사이트 주소 입력', 'Site URL')}
          />
          <button className="btn btn-accent" type="button" onClick={startScan} disabled={scanning}>
            {scanning ? t('진단 중…', 'Scanning…') : t('재생 진단 시작', 'Start revival scan')}
          </button>
        </div>

        <div className={`pipe reveal${scanning ? ' scanning' : ''}`} aria-hidden="true">
          <div className="pipe-node">
            <span className="pipe-letter">E</span>
            <span className="pipe-name">Extract</span>
            <span className="pipe-desc">{t('추출', 'capture')}</span>
          </div>
          <div className="pipe-link" />
          <div className="pipe-node">
            <span className="pipe-letter">T</span>
            <span className="pipe-name">Transform</span>
            <span className="pipe-desc">{t('변환', 'reinterpret')}</span>
          </div>
          <div className="pipe-link" />
          <div className="pipe-node">
            <span className="pipe-letter">L</span>
            <span className="pipe-name">Load</span>
            <span className="pipe-desc">{t('적재', 'provision')}</span>
          </div>
        </div>

        <div className="hero-chips reveal">
          <span className="hero-chip">
            <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M20 6 9 17l-5-5" />
            </svg>
            {t('ETL 재생 엔진 등록 특허 보유', 'Patented revival engine')}
          </span>
          <span className="hero-chip">
            <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M20 6 9 17l-5-5" />
            </svg>
            {t('원본 데이터·브랜드 보존', 'Original data & brand preserved')}
          </span>
          <span className="hero-chip">
            <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M20 6 9 17l-5-5" />
            </svg>
            {t('평균 1~3일 내 재생*', 'Revived in 1–3 days on average*')}
          </span>
        </div>
      </div>
    </section>
  )
}
