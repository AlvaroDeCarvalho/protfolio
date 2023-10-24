import Projetos from './containers/Projetos'
import SideBar from './containers/Sidebar'
import Sobre from './containers/Sobre'
import EstiloGlobal, { Container } from './style'

function App() {
  return (
    <>
      <EstiloGlobal />
      <Container>
        <SideBar />

        <main>
          <Sobre />
          <Projetos />
        </main>
      </Container>
    </>
  )
}
export default App
