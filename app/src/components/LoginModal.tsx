import { createContext, useCallback, useContext, useEffect, useState } from 'react'
import type { ReactNode } from 'react'
import { useLang } from '../i18n'
import logo from '../assets/logo.png'

type Mode = 'login' | 'signup'

const LoginCtx = createContext<{ openLogin: (mode?: Mode) => void }>({ openLogin: () => {} })

/** 아무 컴포넌트에서나 로그인 모달 열기: const { openLogin } = useLogin() */
export const useLogin = () => useContext(LoginCtx)

export function LoginModalProvider({ children }: { children: ReactNode }) {
  const { t } = useLang()
  const [open, setOpen] = useState(false)
  const [mode, setMode] = useState<Mode>('signup')

  const openLogin = useCallback((m: Mode = 'signup') => {
    setMode(m)
    setOpen(true)
  }, [])
  const close = () => setOpen(false)

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && close()
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open])

  const isLogin = mode === 'login'
  const socials = [
    {
      cls: 'kakao',
      label: t('카카오', 'Kakao'),
      aria: t('카카오로 시작하기', 'Continue with Kakao'),
      svg: (
        <svg viewBox="0 0 24 24" width="26" height="26" aria-hidden="true">
          <path fill="#000000" d="M12 3C6.48 3 2 6.58 2 10.99c0 2.87 1.9 5.38 4.76 6.79-.16.57-.85 3.04-.88 3.24 0 0-.02.15.08.21.1.06.22.01.22.01.28-.04 3.27-2.14 3.79-2.51.66.09 1.34.14 2.03.14 5.52 0 10-3.58 10-7.99C22 6.58 17.52 3 12 3z" />
        </svg>
      ),
    },
    {
      cls: 'naver',
      label: t('네이버', 'Naver'),
      aria: t('네이버로 시작하기', 'Continue with Naver'),
      svg: (
        <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
          <path fill="#FFFFFF" d="M14.5 12.3L9.2 4H4v16h5.5v-8.3L14.8 20H20V4h-5.5z" />
        </svg>
      ),
    },
    {
      cls: 'google',
      label: 'Google',
      aria: t('Google 계정으로 로그인', 'Sign in with Google'),
      svg: (
        <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true">
          <path fill="#4285F4" d="M23.52 12.27c0-.79-.07-1.54-.2-2.27H12v4.51h6.47a5.53 5.53 0 0 1-2.4 3.63v3h3.87c2.26-2.09 3.58-5.17 3.58-8.87z" />
          <path fill="#34A853" d="M12 24c3.24 0 5.96-1.08 7.95-2.91l-3.87-3c-1.08.72-2.45 1.15-4.08 1.15-3.13 0-5.78-2.11-6.73-4.96H1.28v3.09A12 12 0 0 0 12 24z" />
          <path fill="#FBBC05" d="M5.27 14.28a7.2 7.2 0 0 1 0-4.56V6.63H1.28a12 12 0 0 0 0 10.74l3.99-3.09z" />
          <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42A11.97 11.97 0 0 0 12 0 12 12 0 0 0 1.28 6.63l3.99 3.09C6.22 6.86 8.87 4.75 12 4.75z" />
        </svg>
      ),
    },
    {
      cls: 'apple',
      label: 'Apple',
      aria: t('Apple로 계속하기', 'Continue with Apple'),
      svg: (
        <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true">
          <path fill="#FFFFFF" d="M17.05 12.54c-.02-2.06 1.68-3.05 1.76-3.1-.96-1.4-2.45-1.6-2.98-1.62-1.27-.13-2.48.75-3.12.75-.64 0-1.64-.73-2.7-.71-1.39.02-2.67.81-3.38 2.05-1.44 2.5-.37 6.2 1.03 8.23.69 1 1.51 2.11 2.58 2.07 1.04-.04 1.43-.67 2.69-.67 1.25 0 1.61.67 2.7.65 1.12-.02 1.82-1.01 2.5-2.01.79-1.15 1.11-2.27 1.13-2.33-.02-.01-2.17-.83-2.19-3.31zM15.02 6.3c.57-.69.95-1.65.85-2.6-.82.03-1.81.54-2.4 1.23-.53.61-.99 1.59-.86 2.52.91.07 1.84-.46 2.41-1.15z" />
        </svg>
      ),
    },
  ]

  return (
    <LoginCtx.Provider value={{ openLogin }}>
      {children}
      <div
        className={`modal-overlay${open ? ' on' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="loginTitle"
        onClick={(e) => e.target === e.currentTarget && close()}
      >
        <div className="modal-panel">
          <button className="modal-close" onClick={close} aria-label={t('닫기', 'Close')}>
            <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ verticalAlign: 'middle' }}>
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </button>
          <div className="modal-brand">
            <img className="logo-img" src={logo} alt="AiApp" />
          </div>
          <h2 className="modal-title" id="loginTitle">
            {isLogin ? t('다시 만나서 반가워요', 'Welcome back') : t('시작해 볼까요?', "Let's get started")}
          </h2>
          <p className="modal-sub">
            {isLogin
              ? t('3초 만에 로그인하고, 멈춘 사이트를 되살려 보세요.', 'Sign in in seconds and revive your stalled site.')
              : t('가입하고 멈춘 사이트의 재생 진단을 받아보세요.', 'Sign up to get a revival scan of your stalled site.')}
          </p>

          <div className="email-form">
            <input type="email" className="modal-input" placeholder={t('이메일 주소', 'Email address')} aria-label={t('이메일', 'Email')} />
            <input type="password" className="modal-input" placeholder={t('비밀번호', 'Password')} aria-label={t('비밀번호', 'Password')} />
            <button className="btn btn-accent modal-submit" type="button" onClick={close}>
              {isLogin ? t('로그인', 'Sign in') : t('회원가입', 'Sign up')}
            </button>
          </div>

          <div className="modal-divider">
            <span>{t('또는 소셜 계정으로', 'or continue with')}</span>
          </div>

          <div className="social-list">
            {socials.map((s) => (
              <button key={s.cls} className={`social-btn ${s.cls}`} type="button" aria-label={s.aria} onClick={close}>
                <span className="s-logo">{s.svg}</span>
                <span className="s-label">{s.label}</span>
              </button>
            ))}
          </div>

          <p className="modal-foot">
            {isLogin ? (
              <>
                {t('아직 계정이 없으신가요? ', "Don't have an account? ")}
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault()
                    setMode('signup')
                  }}
                >
                  {t('회원가입', 'Sign up')}
                </a>
              </>
            ) : (
              <>
                {t('이미 계정이 있으신가요? ', 'Already have an account? ')}
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault()
                    setMode('login')
                  }}
                >
                  {t('로그인', 'Sign in')}
                </a>
              </>
            )}
          </p>
          <p className="modal-terms">
            {t(
              <>
                계속 진행하면 <a href="#">이용약관</a> 및 <a href="#">개인정보처리방침</a>에 동의하게 됩니다.
              </>,
              <>
                By continuing you agree to our <a href="#">Terms</a> and <a href="#">Privacy Policy</a>.
              </>,
            )}
          </p>
        </div>
      </div>
    </LoginCtx.Provider>
  )
}
