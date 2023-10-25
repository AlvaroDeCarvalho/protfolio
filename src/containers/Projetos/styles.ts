import styled from 'styled-components'

export const Lista = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 36px;
  row-gap: 40px;
  list-style: none;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    column-gap: 0px;
    row-gap: 16px;
  }
`
