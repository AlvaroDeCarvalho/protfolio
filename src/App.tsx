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
          /* aqui estamos passando manualmente o theme, uma vez que no SideBar nao estamos utilizando um elemento da
          biblioteca styled-commponents, assim, nos nao temos acesso as propiedades.theme , fazendo nos sermos obrigados
          a passar a mão  */
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
