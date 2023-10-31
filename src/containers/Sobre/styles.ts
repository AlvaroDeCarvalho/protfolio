import styled from 'styled-components'

export const GithubSecao = styled.div`
  margin-top: 32px;
  margin-bottom: 32px;
  img {
    height: 157px;
    @media (max-width: 767px) {
      height: auto;
      width: 100%;
    }
  }
`

export const SocialLink = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-between;
  max-width: 240px;
  width: 100%;
  margin-bottom: 24px;
  li img {
    border-radius: 12px;
    max-width: 30px;
    transition: all ease 0.3s;
    @media (max-width: 767px) {
      :first-child {
        margin-left: 10px;
      }
    }
  }
  li img:hover {
    transform: scale(1.3);
  }
  @media (max-width: 767px) {
    align-items: center;
  }
`
