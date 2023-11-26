import Link from 'next/link';
import clsx from 'clsx';
import type { ProjectDataProps } from '@/data/projects';
import type { FC } from 'react';

export const Project: FC<ProjectDataProps> = ({
  icon: Icon,
  name,
  description,
  link,
}) => {
  const content = (
    <div className="flex flex-col gap-1">
      <h3 className="flex items-center gap-2 text-sm font-medium text-gray-300 group-hover:text-white transition">
        {Icon && (
          <Icon
            size={16}
            strokeWidth={1}
            absoluteStrokeWidth
            className="text-gray-400 group-hover:text-white transition"
          />
        )}
        {name}
        {!link && (
          <span className="rounded-full bg-gray-900 px-2 text-[11px] transition text-gray-400 border border-gray-800">
            Coming soon
          </span>
        )}
      </h3>
      <p className="relative border-l border-transparent ml-[7px] pl-4 transition text-sm group-hover:text-gray-300 group-focus-visible:border-white">
        {description}
      </p>
    </div>
  );

  if (link) {
    return (
      <Link
        href={link.href}
        className={clsx('group outline-none')}
        target="_blank"
      >
        {content}
      </Link>
    );
  }

  return <div>{content}</div>;
};
