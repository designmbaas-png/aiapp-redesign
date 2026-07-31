import { useEffect, useRef, useState } from 'react'
import { useLang } from '../i18n'

/* 데모 러너(참고/ETL-demo)의 기준 해상도 — iframe을 이 크기로 렌더한 뒤 컨테이너에 맞춰 scale */
const DEMO_W = 1280
const DEMO_H = 720
/* 러너(public/demo) 내용을 수정할 때마다 +1 — iframe 문서 캐시 무효화용 */
const DEMO_VERSION = 3
/* 러너 전체 타임라인 길이(초) — 진행 바 표시용 근사치 */
const DEMO_DURATION = 76

export function Demo() {
  const { lang, t } = useLang()
  const shellRef = useRef<HTMLDivElement>(null)
  const stageRef = useRef<HTMLDivElement>(null)
  const [scale, setScale] = useState(0.5)
  const [started, setStarted] = useState(false)
  const [run, setRun] = useState(0)

  // 심사위원이 섹션을 보는 순간 데모가 처음부터 시작되도록 뷰포트 진입 시 마운트
  useEffect(() => {
    const el = stageRef.current
    if (!el) return
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setStarted(true)
          io.disconnect()
        }
      },
      { threshold: 0.35 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  useEffect(() => {
    const el = stageRef.current
    if (!el) return
    const ro = new ResizeObserver(() => setScale(el.clientWidth / DEMO_W))
    ro.observe(el)
    return () => ro.disconnect()
  }, [])

  const src = `${lang === 'ko' ? './demo/index.html' : './demo/index_en.html'}?v=${DEMO_VERSION}`

  const steps = [
    {
      no: '01',
      name: t('재생', 'Revive'),
      desc: t('주소 한 줄 → 데이터·브랜드를 보존한 채 재구축', 'One URL → rebuilt with data & brand preserved'),
    },
    {
      no: '02',
      name: t('운영', 'Operate'),
      desc: t('첫날부터 견적 인박스로 거래가 도착', 'Quotes land in your inbox from day one'),
    },
    {
      no: '03',
      name: t('유지', 'Maintain'),
      desc: t('문구 수정·신제품·공지 — 채팅 한 줄, 롤백 지원', 'Copy edits, new products, notices — one chat line, with rollback'),
    },
  ]

  return (
    <section className="section etl-demo" id="demo">
      <div className="wrap center">
        <p className="eyebrow reveal">LIVE DEMO</p>
        <h2 className="h2 reveal">
          {t('되살리는 것에서, 스스로 운영하는 것까지', 'From revival to running it yourself')}
        </h2>
        <p className="sub reveal">
          {t(
            '70초 자동 데모 — 10년 방치된 홈페이지가 주소 한 줄로 재생되고, 첫날부터 견적이 도착하고, 문구 수정·신제품 등록·휴가 공지까지 채팅 한 줄로 끝납니다. 개발자 없이.',
            'A 70-second auto-playing demo — a site abandoned for 10 years is revived from one URL, quotes arrive on day one, and copy edits, new products and notices all take a single chat message. No developers.',
          )}
        </p>

        <div className="demo-shell reveal zoom" ref={shellRef}>
          <div className="demo-stage" ref={stageRef}>
            {started ? (
              <iframe
                key={`${lang}-${run}`}
                src={src}
                title={t('ETL 재생 데모', 'ETL revival demo')}
                style={{ width: DEMO_W, height: DEMO_H, transform: `scale(${scale})` }}
                scrolling="no"
              />
            ) : (
              <div className="demo-wait" aria-hidden="true">
                <span className="demo-wait-pulse" />
                {t('스크롤하면 데모가 시작됩니다', 'Demo starts when scrolled into view')}
              </div>
            )}
          </div>
          <div className="demo-bar">
            {started && (
              <span
                key={`prog-${lang}-${run}`}
                className="demo-progress"
                style={{ ['--demo-dur' as string]: `${DEMO_DURATION}s` }}
                aria-hidden="true"
              >
                <i />
              </span>
            )}
            <span className="demo-ctl">
              <button
                type="button"
                onClick={() => {
                  setStarted(true)
                  setRun((r) => r + 1)
                }}
              >
                ↺ {t('처음부터', 'Replay')}
              </button>
              <button
                type="button"
                onClick={() => {
                  const el = shellRef.current
                  if (!el) return
                  if (document.fullscreenElement) document.exitFullscreen()
                  else el.requestFullscreen?.()
                }}
              >
                ⛶ {t('전체 화면', 'Fullscreen')}
              </button>
            </span>
          </div>
        </div>

        <div className="demo-steps stagger reveal">
          {steps.map((s) => (
            <div className="demo-step" key={s.no}>
              <span className="demo-step-no">{s.no}</span>
              <div>
                <h3>{s.name}</h3>
                <p>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
