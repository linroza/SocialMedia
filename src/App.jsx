import { Box, createTheme, Stack } from '@mui/material'
import './App.css'
import Sidebar from './components/components/Sidebar'
import Feed from './components/components/Feed'
import Rightbar from './components/components/Rightbar'
import Navbar from './components/components/Navbar'
import { Add } from './components/components/Add'
import { useMemo, useState } from 'react'
import { ThemeProvider } from '@emotion/react'


function App() {
  const [mode, setMode] = useState("light")
  const darktheme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: mode,
        },
      }),
    [mode] 
  );
  return (
    <ThemeProvider theme={darktheme}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <Navbar />
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <Sidebar setMode={setMode} mode={mode} />
          <Feed />
          <Rightbar />
        </Stack>
        <Add />
      </Box>
    </ThemeProvider>

  )
}

export default App
