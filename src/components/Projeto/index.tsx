import Paragrafo from '../Paragrafo'
import Titulo from '../Titulo'
import { Card, LinkBotao } from './styles'

/*
podemos utilizar o styled antes da nossa função,
entretanto na propia documentação do styled-commponents é indicado usa-lo antes da função, nao
dentro dela

const Card = styled.div`
  border: 1px solid #c1c1c1;
  padding: 16px;
`

*/
const Projeto = () => (
  <Card>
    <Titulo>Projeto Lista de tarefas </Titulo>
    <Paragrafo tipo="secundario">Lista de tarefas feita com Vue.js</Paragrafo>
    <LinkBotao>Visualizar</LinkBotao>
  </Card>
)

export default Projeto
