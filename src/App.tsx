import { useState } from 'react'
import { Button } from './components/ui/button'
import { ModeToggle } from './components/mode-toggle'

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="fixed right-4 top-4">
        <ModeToggle />
      </div>
      <div className="flex flex-col items-center text-center">
        <div className="flex">
          <a href="https://vitejs.dev" target="_blank">
            <img
              src={viteLogo}
              className="h-24 p-6 transition-[filter] hover:drop-shadow-[0_0_2rem_#646cffaa]"
              alt="Vite logo"
            />
          </a>
          <a href="https://react.dev" target="_blank">
            <img
              src={reactLogo}
              className="h-24 animate-[spin_20s_linear_infinite] p-6 transition-[filter] hover:drop-shadow-[0_0_2rem_#646cffaa]"
              alt="React logo"
            />
          </a>
        </div>
        <h1 className="mb-2 text-5xl">Vite + React</h1>
        <p className="mb-6 text-muted-foreground">
          <a href="https://www.typescriptlang.org/" className="hover:underline">
            Typescript
          </a>
          <span> + </span>
          <a href="https://tailwindcss.com/" className="hover:underline">
            Tailwindcss
          </a>
          <span> + </span>
          <a href="https://ui.shadcn.com/" className="hover:underline">
            Shadcn-UI
          </a>
        </p>
        <div className="p-4">
          <Button
            className="text-md px-5 py-6 hover:border-[#646cff]"
            variant={'outline'}
            onClick={() => setCount((count) => count + 1)}
          >
            count is {count}
          </Button>
          <p className="py-4">
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </div>
        <p className="text-muted-foreground">
          Click on the Vite and React logos to learn more
        </p>
      </div>
    </>
  )
}

export default App
