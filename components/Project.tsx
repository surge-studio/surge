import Link from 'next/link';
import clsx from 'clsx';
import type { ProjectDataProps } from '@/data/projects';
import type { FC } from 'react';

export const Project: FC<ProjectDataProps> = ({ name, description, link }) => {
  const className = 'relative border-l border-gray-700 pl-4 transition';

  const content = (
    <div className="flex flex-col gap-1">
      <h3 className="flex items-center gap-2 text-sm font-medium text-white">
        {name}
        {link ? null : (
          <span className="rounded bg-gray-900 px-1 text-xs text-gray-400">
            Coming soon
          </span>
        )}
      </h3>
      <p className="text-sm">{description}</p>
    </div>
  );

  if (link) {
    return (
      <Link
        href={link.href}
        className={clsx(
          className,
          'outline-none hover:border-white focus-visible:border-white'
        )}
        target="_blank"
      >
        {content}
      </Link>
    );
  }

  return <div className={className}>{content}</div>;
};
