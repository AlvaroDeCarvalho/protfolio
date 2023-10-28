import { styled } from 'styled-components'

export const Card = styled.div`
  border: 1px solid ${(props) => props.theme.corDaBorda};
  padding: 16px;
`

export const LinkBotao = styled.a`
  display: inline-block;
  color: ${(props) => props.theme.corDeFundo};
  font-size: 14px;
  text-decoration: none;
  padding: 8px;
  background-color: ${(props) => props.theme.corDeFundoBotao};
  margin-top: 24px;
`
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
