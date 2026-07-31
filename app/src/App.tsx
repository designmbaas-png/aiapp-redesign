import { LangProvider } from './i18n'
import { useRevealObserver } from './hooks/useReveal'
import { LoginModalProvider } from './components/LoginModal'
import { Gnb } from './components/Gnb'
import { Footer } from './components/Footer'
import { Hero } from './sections/Hero'
import { Demo } from './sections/Demo'
import { Problem } from './sections/Problem'
import { Concept } from './sections/Concept'
import { Process } from './sections/Process'
import { Operate } from './sections/Operate'
import { Architecture } from './sections/Architecture'
import { Stats } from './sections/Stats'
import { Compare } from './sections/Compare'
import { TrustCta } from './sections/TrustCta'

function Page() {
  useRevealObserver()
  return (
    <>
      <Gnb />
      <main>
        <Hero />
        <Demo />
        <Problem />
        <Concept />
        <Process />
        <Operate />
        <Architecture />
        <Stats />
        <Compare />
        <TrustCta />
      </main>
      <Footer />
    </>
  )
}

export default function App() {
  return (
    <LangProvider>
      <LoginModalProvider>
        <Page />
      </LoginModalProvider>
    </LangProvider>
  )
}
