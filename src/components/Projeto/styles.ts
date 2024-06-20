import { styled } from 'styled-components'

export const Card = styled.li`
  position: relative;
  box-shadow: ${(props) => props.theme.sombraTema};
  border: 1px solid ${(props) => props.theme.corDaBorda};
  padding: 16px;
  margin: 16px;
  height: 490px;
  border-radius: 8px;
  img {
    max-width: 100%;
    max-height: 200px;
    width: 100%;
    height: 100%;
    border-radius: 8px;
    margin-bottom: 8px;
    object-fit: cover;
  }

  .containerButtons {
    position: absolute;
    bottom: 16px;
    left: 16px;
  }
`

export const LinkBotao = styled.a`
  display: inline-block;
  color: ${(props) => props.theme.corDeFundo};
  font-size: 14px;
  text-decoration: none;
  padding: 8px;
  background-color: ${(props) => props.theme.corDeFundoBotao};
  margin-top: 24px;
  margin-right: 12px;
`

export const InfosContent = styled.div`
  max-height: 120px;
  height: 100%;

  margin: 12px 0 12px 0;

  img {
    width: 20px;
    height: 20px;
    margin-right: 8px;
  }
`
