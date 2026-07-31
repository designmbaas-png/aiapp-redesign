import { useLang } from '../i18n'

export function Concept() {
  const { t } = useLang()
  const letters = [
    {
      l: 'E',
      name: 'Extract',
      ko: ['추출', '원본에서 데이터를 뽑아냅니다'],
      en: ['Extract', 'Pull the data out of the original'],
    },
    {
      l: 'T',
      name: 'Transform',
      ko: ['변환', '새 시스템이 이해할 형태로 바꿉니다'],
      en: ['Transform', 'Convert it into a form the new system understands'],
    },
    {
      l: 'L',
      name: 'Load',
      ko: ['적재', '새 시스템에 실어 넣습니다'],
      en: ['Load', 'Ship it into the new system'],
    },
  ]
  return (
    <section className="section" id="concept">
      <div className="wrap center">
        <p className="eyebrow reveal">WHAT IS ETL</p>
        <h2 className="h2 reveal">{t('ETL이란 무엇인가', 'What is ETL?')}</h2>
        <p className="sub reveal">
          {t(
            <>ETL은 데이터 엔지니어링의 표준 개념으로, <span className="nb">세 단계</span>의 앞글자입니다.</>,
            <>ETL is a standard concept in data engineering — an acronym of three stages.</>,
          )}
        </p>
        <div className="etl-letters stagger reveal">
          {letters.map((x) => (
            <div className="etl-letter-card" key={x.l}>
              <span className="etl-letter">{x.l}</span>
              <h3>{x.name}</h3>
              <p className="etl-letter-ko">{t(x.ko[0], x.en[0])}</p>
              <p className="etl-letter-desc">{t(x.ko[1], x.en[1])}</p>
            </div>
          ))}
        </div>
        <div className="semantic-box reveal">
          <span className="semantic-badge">Semantic</span>
          <p>
            {t(
              <>
                AiApp의 ETL이 일반 ETL과 다른 지점은 <span className="nb"><b>"시맨틱(의미 기반)"</b>입니다.</span> 데이터 값만 옮기는 게
                아니라, <b>코드가 무엇을 하려던 것인지 — 의도와 문맥까지 해석해서</b> 옮깁니다.
              </>,
              <>
                What sets AiApp's ETL apart is the word <b>"semantic."</b> It doesn't just move data values —
                it interprets <b>what the code was trying to do: the intent and the context</b> — and carries
                that over too.
              </>,
            )}
          </p>
        </div>
      </div>
    </section>
  )
}
