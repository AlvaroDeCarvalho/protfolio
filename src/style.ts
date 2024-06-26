import styled, { createGlobalStyle } from 'styled-components'

import { Theme } from './themes/dark'

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-family: 'Inter', sans-serif;
  }
  body {
    padding-top:80px;
    padding-bottom:80px;
    background-color:${(props) => (props.theme as Theme).corDeFundo};
    @media (max-width:768px){
      padding-top:16px;
    }
  }
`
export default GlobalStyle

export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 128px auto;
  column-gap: 56px;

  @media (max-width: 768px) {
    max-width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  img {
    max-width: 100%;
  }
`
