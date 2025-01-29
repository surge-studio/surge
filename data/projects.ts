import {
  BotIcon,
  CircleIcon,
  DogIcon,
  DropletIcon,
  GamepadIcon,
  SwordsIcon,
  ZapIcon,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

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
    icon: CircleIcon,
    name: 'Elements',
    description: 'Animated AI visuals for your next project.',
    link: {
      href: 'https://elements.surge.studio',
      label: 'elements.surge.studio',
    },
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
    icon: BotIcon,
    name: 'Eva',
    badge: 'Beta',
    description: 'Say hello to Eva, your new AI companion.',
    link: { href: 'https://eva.surge.studio', label: 'eva.surge.studio' },
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
    description: 'Play games for free online.',
    link: { href: 'https://temploid.com', label: 'temploid.com' },
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
