import { useEffect, useState } from 'react'

const getInitialTheme = () => {
  if (typeof window === 'undefined') return 'dark'

  const saved = window.localStorage.getItem('jair-portfolio-theme')
  if (saved === 'light' || saved === 'dark') return saved

  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

export function useTheme() {
  const [theme, setTheme] = useState(getInitialTheme)

  useEffect(() => {
    const root = document.documentElement
    root.classList.toggle('dark', theme === 'dark')
    window.localStorage.setItem('jair-portfolio-theme', theme)

    const metaTheme = document.querySelector('meta[name="theme-color"]')
    metaTheme?.setAttribute('content', theme === 'dark' ? '#060912' : '#f8fafc')
  }, [theme])

  const toggleTheme = () => setTheme((current) => (current === 'dark' ? 'light' : 'dark'))

  return { theme, toggleTheme }
}
