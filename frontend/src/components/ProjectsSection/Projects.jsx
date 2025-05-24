import ProjectCard from './ProjectCard.jsx';
import Project from './ProjectCard.jsx';
const Projects = () => {
  return (
    <section id="projects" className='mt-10'>
      <div className='flex flex-wrap gap-4 grow items-center justify-evenly'>
        <ProjectCard 
        name={'medium'}
        img={'https://i.imgur.com/2b6tKqk.png'}
        description={'A blogging platform where users can write and share their articles.'}
        link={'https://medium-clone-omkar.netlify.app/'}
        github={'https:github.com/omkardalu'}
        />
        <ProjectCard 
        name={'medium'}
        img={'https://i.imgur.com/2b6tKqk.png'}
        description={'A blogging platform where users can write and share their articles.'}
        link={'https://medium-clone-omkar.netlify.app/'}
        github={'https:github.com/omkardalu'}
        />
        <ProjectCard 
        name={'medium'}
        img={'https://i.imgur.com/2b6tKqk.png'}
        description={'A blogging platform where users can write and share their articles.'}
        link={'https://medium-clone-omkar.netlify.app/'}
        github={'https:github.com/omkardalu'}
        />
        <ProjectCard 
        name={'medium'}
        img={'https://i.imgur.com/2b6tKqk.png'}
        description={'A blogging platform where users can write and share their articles.'}
        link={'https://medium-clone-omkar.netlify.app/'}
        github={'https:github.com/omkardalu'}
        />
      </div>
    </section>
  )
};
export default Projects;