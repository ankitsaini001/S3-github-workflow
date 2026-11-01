import { useEffect } from 'react'

// Fades in every `.reveal` element the first time it scrolls into view.
export default function useRevealOnScroll() {
  useEffect(() => {
    const items = document.querySelectorAll('.reveal')

    if (!('IntersectionObserver' in window)) {
      items.forEach((el) => el.classList.add('visible'))
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12 },
    )

    items.forEach((el, i) => {
      el.style.transitionDelay = `${(i % 3) * 80}ms`
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])
}
