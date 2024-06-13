import { Typography, Button } from "@mui/material"
import { useColorScheme } from '@mui/material/styles'


function ModeToggle() {
  const { mode, setMode } = useColorScheme()
  return (
    <Button
      onClick={() => {
        setMode(mode === 'light' ? 'dark' : 'light')
      }}
    >
      {mode === 'light' ? 'Turn dark' : 'Turn light'}
    </Button>
  )
}


function App() {
  return (
    <>
      <ModeToggle />
      <Button variant="contained" color="secondary">Contained</Button>
    </>
  )
}

export default App
