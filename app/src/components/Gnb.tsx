import { useEffect, useState } from 'react'
import { useLang } from '../i18n'
import { useLogin } from './LoginModal'
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
   히어로(네이비) 위에서는 투명, 히어로를 지나면 배경이 생김 */
export function Gnb() {
  const { lang, setLang, t } = useLang()
  const { openLogin } = useLogin()
  const [solid, setSolid] = useState(false)

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
          <a className="site-link" href="https://aiapp.help" target="_blank" rel="noopener">
            {t('AiApp 홈', 'AiApp Home')}
            <svg viewBox="0 0 24 24" width="11" height="11" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M7 17 17 7M8 7h9v9" />
            </svg>
          </a>
          <div className="lang-seg" role="group" aria-label={t('언어 선택', 'Language')}>
            <button type="button" className={lang === 'ko' ? 'on' : undefined} onClick={() => setLang('ko')} aria-pressed={lang === 'ko'}>
              KR
            </button>
            <button type="button" className={lang === 'en' ? 'on' : undefined} onClick={() => setLang('en')} aria-pressed={lang === 'en'}>
              EN
            </button>
          </div>
          <button className="btn btn-accent" type="button" onClick={() => openLogin('signup')}>
            {t('재생 진단 문의', 'Request a scan')}
          </button>
        </div>
      </div>
    </header>
  )
}
