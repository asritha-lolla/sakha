import { ThemeProvider, CssBaseline } from '@mui/material'
import AppRouter from '@shared/components/routes/AppRouter'
import { lightTheme, darkTheme, customTheme1 } from '@shared/config/theme/theme'

const App = () => {
  const theme = 'light'
  const themes = {
    light: lightTheme,
    dark: darkTheme,
    custom1: customTheme1,
  }

  return (
    <ThemeProvider theme={themes[theme]}>
      <CssBaseline />
      <AppRouter />
    </ThemeProvider>
  )
}

export default App
