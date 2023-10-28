import Avatar from '../../components/Avatar'
import Paragrafo from '../../components/Paragrafo'
import Titulo from '../../components/Titulo'
import { BotaoTema, Descricao, SidebarContainer } from './styles'

type Props = {
  trocaTema: () => void
}

const SideBar = (props: Props) => {
  return (
    <aside>
      <SidebarContainer>
        <Avatar />
        <Titulo fontSize={20}>Alvaro Carvalho</Titulo>
        <Paragrafo tipo="secundario" fontSize={16}>
          @AlvaroDeCarvalho
        </Paragrafo>
        <Descricao tipo="principal" fontSize={13}>
          Engenheiro Front-end
        </Descricao>
        <BotaoTema onClick={props.trocaTema}>trocar tema</BotaoTema>
      </SidebarContainer>
    </aside>
  )
}

export default SideBar
