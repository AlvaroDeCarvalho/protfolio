import styled from 'styled-components'

type BotaoProps = {
  principal: boolean
  //o ? para antes dos 2 pontos é para determinar se ele é obrigatorio ou não
  fontSize?: string
  perigo?: boolean
}
const p = true
const Botao = styled.button<BotaoProps>`
  background-color: ${(props) => (props.principal ? 'green' : 'blue')};
  font-size: ${(props) => props.fontSize || '12px'};
`
const BotaoPerigo = styled.button<BotaoProps>`
  background-color: ${p ? 'green' : 'red'};
`

function Teste() {
  return (
    <>
      <Botao fontSize="18px" principal>
        enviar
      </Botao>
      <Botao fontSize="14px" principal={false}>
        cancelar
      </Botao>
      <BotaoPerigo principal fontSize="24px">
        {p ? 'pode clicar' : 'nao pode clicar '}
      </BotaoPerigo>
    </>
  )
}
export default Teste
