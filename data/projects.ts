import type { LucideIcon } from "lucide-react";
import {
  AudioLinesIcon,
  CarIcon,
  CircleIcon,
  DogIcon,
  DropletIcon,
  FlameIcon,
  GamepadIcon,
  SwordsIcon,
  ZapIcon,
} from "lucide-react";

export interface ProjectDataProps {
  badge?: string;
  description?: string;
  icon?: LucideIcon;
  link?: {
    href: string;
    label: string;
  };
  name: string;
}

export const projects: ProjectDataProps[] = [
  {
    description: "Coming soon.",
    icon: DropletIcon,
    name: "Theme.ink",
  },
  {
    description: "Coming soon.",
    icon: FlameIcon,
    name: "Igniter",
  },
  {
    description: "Coming soon.",
    icon: DogIcon,
    name: "Imagepup",
  },
  {
    description: "Find the right EV for Australia.",
    icon: CarIcon,
    link: {
      href: "https://www.evnative.com",
      label: "evnative.com",
    },
    name: "EV Native",
  },
  {
    description: "Stay awhile and listen.",
    icon: AudioLinesIcon,
    link: {
      href: "https://radio.surge.studio",
      label: "radio.surge.studio",
    },
    name: "Radio",
  },
  {
    badge: "Acquired",
    description: "Animated AI visuals for your next project.",
    icon: CircleIcon,
    link: {
      href: "https://elements.surge.studio",
      label: "elements.surge.studio",
    },
    name: "Elements",
  },
  {
    description: "Open source component registry.",
    icon: ZapIcon,
    link: { href: "https://spark.surge.studio", label: "spark.surge.studio" },
    name: "Spark",
  },
  {
    description: "Play games for free online with friends.",
    icon: SwordsIcon,
    link: { href: "https://temploid.com", label: "temploid.com" },
    name: "Temploid",
  },
  {
    description: "Free resources and tools for game development.",
    icon: GamepadIcon,
    link: {
      href: "https://www.freegameassets.com",
      label: "freegameassets.com",
    },
    name: "Free Game Assets",
  },
];
