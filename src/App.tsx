import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './global'
import { Header } from './components/Header'
import { Main } from './components/Main'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Header />
      <Main />

      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
