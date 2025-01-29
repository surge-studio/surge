import type { ProjectDataProps } from '@/data/projects';
import clsx from 'clsx';
import Link from 'next/link';
import type { FC } from 'react';

export const Project: FC<ProjectDataProps> = ({
  icon: Icon,
  name,
  badge,
  description,
  link,
}) => {
  const content = (
    <div className="flex flex-col gap-1">
      <h3 className="flex items-center gap-2 font-medium text-gray-300 text-sm transition group-hover:text-white">
        {Icon && (
          <Icon
            size={16}
            strokeWidth={1}
            absoluteStrokeWidth
            className="text-gray-400 transition group-hover:text-white"
          />
        )}
        {name}
        {Boolean(badge) && (
          <span className="rounded-full border border-gray-800 bg-gray-900 px-2 text-[11px] text-gray-400 transition">
            {badge}
          </span>
        )}
      </h3>
      <p className="relative ml-[7px] border-transparent border-l pl-4 text-sm transition group-hover:text-gray-300 group-focus-visible:border-white">
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
