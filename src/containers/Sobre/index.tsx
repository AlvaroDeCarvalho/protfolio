import Paragrafo from '../../components/Paragrafo'
import Titulo from '../../components/Titulo'
import * as S from './styles'

const Sobre = () => {
  return (
    <>
      <section>
        <Titulo fontSize={16}>Sobre</Titulo>
        <Paragrafo tipo="secundario">
          Sou estudante de Ciências da Computação na UNIPE e trabalho como
          desenvolvedor Front-End. Já concluí cursos com ênfase em inteligência
          artificial utilizando Python e atualmente estou focado no
          desenvolvimento web. Na seção de Projetos abaixo, você terá acesso a
          alguns dos meus projetos disponíveis no meu GitHub, onde pode
          encontrar uma variedade de trabalhos desenvolvidos por mim.
        </Paragrafo>
        <S.GithubSecao>
          <img src="https://github-readme-stats.vercel.app/api?username=AlvaroDeCarvalho&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
          <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=AlvaroDeCarvalho&layout=compact&langs_count=7&theme=dracula" />
        </S.GithubSecao>
        <S.SocialLink>
          <li>
            <a
              href="https://www.instagram.com/alvaro_carvalhoo__/"
              target="_blank"
              rel="noreferrer"
            >
              <img src="https://github.com/AlvaroDeCarvalho/servidor_estatico/blob/main/instagram1.png?raw=true" />
            </a>
          </li>
          <S.ImgLink>
            <a
              href="https://www.linkedin.com/in/alvaro-de-carvalho-a4952a238/"
              target="_blank"
              rel="noreferrer"
            >
              <img src="data:image/png;base64,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" />
            </a>
          </S.ImgLink>

          <S.ImgLink>
            <a
              href="https://wa.me/+5583999855454"
              target="_blank"
              rel="noreferrer"
            >
              <img src="data:image/jpeg;base64,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" />
            </a>
          </S.ImgLink>

          <S.ImgLink>
            <a href="mailto:alvarodecarvalho20@gmail.com">
              <img src="https://cdn-icons-png.flaticon.com/512/281/281769.png" />
            </a>
          </S.ImgLink>
        </S.SocialLink>
      </section>
    </>
  )
}
export default Sobre
