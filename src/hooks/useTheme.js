import { useEffect, useState } from 'react'

// Dark matches the channel branding; remember the viewer's choice when storage is available.
function getInitialTheme() {
  try {
    const saved = localStorage.getItem('theme')
    if (saved) return saved
  } catch {
    // Storage blocked (private mode etc.) — fall back to the default
  }
  return 'dark'
}

export default function useTheme() {
  const [theme, setTheme] = useState(getInitialTheme)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    try {
      localStorage.setItem('theme', theme)
    } catch {
      // Ignore — the theme still applies for this visit
    }
  }, [theme])

  const toggleTheme = () => setTheme((t) => (t === 'light' ? 'dark' : 'light'))

  return [theme, toggleTheme]
}
