import { ParagrafoEstilo } from './styles'
export type Props = {
  children: string
  tipo?: 'principal' | 'secundario'
}

/* para adicionar um valor default em nosso atributo utilizamos a destruturação
 e logo apos isso colocamos o sinal de igual(=) e passamos o valor desejado */
const Paragrafo = ({ children, tipo = 'principal' }: Props) => (
  <ParagrafoEstilo tipo={tipo}>{children}</ParagrafoEstilo>
)

export default Paragrafo
