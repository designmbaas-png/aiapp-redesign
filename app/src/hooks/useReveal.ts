import { useEffect } from 'react'

/**
 * .reveal / .stagger 요소 스크롤 리빌 — 기존 사이트 공통 스크립트와 동일 동작.
 * threshold 0: 키 큰 요소도 진입 즉시 노출 (모바일 이슈 대응 규칙 유지)
 */
export function useRevealObserver() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal, .stagger')
    // 옵저버를 못 쓰는 환경에서는 애니메이션 없이 즉시 노출 — 콘텐츠가 opacity:0으로 남는 일 방지
    if (!('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('on'))
      return
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('on')
            io.unobserve(e.target)
          }
        })
      },
      { threshold: 0, rootMargin: '0px 0px -8% 0px' },
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])
}
