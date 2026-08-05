import { useEffect, useRef, useState } from 'react'
import { useLang } from '../i18n'
import { STUDIO_URL } from '../config'
import logo from '../assets/logo.png'
import logoWhite from '../assets/logo-white.svg'

const GNB_H = 64

/* 페이지 내 앵커 내비 — 긴 랜딩에서 섹션 재방문용 */
const ANCHORS = [
  { href: '#demo', ko: '데모', en: 'Demo' },
  { href: '#process', ko: '동작 원리', en: 'How it works' },
  { href: '#operate', ko: '운영', en: 'Operate' },
  { href: '#impact', ko: '성과', en: 'Impact' },
  { href: '#trust', ko: '특허', en: 'IP' },
]

/* ETL 랜딩은 독립 페이지 성격 — 기존 사이트 메뉴·드로어·모두의창업 배지 없이
   로고 · 앵커 내비 · KR/EN 토글 · 문의 CTA만 유지.
   히어로(네이비) 위에서는 투명, 히어로를 지나면 배경이 생김.
   모바일(≤880)에서는 앵커 내비가 숨겨지므로 햄버거 드로어로 제공 */
export function Gnb() {
  const { lang, setLang, t } = useLang()
  const [solid, setSolid] = useState(false)
  const [drawer, setDrawer] = useState(false)
  const toggleRef = useRef<HTMLButtonElement>(null)
  const closeRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const hero = document.querySelector('.etl-hero')
    if (!hero) {
      setSolid(true)
      return
    }
    // 히어로가 GNB 높이 아래로 조금이라도 보이면 투명, 완전히 지나가면 배경 등장.
    // scroll 리스너 + IO 이중화 — 어느 경로든 같은 rect 계산이라 결과 동일
    const update = () => setSolid(hero.getBoundingClientRect().bottom <= GNB_H)
    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    const io = new IntersectionObserver(update, { rootMargin: `-${GNB_H}px 0px 0px 0px`, threshold: 0 })
    io.observe(hero)
    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
      io.disconnect()
    }
  }, [])

  // 드로어 열림: 스크롤 잠금 + ESC 닫기 + 닫기 버튼으로 초기 포커스,
  // 닫힘: 햄버거 버튼으로 포커스 복귀
  useEffect(() => {
    if (!drawer) return
    const toggleEl = toggleRef.current
    document.body.classList.add('nav-open')
    closeRef.current?.focus()
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setDrawer(false)
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.classList.remove('nav-open')
      window.removeEventListener('keydown', onKey)
      toggleEl?.focus()
    }
  }, [drawer])

  const close = () => setDrawer(false)

  const langSeg = (
    <div className="lang-seg" role="group" aria-label={t('언어 선택', 'Language')}>
      <button type="button" className={lang === 'ko' ? 'on' : undefined} onClick={() => setLang('ko')} aria-pressed={lang === 'ko'}>
        KR
      </button>
      <button type="button" className={lang === 'en' ? 'on' : undefined} onClick={() => setLang('en')} aria-pressed={lang === 'en'}>
        EN
      </button>
    </div>
  )

  const siteLink = (
    <a className="site-link" href="https://aiapp.help" target="_blank" rel="noopener">
      {t('AiApp 홈', 'AiApp Home')}
      <svg viewBox="0 0 24 24" width="11" height="11" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M7 17 17 7M8 7h9v9" />
      </svg>
    </a>
  )

  return (
    <header className={`gnb${solid ? '' : ' gnb-clear'}`}>
      <div className="gnb-in">
        <a className="logo" href="./">
          <img className="logo-img" src={solid ? logo : logoWhite} alt="AiApp" />
        </a>
        <nav>
          {ANCHORS.map((a) => (
            <a key={a.href} href={a.href}>
              {t(a.ko, a.en)}
            </a>
          ))}
        </nav>
        <div className="util">
          {siteLink}
          {langSeg}
          <a className="btn btn-accent" href={STUDIO_URL}>
            {t('재생 진단 시작', 'Start revival scan')}
          </a>
        </div>
        <button
          className="gnb-toggle"
          type="button"
          ref={toggleRef}
          onClick={() => setDrawer(true)}
          aria-expanded={drawer}
          aria-controls="navDrawer"
          aria-label={t('메뉴 열기', 'Open menu')}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden="true">
            <path d="M4 7h16M4 12h16M4 17h16" />
          </svg>
        </button>
      </div>

      <button className={`nav-overlay${drawer ? ' on' : ''}`} type="button" tabIndex={-1} aria-hidden="true" onClick={close} />
      <aside id="navDrawer" className={`nav-drawer${drawer ? ' on' : ''}`} aria-label={t('메뉴', 'Menu')} inert={!drawer || undefined}>
        <div className="nav-drawer-head">
          <img className="logo-img" src={logo} alt="AiApp" />
          <button className="nav-drawer-close" type="button" ref={closeRef} onClick={close} aria-label={t('메뉴 닫기', 'Close menu')}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden="true">
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </button>
        </div>
        <nav className="nav-drawer-links">
          {ANCHORS.map((a) => (
            <a key={a.href} href={a.href} onClick={close}>
              {t(a.ko, a.en)}
            </a>
          ))}
        </nav>
        <div className="nav-drawer-foot">
          {langSeg}
          <div className="nav-drawer-auth">
            <a className="btn btn-accent" href={STUDIO_URL} onClick={close}>
              {t('재생 진단 시작', 'Start revival scan')}
            </a>
            {siteLink}
          </div>
        </div>
      </aside>
    </header>
  )
}
