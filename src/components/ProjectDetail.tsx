import Link from 'next/link';
import type { ReactNode } from 'react';
import { HiOutlineExternalLink } from 'react-icons/hi';

import type { ProjectLink } from '@/@types';

type ProjectDetailProps = {
  children: ReactNode;
};

export const ProjectTitle = ({ children }: ProjectDetailProps) => {
  return (
    <div className="flex flex-row justify-start items-center gap-2 mt-5 font-mono">
      <span className="flex flex-row gap-2 lg:text-lg text-base font-bold">
        <Link href="/#projects" className="text-accent">
          Projects
        </Link>
        <p>{'>'}</p>
      </span>
      <h1 className="font-bold lg:text-xl text-lg">{children}</h1>
    </div>
  );
};

export const ProjectDescription = ({ children }: ProjectDetailProps) => {
  return <div className="flex flex-col gap-1 mt-6 font-thin lg:text-base text-sm">{children}</div>;
};

export const ProjectBadgeList = ({ tech }: { tech: string[] }) => {
  return (
    <div className="flex flex-row flex-wrap gap-2 mt-2 font-mono lg:text-sm text-xs">
      {tech.map((stack) => (
        <span key={stack} className="px-1 bg-main rounded">
          {stack}
        </span>
      ))}
    </div>
  );
};

export const ProjectExternalLink = ({ projectLink }: { projectLink: ProjectLink[] }) => {
  return (
    <ul className="flex flex-col gap-1 my-6 font-thin lg:text-base text-sm">
      {projectLink.map((project) => (
        <li key={project.name} className="flex flex-row items-center mb-2">
          <span className="px-1 bg-main rounded">{project.title}</span>
          <Link href={project.link} className="pl-2 text-accent">
            {project.name}
            <HiOutlineExternalLink className="inline ml-1 mb-0.5" />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export const ProjectImage = ({ src, alt }: { src: string; alt: string }) => {
  return <img className="aspect-auto w-full rounded-xl mx-auto" src={src} alt={alt} />;
};
