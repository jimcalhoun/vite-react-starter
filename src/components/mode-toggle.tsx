import { Moon, Sun } from 'lucide-react'

import { Button } from './ui/button'
import { useTheme } from './theme-provider'

export function ModeToggle() {
  const { theme, setTheme } = useTheme()
  return (
    <Button
      variant={'outline'}
      size={'icon'}
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      {theme === 'light' ? (
        <Sun className="h-6 w-6" />
      ) : (
        <Moon className="h-6 w-6" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
