import { ParagrafoEstilo } from './styles'
export type Props = {
  children: string[] | string
  tipo?: 'principal' | 'secundario' | 'terciario'
  fontSize?: number
}

/* para adicionar um valor default em nosso atributo utilizamos a destruturação
 e logo apos isso colocamos o sinal de igual(=) e passamos o valor desejado */
const Paragrafo = ({ children, tipo = 'principal', fontSize }: Props) => (
  <ParagrafoEstilo tipo={tipo} fontSize={fontSize}>
    {children}
  </ParagrafoEstilo>
)

export default Paragrafo
