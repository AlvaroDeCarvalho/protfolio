import styled from 'styled-components'
import { ParagrafoEstilo } from '../../components/Paragrafo/styles'

// com o styled(paragraffoEstilo), pegamos todas as caracteristicas do
//que estao no paragrafoEstilo, e trazemos para descrição, sem ter que criar um type, estilizar
//tudo novamente e etc
export const Descricao = styled(ParagrafoEstilo)`
  margin-top: 24px;
  margin-bottom: 40px;
`

export const BotaoTema = styled.button`
  border-radius: 50%;
  border: none;
  padding: 8px;
  color: ${(props) => props.theme.corDeFundo};
  font-size: 10px;
  font-weight: bold;
  background-color: ${(props) => props.theme.corPrincipal};
  cursor: pointer;
  @media (max-width: 767px) {
    margin-bottom: 22px;
  }
`
export const SidebarContainer = styled.div`
  text-align: center;
  position: sticky;
  top: 80px;
  left: 0;
`
export const ImgBlack = styled.img`
  width: 20px;
  height: auto;
  src: url(./icons8-sol-30);
`
