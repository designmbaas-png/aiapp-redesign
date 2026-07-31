import { useLang } from '../i18n'

export function Operate() {
  const { t } = useLang()
  const feats = [
    {
      ko: ['대화 한 줄 편집', '콘텐츠·상품·공지를 자연어 요청으로 즉시 반영합니다. 설정 화면을 뒤질 필요가 없습니다.'],
      en: ['Edit with one sentence', 'Content, products and notices update from a natural-language request. No settings to dig through.'],
      icon: <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />,
    },
    {
      ko: ['버전 저장·롤백', '모든 편집이 버전으로 저장됩니다. 잘못 바꿔도 이전 상태로 되돌릴 수 있어 부담이 없습니다.'],
      en: ['Versioning & rollback', 'Every edit is saved as a version. Change something wrong? Roll it back — self-editing carries no risk.'],
      icon: <><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" /><path d="M3 3v5h5M12 7v5l4 2" /></>,
    },
    {
      ko: ['기술 용어 없는 UI', '테이블·배포·캐시 같은 말은 등장하지 않습니다. 말로 설명하면 적용됩니다.'],
      en: ['No jargon in the UI', 'No tables, deploys or caches on screen. Describe it in words, and it applies.'],
      icon: <><circle cx="12" cy="12" r="10" /><path d="M9.1 9a3 3 0 0 1 5.82 1c0 2-3 3-3 3M12 17h.01" /></>,
    },
  ]
  return (
    <section className="section etl-operate" id="operate">
      <div className="wrap">
        <div className="center">
          <p className="eyebrow reveal">AFTER REVIVAL</p>
          <h2 className="h2 reveal">
            {t(
              <>재생 이후 — <span className="op-grad">개발자 없이 운영</span></>,
              <>After revival — <span className="op-grad">run it without developers</span></>,
            )}
          </h2>
          <p className="sub reveal">
            {t(
              'ETL 재생은 시작점일 뿐입니다. 그 뒤의 운영이 실제 가치입니다.',
              'Revival is only the starting point. The real value is in what comes after.',
            )}
          </p>
        </div>

        <div className="op2">
          {/* 좌: 기능 리스트 */}
          <div className="op2-feats stagger reveal">
            {feats.map((f, i) => (
              <div className="op2-feat" key={i}>
                <span className="op2-ic">
                  <svg viewBox="0 0 24 24" width="21" height="21" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    {f.icon}
                  </svg>
                </span>
                <div>
                  <h3>{t(f.ko[0], f.en[0])}</h3>
                  <p>{t(f.ko[1], f.en[1])}</p>
                </div>
              </div>
            ))}
          </div>

          {/* 우: 채팅 운영 목업 */}
          <div className="op2-chat reveal from-right" aria-hidden="true">
            <div className="op2-chat-head">
              <span className="op2-dot" />
              <span className="op2-dot" />
              <span className="op2-dot" />
              <span className="op2-chat-title">{t('AiApp 채팅 — 카페 하루', 'AiApp Chat — Cafe Haru')}</span>
              <span className="op2-live">LIVE</span>
            </div>
            <div className="op2-chat-body">
              <div className="op2-bubble user">{t('"여름 시즌 메뉴로 배너 바꿔줘"', '"Swap the banner for the summer menu"')}</div>
              <div className="op2-bubble ai">
                {t('배너를 교체했어요 — 사이트에 바로 반영됐습니다.', 'Banner replaced — live on the site now.')}
              </div>
              <div className="op2-bubble user">{t('"8월 첫 주 휴가 공지도 올려줘"', '"Post a notice for the first week of August, too"')}</div>
              <div className="op2-bubble ai">
                {t('공지를 등록했어요 — 팝업으로 안내됩니다.', 'Notice posted — it shows as a popup.')}
                <span className="op2-ver">{t('휴무 중에도 문의는 온라인으로 계속 접수돼요', 'Inquiries keep coming in online during the break')}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
