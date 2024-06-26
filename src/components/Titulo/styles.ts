import styled from 'styled-components'
import { Props } from './index'

export const Titulo = styled.h3<Props>`
  color: ${(props) => props.theme.corPrincipal};
  font-weight: bold;
  font-size: ${(props) => (props.fontSize ? props.fontSize + 'px' : '14px')};
  display: flex;
  text-align: center;
  margin-bottom: 16px;
  margin-top: 16px;
`
