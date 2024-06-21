import { useState } from 'react'
import Paragrafo from '../Paragrafo'
import * as S from './styles'

const Projeto = ({
  title,
  description,
  imgSrc,
  languages,
  githubLink,
  vercelLink
}: ProjectsType) => {
  const [model, setModel] = useState(false)
  const [expanded, setExpanded] = useState(false)

  const toogleModel = () => {
    setExpanded(!expanded)
  }
  return (
    <>
      <S.Card isActive={expanded} onClick={toogleModel}>
        <S.Item onClick={() => setModel(true)}>
          <img src={imgSrc} alt={title} />
        </S.Item>

        <S.Titulo>{title}</S.Titulo>
        <S.Model className={model ? 'active' : ''}>
          <S.Content expanded={expanded}>
            <Paragrafo>{description}</Paragrafo>
            <li>
              {languages.map((language) => {
                return (
                  <img
                    key={language}
                    src={`https://raw.githubusercontent.com/devicons/devicon/master/icons/${language}/${language}-original.svg`}
                  />
                )
              })}
            </li>
            <div className="containerButtons">
              <S.LinkBotao href={githubLink} target="_blank">
                Github
              </S.LinkBotao>
              <S.LinkBotao href={vercelLink} target="_blank">
                Vercel
              </S.LinkBotao>
            </div>
          </S.Content>
        </S.Model>
      </S.Card>
    </>
  )
}

export default Projeto
