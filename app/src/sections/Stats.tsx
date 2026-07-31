import { useEffect, useRef, useState } from 'react'
import { useLang } from '../i18n'

/** 뷰포트 진입 시 0 → target 카운트업 */
function Counter({ target }: { target: number }) {
  const ref = useRef<HTMLSpanElement>(null)
  const [val, setVal] = useState(0)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([e]) => {
        if (!e.isIntersecting) return
        io.disconnect()
        const t0 = performance.now()
        const dur = 1200
        const tick = (now: number) => {
          const p = Math.min(1, (now - t0) / dur)
          setVal(Math.round(target * (1 - Math.pow(1 - p, 3))))
          if (p < 1) requestAnimationFrame(tick)
        }
        requestAnimationFrame(tick)
      },
      { threshold: 0.4 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [target])
  return <span ref={ref}>{val}</span>
}

export function Stats() {
  const { t } = useLang()
  return (
    <section className="section etl-stats" id="impact">
      <div className="wrap">
        {/* 에디토리얼 헤더 — 좌측 타이틀 · 우측 각주 */}
        <div className="ed-head reveal">
          <div>
            <p className="eyebrow">IMPACT</p>
            <h2 className="h2">{t('숫자로 보는 재생', 'Revival in numbers')}</h2>
          </div>
          <p className="ed-foot">
            {t(
              <>* 모든 수치는 자사 내부<br />측정치(company data) 기준</>,
              <>* All figures based on<br />internal company data</>,
            )}
          </p>
        </div>

        {/* 오버사이즈 타이포 + 헤어라인 그리드 */}
        <div className="ed-grid stagger reveal">
          <div className="ed-cell">
            <div className="ed-num">
              1–3<em>{t('일', 'd')}</em>
            </div>
            <div className="ed-label">{t('재생 소요 기간', 'Time to revival')}</div>
            <div className="ed-vs">{t('기존 전면 재제작 3~6개월', 'vs. 3–6 months for a full rebuild')}</div>
          </div>
          <div className="ed-cell">
            <div className="ed-num">
              <Counter target={90} />
              <em>%+</em>
            </div>
            <div className="ed-label">{t('작업 시간 단축', 'Less production time')}</div>
            <div className="ed-vs">{t('비개발자 1명이 수행', 'Done by one non-developer')}</div>
          </div>
          <div className="ed-cell">
            <div className="ed-num">
              3–5<em>×</em>
            </div>
            <div className="ed-label">{t('생성 속도', 'Generation speed')}</div>
            <div className="ed-vs">{t('멀티에이전트 병렬 생성 기준', 'via parallel multi-agent generation')}</div>
          </div>
          <div className="ed-cell">
            <div className="ed-num">
              <Counter target={30} />
              <em>%</em>
            </div>
            <div className="ed-label">{t('운영비 절감', 'Lower operating cost')}</div>
            <div className="ed-vs">{t('서버리스 아키텍처 기준', 'on serverless architecture')}</div>
          </div>
        </div>
      </div>
    </section>
  )
}
