import fotoSol from './imagens/icons8-sol-30.png'

const temaDark = {
  corPrincipal: '#fff',
  corSecundaria: '#eee',
  corDeFundo: '#282a35',
  corDeFundoBotao: '#fff',
  corDaBorda: '#c1c1c1',
  fotoDoTema: fotoSol
}
export default temaDark
export type Theme = {
  corPrincipal: string
  corSecundaria: string
  corDeFundo: string
  corDeFundoBotao: string
  corDaBorda: string
}
