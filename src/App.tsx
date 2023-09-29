import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './global'
import { Header } from './components/Header'
import { Main } from './components/Main'
import { Footer } from './components/Footer'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Header onSearchSubmit={undefined} />
      <Main />
      <Footer />
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
