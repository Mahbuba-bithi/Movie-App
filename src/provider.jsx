'use client'

import { ThemeProvider } from "next-themes"

export default function Providers({ children }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <div className="min-h-screen bg-white text-gray-700 transition-colors duration-300 select-none dark:bg-gray-700 dark:text-gray-200">
        {children}
      </div>
    </ThemeProvider>
  )
}
