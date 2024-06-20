import Paragrafo from '../Paragrafo'
import Titulo from '../Titulo'
import * as S from './styles'
const Projeto = ({
  title,
  description,
  imgSrc,
  languages,
  githubLink,
  vercelLink
}: ProjectsType) => {
  return (
    <>
      <S.Card>
        <img src={imgSrc} alt={title} />
        <div>
          <Titulo fontSize={14}>{title}</Titulo>
          <S.InfosContent>
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
          </S.InfosContent>
          <div className="containerButtons">
            <S.LinkBotao href={githubLink} target="_blank">
              Github
            </S.LinkBotao>
            <S.LinkBotao href={vercelLink} target="_blank">
              Vercel
            </S.LinkBotao>
          </div>
        </div>
      </S.Card>
    </>
  )
}

export default Projeto
