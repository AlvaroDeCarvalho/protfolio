import { useState } from 'react'

import { ThemeProvider } from 'styled-components'
import Projetos from './containers/Projetos'
import SideBar from './containers/Sidebar'
import Sobre from './containers/Sobre'
import EstiloGlobal, { Container } from './style'
import temaLight from './themes/light'
import temaDark from './themes/dark'
function App() {
  const [estaUsandoTemaDark, setTemaDark] = useState(false)

  function trocaTema() {
    setTemaDark(!estaUsandoTemaDark)
  }

  return (
    <ThemeProvider theme={estaUsandoTemaDark ? temaDark : temaLight}>
      <EstiloGlobal />
      <Container>
        <SideBar
          trocaTema={trocaTema}
          tema={estaUsandoTemaDark ? temaDark : temaLight}
        />
        <main>
          <Sobre />
          <Projetos />
        </main>
      </Container>
    </ThemeProvider>
  )
}
export default App
