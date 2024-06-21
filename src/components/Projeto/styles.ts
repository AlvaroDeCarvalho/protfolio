import { styled } from 'styled-components'
import zoom from '../../assents/imagensProjestos/zoom.png'

type Props = {
  isActive?: boolean
}

export const Card = styled.li<Props>`
  position: relative;
  padding: 16px;
  margin: 40px 0 40px 0;
  transition: height 0.5s ease;
  height: ${(props) => (props.isActive ? '540px' : '290px')};
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;

  &.active {
    height: 540px;
  }

  .containerButtons {
    margin-top: 16px;
    position: absolute;

    @media (max-width: 768px) {
      height: auto;
      margin-bottom: 24px;
    }
  }
`

export const Model = styled.div<Props>`
  display: none;

  &.active {
    display: block;
  }

  &:hover {
    opacity: 1;
    visibility: visible;
  }
`

export const Item = styled.div`
  position: relative;
  width: 100%;
  height: 50%;
  > img {
    width: 100%;
    height: 100%;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    margin-bottom: 8px;
    object-fit: cover;
  }

  &::after {
    content: '';
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.73);
    transition: opacity 0.5s ease;

    background-image: url(${zoom});
    background-repeat: no-repeat;
    background-size: auto;
    background-position: center;
  }

  &:hover::after {
    opacity: 0.73;
  }
`

export const Titulo = styled.h2`
  font-size: 18px;
  color: ${(props) => props.theme.corTitle};
  padding: 16px;
  background-color: #000;
  align-items: center;
  text-align: center;

  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
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

export const Content = styled.div<{ expanded: boolean }>`
  max-height: 120px;
  height: auto;
  margin: 12px 0 12px 0;
  align-items: center;
  img {
    width: 20px;
    height: 20px;
    margin: 16px 8px 0 0;
  }
  transition: all 0.3s ease-in-out;
  opacity: ${(props) => (props.expanded ? '1' : '0')};
  max-height: ${(props) => (props.expanded ? 'auto' : '0')};
`
