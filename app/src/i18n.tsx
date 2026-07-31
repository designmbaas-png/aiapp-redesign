import { createContext, useContext, useEffect, useState } from 'react'
import type { ReactNode } from 'react'

export type Lang = 'ko' | 'en'

const LangContext = createContext<{ lang: Lang; setLang: (l: Lang) => void }>({
  lang: 'ko',
  setLang: () => {},
})

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(() => {
    // 우선순위: ?lang=en|ko 파라미터(공유 링크) → 저장된 선택 → 브라우저 언어(비한국어 = EN, CES 심사위원 대응)
    const param = new URLSearchParams(location.search).get('lang')
    if (param === 'en' || param === 'ko') return param
    const saved = localStorage.getItem('aiapp-lang')
    if (saved === 'en' || saved === 'ko') return saved
    return navigator.language?.toLowerCase().startsWith('ko') ? 'ko' : 'en'
  })
  useEffect(() => {
    document.documentElement.lang = lang
    localStorage.setItem('aiapp-lang', lang)
  }, [lang])
  return <LangContext.Provider value={{ lang, setLang }}>{children}</LangContext.Provider>
}

/** t(한국어, 영어) — 현재 언어에 맞는 값을 반환. 문자열뿐 아니라 JSX도 가능 */
export function useLang() {
  const { lang, setLang } = useContext(LangContext)
  const t = <T,>(ko: T, en: T): T => (lang === 'ko' ? ko : en)
  return { lang, setLang, t }
}
