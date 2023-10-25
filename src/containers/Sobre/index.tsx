import Paragrafo from '../../components/Paragrafo'
import Titulo from '../../components/Titulo'
import { GithubSecao } from './styles'

const Sobre = () => {
  return (
    <>
      <section>
        <Titulo fontSize={16}>Sobre</Titulo>

        <Paragrafo tipo="secundario">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
          harum cumque consectetur pariatur iure explicabo accusantium assumenda
          enim corporis ab. Vitae deleniti expedita ea libero perspiciatis? Ut
          nisi dolores dolor!
        </Paragrafo>
        <GithubSecao>
          <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=AlvaroDeCarvalho&layout=compact&langs_count=7&theme=dracula" />
        </GithubSecao>
      </section>
    </>
  )
}
export default Sobre
