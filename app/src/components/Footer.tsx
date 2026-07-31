import { useState } from 'react'
import { useLang } from '../i18n'
import logo from '../assets/logo.png'

/* 독립 랜딩용 간소 푸터 — 페이지 내 앵커 + 문의처만. 사업자 정보(법정 표기)는 유지 */
const GROUPS = [
  {
    ko: '바로가기',
    en: 'Quick links',
    links: [
      { href: '#demo', ko: '라이브 데모', en: 'Live demo' },
      { href: '#process', ko: '동작 원리', en: 'How it works' },
      { href: '#impact', ko: '성과 지표', en: 'Impact' },
      { href: '#trust', ko: '특허·신뢰', en: 'IP & trust' },
    ],
  },
  {
    ko: '문의',
    en: 'Contact',
    links: [
      { href: 'https://aiapp.help', ko: 'AiApp 홈 ↗', en: 'AiApp Home ↗', blank: true },
      { href: 'mailto:help@aiapp.help', ko: 'help@aiapp.help', en: 'help@aiapp.help' },
      { href: 'tel:070-8648-2750', ko: '070-8648-2750', en: '+82-70-8648-2750' },
    ],
  },
]

export function Footer() {
  const { t } = useLang()
  const [openGroup, setOpenGroup] = useState<number | null>(null)
  return (
    <footer>
      <div className="wrap">
        <div className="foot-grid foot-grid-slim">
          <div>
            <a className="logo" href="./">
              <img className="logo-img" src={logo} alt="AiApp" />
            </a>
            <p className="foot-desc">
              {t(
                <>
                  멈춘 웹사이트·앱을 원본 그대로 되살리는
                  <br />
                  시맨틱 ETL 재생 엔진
                </>,
                <>
                  The Semantic ETL Revival Engine —
                  <br />
                  bringing stalled sites back, originals preserved
                </>,
              )}
            </p>
          </div>
          {GROUPS.map((g, i) => (
            <div key={g.ko} className={openGroup === i ? 'open' : undefined}>
              <h6
                className={`foot-toggle${openGroup === i ? ' open' : ''}`}
                onClick={() => setOpenGroup(openGroup === i ? null : i)}
              >
                {t(g.ko, g.en)}
              </h6>
              {g.links.map((l) => (
                <a
                  key={l.ko}
                  href={l.href}
                  target={l.blank ? '_blank' : undefined}
                  rel={l.blank ? 'noopener' : undefined}
                >
                  {t(l.ko, l.en)}
                </a>
              ))}
            </div>
          ))}
        </div>
        <div className="biz">
          <p className="biz-line">
            <span>본사. 부산광역시 금정구 부산대학로50번길 68, 4층 404호(장전동, 피엔유에이벡)</span>
            <span>연구소. 부산광역시 연제구 연제로 24, 206호</span>
          </p>
          <p className="biz-line">
            <span>상호명. (주)엠바스</span>
            <span>CEO. 김정현</span>
            <span>E-mail. help@aiapp.help</span>
            <span>연락처. 070-8648-2750</span>
            <span>사업자 번호. 128-88-02089</span>
          </p>
          <p className="biz-line">
            <span>
              통신판매업신고번호. 제2026-부산금정-0312호
              <a className="biz-check" href="https://www.ftc.go.kr/bizCommPop.do?wrkr_no=1288802089" target="_blank" rel="noopener">
                사업자정보확인
              </a>
            </span>
            <span>통신판매중개업자. 주식회사 엠바스</span>
          </p>
          <p className="biz-copy">COPYRIGHT(c) 2025 AIAPP. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
