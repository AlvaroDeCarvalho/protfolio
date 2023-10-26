import Avatar from '../../components/Avatar'
import Paragrafo from '../../components/Paragrafo'
import Titulo from '../../components/Titulo'
import { BotaoTema, Descricao, SidebarContainer } from './styles'

const SideBar = () => {
  return (
    <aside>
      <SidebarContainer>
        <Avatar />
        <Titulo fontSize={20}>Alvaro Carvalho</Titulo>
        <Paragrafo tipo="secundario" fontSize={16}>
          @AlvaroDeCarvalho
        </Paragrafo>
        <Descricao tipo="principal" fontSize={12}>
          Engenheiro Front-end
        </Descricao>
        <BotaoTema>trocar tema</BotaoTema>
      </SidebarContainer>
    </aside>
  )
}

export default SideBar
