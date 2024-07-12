import {Metadata} from 'next';
import Link from 'next/link';

type ProjectCardType = {
  title: string;
  description: string;
  href: string;
}

function ProjectCard({
  project
}: {
  project: ProjectCardType;
}) {
  const { title, description, href } = project;

  return (
    <div className={'my-2 rounded-sm border py-2'}>
      <Link href={href} className={'block px-2'}>
        <h3 className={'text-lg font-medium'}>{title}</h3>
        <p>{description}</p>
      </Link>
    </div>
  )
}

export const metadata: Metadata = {
  title: 'Projects - Osman Ahmed',
}

export default function ProjectsPage() {
  const projects: ProjectCardType[] = [
    {title: 'title', description: 'description...', href: '#'},
    {title: 'title', description: 'description...', href: '#'},
    {title: 'title', description: 'description...', href: '#'},
  ];

  return (
    <div className={'container'}>
      <h1 className={'text-3xl font-semibold'}>Projects</h1>
      <p>Projects that I created</p>
      <div>
        {projects.map((project: ProjectCardType) => (
          <ProjectCard project={project} key={project.href}/>
        ))}
      </div>
    </div>
  )
}
