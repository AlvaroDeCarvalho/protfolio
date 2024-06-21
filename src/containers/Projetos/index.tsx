import { useEffect, useState } from 'react'
import Projeto from '../../components/Projeto'
import Titulo from '../../components/Titulo'
import ProjectList from '../../staticServer/listOfProject.json'
import * as S from './styles'
const Projetos = () => {
  const [projects, setProjects] = useState<ProjectsType[]>([])
  useEffect(() => {
    setProjects(ProjectList)
  }, [])
  return (
    <section>
      <Titulo fontSize={16}>Projetos</Titulo>
      <S.ProjectContainer>
        {projects.map((project) => {
          return (
            <>
              <div className=".indContainer">
                <Projeto {...project} />
              </div>
            </>
          )
        })}
      </S.ProjectContainer>
    </section>
  )
}

export default Projetos
