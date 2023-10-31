import Avatar from '../../components/Avatar'
import Paragrafo from '../../components/Paragrafo'
import Titulo from '../../components/Titulo'
import * as S from './styles'
type Props = {
  trocaTema: () => void
  tema: any
}

const SideBar = (props: Props) => {
  return (
    <aside>
      <S.SidebarContainer>
        <Avatar />
        <Titulo fontSize={20}>Alvaro Carvalho</Titulo>
        <Paragrafo tipo="secundario" fontSize={16}>
          @AlvaroDeCarvalho
        </Paragrafo>
        <S.Descricao tipo="principal" fontSize={13}>
          Engenheiro Front-end
        </S.Descricao>
        <S.BotaoTema onClick={props.trocaTema}>
          {/*como nao estamos trabalhando com um recurso do styled-commponents, precisamos passar manualmente o theme, atraves das
          propiedades na hora de colocar o SideBar no app. */}
          <S.ImgBlack src={props.tema.fotoDoTema} />
        </S.BotaoTema>
      </S.SidebarContainer>
    </aside>
  )
}

export default SideBar
