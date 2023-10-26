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
  border-radius: 12px;
  padding: 8px;
  color: #eee;
  font-size: 10px;
  font-weight: bold;
  background-color: #282a35;
  cursor: pointer;
`
export const SidebarContainer = styled.div`
  position: sticky;
  top: 80px;
  left: 0;
`
