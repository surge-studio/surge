import {
  AudioLinesIcon,
  BotIcon,
  CarIcon,
  CircleIcon,
  DogIcon,
  DropletIcon,
  FlameIcon,
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
    icon: CarIcon,
    name: 'EV Native',
    description: 'Find the right EV for Australia.',
    link: {
      href: 'https://www.evnative.com',
      label: 'evnative.com',
    },
  },
  {
    icon: FlameIcon,
    name: 'Igniter',
    description: 'Coming soon.',
  },
  {
    icon: AudioLinesIcon,
    name: 'Radio',
    description: 'Stay awhile and listen.',
    link: {
      href: 'https://radio.surge.studio',
      label: 'radio.surge.studio',
    },
  },
  {
    icon: CircleIcon,
    name: 'Elements',
    badge: 'Acquired',
    description: 'Animated AI visuals for your next project.',
    link: {
      href: 'https://elements.surge.studio',
      label: 'elements.surge.studio',
    },
  },
  {
    icon: DropletIcon,
    name: 'Theme.ink',
    description: 'Coming soon.',
  },
  {
    icon: ZapIcon,
    name: 'Spark',
    description: 'Open source component registry.',
    link: { href: 'https://spark.surge.studio', label: 'spark.surge.studio' },
  },
  {
    icon: BotIcon,
    name: 'Eval',
    badge: 'Beta',
    description: 'Say hello to Eval, your new AI companion.',
    link: { href: 'https://eva.surge.studio', label: 'eval.surge.studio' },
  },
  {
    icon: DogIcon,
    name: 'Imagepup',
    description: 'Coming soon.',
  },
  {
    icon: SwordsIcon,
    name: 'Temploid',
    description: 'Play games for free online with friends.',
    link: { href: 'https://temploid.com', label: 'temploid.com' },
  },
  {
    icon: GamepadIcon,
    name: 'Free Game Assets',
    description: 'Free resources and tools for game development.',
    link: {
      href: 'https://www.freegameassets.com',
      label: 'freegameassets.com',
    },
  },
];
