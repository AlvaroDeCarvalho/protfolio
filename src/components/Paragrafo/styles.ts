import styled from 'styled-components'
import { Props } from './index'

export const ParagrafoEstilo = styled.h3<Props>`
  color: ${(props) => (props.tipo === 'principal' ? '#282a35' : '#949494')};
  font-size: ${(props) => (props.fontSize ? props.fontSize + 'px' : '14px')};
  line-weight: 22px;
  font-weight: 400;
`
