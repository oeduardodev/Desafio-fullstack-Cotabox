import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './global'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <div>
        <h1>Desafio Cotabox</h1>
      </div>

      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
