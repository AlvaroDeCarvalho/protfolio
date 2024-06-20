import styled from 'styled-components'
import { Props } from './index'

export const ParagrafoEstilo = styled.h3<Props>`
  color: ${(props) =>
    props.tipo === 'principal'
      ? props.theme.corPrincipal
      : props.theme.corSecundaria};
  font-size: ${(props) => (props.fontSize ? props.fontSize + 'px' : '14px')};
  font-weight: ${(props) => (props.tipo === 'terciario' ? 'bold' : 400)};

  margin-top: ${(props) => (props.tipo === 'terciario' ? '16px' : '0')};
`
