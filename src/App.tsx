import { ThemeProvider, CssBaseline, Button, Typography } from '@mui/material'
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
      <div style={{ padding: '16px' }}>
        <Typography variant="h1">Hello, World!</Typography>
        <Button variant="contained" color="primary">
          Primary Button
        </Button>
        <Button variant="outlined" color="secondary">
          Secondary Button
        </Button>
      </div>
    </ThemeProvider>
  )
}

export default App
