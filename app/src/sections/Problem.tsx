import { useLang } from '../i18n'

export function Problem() {
  const { t } = useLang()
  const cards = [
    {
      ko: ['제작 업체가 사라짐', '수정할 사람이 없음'],
      en: ['The agency is gone', 'No one left to make changes'],
      icon: <path d="M3 21h18M5 21V7l7-4 7 4v14M9 21v-6h6v6M9 10h.01M15 10h.01" />,
    },
    {
      ko: ['기술 스택 노후화', '한 줄도 못 바꿈'],
      en: ['The stack is obsolete', "Can't change a single line"],
      icon: <path d="m18 16 4-4-4-4M6 8l-4 4 4 4M14.5 4l-5 16" />,
    },
    {
      ko: ['서비스 멈춤·방치', '매출·예약 유입 중단'],
      en: ['Service stalled & abandoned', 'Sales and bookings stop flowing'],
      icon: <><circle cx="12" cy="12" r="10" /><path d="M10 8h.01M14 8h.01M9 16c.8-1 1.8-1.5 3-1.5s2.2.5 3 1.5" /></>,
    },
    {
      ko: ['복구를 문의하면', '수천만 원짜리 "전면 재제작" 견적'],
      en: ['Ask for a fix, and you get', 'a full-rebuild quote worth tens of thousands of dollars'],
      icon: <path d="M12 8v4M12 16h.01M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z" />,
    },
  ]
  return (
    <section className="section etl-problem" id="problem">
      <div className="wrap">
        <div className="center">
          <p className="eyebrow reveal">PROBLEM</p>
          <h2 className="h2 reveal">{t("왜 '재생'인가", 'Why revival?')}</h2>
          <p className="sub reveal">
            {t(
              '소상공인에게 웹사이트·앱은 매출·예약·고객 신뢰가 지나가는 통로입니다. 그런데 대부분은 이걸 스스로 유지하지 못합니다.',
              'For small businesses, the website is where sales, bookings and trust flow through. Yet most cannot maintain it on their own.',
            )}
          </p>
        </div>
        <div className="prob-grid stagger reveal">
          {cards.map((c, i) => (
            <div className="prob-card" key={i}>
              <span className="prob-ic">
                <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  {c.icon}
                </svg>
              </span>
              <h3>{t(c.ko[0], c.en[0])}</h3>
              <p>{t(c.ko[1], c.en[1])}</p>
            </div>
          ))}
        </div>
        <div className="prob-callout reveal">
          <p className="prob-quote">
            {t(
              <>기존 노코드·AI 빌더는 <b>빈 템플릿에서 새로 만들 뿐</b>, 이미 있는 사이트를 복구하지 않습니다. 시장의 모든 선택지가 <i>"다시 만들어야 한다"</i>는 전제를 공유합니다.</>,
              <>Existing no-code and AI builders only <b>start from a blank template</b> — they don't recover what you already have. Every option on the market shares the same premise: <i>"you must rebuild."</i></>,
            )}
          </p>
          <p className="prob-answer">
            {t(
              <>AiApp은 그 전제를 바꿉니다 — 작업 단위를 <span className="nb"><b>재제작(rebuild)</b>에서</span> <span className="nb"><b>재생(revive)</b>으로.</span></>,
              <>AiApp changes that premise — shifting the unit of work from <b>rebuild</b> to <b>revive</b>.</>,
            )}
          </p>
        </div>
      </div>
    </section>
  )
}
