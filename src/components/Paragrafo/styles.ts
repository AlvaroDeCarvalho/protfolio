import styled from 'styled-components'
import { Props } from './index'

export const ParagrafoEstilo = styled.h3<Props>`
  color: ${(props) => (props.tipo === 'principal' ? '#282a35' : '#949494')};
  line-weight: 22px;
  font-size: 14px;
  padding: 10px;
`
