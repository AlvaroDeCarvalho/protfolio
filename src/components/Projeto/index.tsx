import { useState, useEffect } from 'react'
import Paragrafo from '../Paragrafo'
import Titulo from '../Titulo'
import { Card, LinkBotao, Lista } from './styles'

/*
podemos utilizar o styled antes da nossa função,
entretanto na propia documentação do styled-commponents é indicado usa-lo antes da função, nao
dentro dela

const Card = styled.div`
  border: 1px solid #c1c1c1;
  padding: 16px;
`

*/
const Projeto = () => {
  const [arrayRepos, setRespos] = useState([])

  useEffect(() => {
    fetch(`https://api.github.com/users/AlvaroDeCarvalho/repos`)
      .then((reqJSON) => reqJSON.json())
      .then((respostaJSON) => setRespos(respostaJSON))
  }, [])

  return (
    <>
      <Lista>
        {arrayRepos.map(({ name, language, html_url, id }) => (
          <li key={id}>
            <Card>
              <Titulo fontSize={14}>Nome do projeto :{name}</Titulo>
              <Paragrafo>Linguagem: {language}</Paragrafo>
              <LinkBotao href={html_url} target="_blank" rel="noreferrer">
                Acesse aqui
              </LinkBotao>
            </Card>
          </li>
        ))}
        <li></li>
      </Lista>
    </>
  )
}

export default Projeto
