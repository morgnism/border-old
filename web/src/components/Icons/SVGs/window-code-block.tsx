import React from 'react';
import classNames from 'classnames';
import { IconProps, IconPropDefaults } from '../icon';

export const WindowCodeBlock: React.FC<IconProps> = ({
  className = IconPropDefaults.className,
  color = IconPropDefaults.color,
  size = IconPropDefaults.size,
}: IconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 28 28"
      xmlns="http://www.w3.org/2000/svg"
      className={classNames([className, color])}
    >
      <path d="M23.3335 24.5H4.66683C3.37817 24.5 2.3335 23.4553 2.3335 22.1667V5.83333C2.3335 4.54467 3.37817 3.5 4.66683 3.5H23.3335C24.6222 3.5 25.6668 4.54467 25.6668 5.83333V22.1667C25.6668 23.4553 24.6222 24.5 23.3335 24.5ZM4.66683 8.16667V22.1667H23.3335V8.16667H4.66683ZM17.1583 19.4915L15.5098 17.843L18.1838 15.1667L15.5087 12.4915L17.1583 10.8418L21.4832 15.1667L17.1595 19.4903L17.1583 19.4915ZM10.842 19.4915L6.51716 15.1667L10.842 10.8418L12.4917 12.4915L9.8165 15.1667L12.4905 17.8418L10.842 19.4903V19.4915Z" />
    </svg>
  );
};
