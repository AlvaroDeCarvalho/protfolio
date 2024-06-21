import styled from 'styled-components'

export const ProjectContainer = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 12px;
  list-style: none;

  @media (max-width: 768px) {
    display: block;
  }
`
