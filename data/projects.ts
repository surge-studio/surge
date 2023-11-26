import {
  BotIcon,
  CircleIcon,
  DogIcon,
  DropletIcon,
  FlameIcon,
  GamepadIcon,
  LucideIcon,
  SwordsIcon,
  ZapIcon,
} from 'lucide-react';

export type ProjectDataProps = {
  icon?: LucideIcon;
  name: string;
  badge?: string;
  description?: string;
  link?: {
    href: string;
    label: string;
  };
};

export const projects: ProjectDataProps[] = [
  {
    icon: BotIcon,
    name: 'AI Visualisations',
    badge: 'Coming soon',
    description: 'Animated avatars for enhancing your next AI project.',
    link: { href: 'https://ai.surge.studio', label: 'ai.surge.studio' },
  },
  {
    icon: FlameIcon,
    name: 'Igniter',
    badge: 'Coming soon',
    description: 'Easily create and edit videos online.',
  },
  {
    icon: DropletIcon,
    name: 'Theme.ink',
    description: 'Development tools and resources for the modern web.',
    link: { href: 'https://theme.ink', label: 'theme.ink' },
  },
  {
    icon: ZapIcon,
    name: 'Spark',
    description: 'An open source design system for all studio projects.',
    link: { href: 'https://spark.surge.studio', label: 'spark.surge.studio' },
  },
  {
    icon: CircleIcon,
    name: 'Evalyn AI',
    description: 'Say hello to Evalyn, your new AI companion.',
    link: { href: 'https://evalyn.ai', label: 'evalyn.ai' },
  },
  {
    icon: DogIcon,
    name: 'Imagepup',
    description: 'Playground for AI generated imagery and associated tools.',
    link: { href: 'https://www.imagepup.com', label: 'imagepup.com' },
  },
  {
    icon: SwordsIcon,
    name: 'Temploid',
    badge: 'Coming soon',
    description: 'Play games for free online.',
  },
  {
    icon: GamepadIcon,
    name: 'Free Game Assets',
    description:
      'A curated list of free resources and tools for game development.',
    link: {
      href: 'https://www.freegameassets.com',
      label: 'freegameassets.com',
    },
  },
];
