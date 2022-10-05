import React from 'react';
import classNames from 'classnames';
import { IconProps, IconPropDefaults } from '../icon';

export const ChevronUp: React.FC<IconProps> = ({
  className = IconPropDefaults.className,
  color = IconPropDefaults.color,
  size = IconPropDefaults.size,
}: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    className={classNames([className, color])}
    focusable="false"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4.5 15.75l7.5-7.5 7.5 7.5"
    />
  </svg>
);
