export type ProjectDataProps = {
  name: string;
  description?: string;
  link?: {
    href: string;
    label: string;
  };
};

export const projects: ProjectDataProps[] = [
  {
    name: 'Temploid',
    description: 'Play games online.',
  },
  {
    name: 'Theme.ink',
    description: 'Development tools and resources for the modern web.',
  },
  {
    name: 'Evalyn AI',
    description: 'Say hello to Evalyn, your new AI companion.',
    link: { href: 'https://evalyn.ai', label: 'evalyn.ai' },
  },
  {
    name: 'Imagepup',
    description: 'Playground for AI generated imagery and associated tools.',
    link: { href: 'https://www.imagepup.com', label: 'imagepup.com' },
  },
  {
    name: 'Free Game Assets',
    description:
      'A curated list of free resources and tools for game development.',
    link: {
      href: 'https://www.freegameassets.com',
      label: 'freegameassets.com',
    },
  },
];
