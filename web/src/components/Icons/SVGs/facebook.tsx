import React from 'react';
import classNames from 'classnames';
import { IconProps, IconPropDefaults } from '../icon';

export const Facebook: React.FC<IconProps> = ({
  className = IconPropDefaults.className,
  color = IconPropDefaults.color,
  size = IconPropDefaults.size,
}: IconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      className={classNames([className, color])}
      focusable="false"
    >
      <path d="M5.27082 10.652H7.46314V19.6774C7.46314 19.8556 7.60753 20 7.78573 20H11.5029C11.6811 20 11.8255 19.8556 11.8255 19.6774V10.6945H14.3457C14.5096 10.6945 14.6475 10.5715 14.6662 10.4088L15.049 7.08606C15.0595 6.99465 15.0305 6.9031 14.9693 6.83452C14.9081 6.76587 14.8205 6.72658 14.7286 6.72658H11.8256V4.64374C11.8256 4.01587 12.1637 3.69748 12.8305 3.69748C12.9255 3.69748 14.7286 3.69748 14.7286 3.69748C14.9068 3.69748 15.0511 3.55303 15.0511 3.3749V0.324968C15.0511 0.146774 14.9068 0.0023871 14.7286 0.0023871H12.1128C12.0943 0.00148387 12.0533 0 11.993 0C11.5391 0 9.96147 0.0890967 8.71527 1.23555C7.3345 2.506 7.52644 4.02716 7.57231 4.2909V6.72652H5.27082C5.09263 6.72652 4.94824 6.8709 4.94824 7.0491V10.3294C4.94824 10.5075 5.09263 10.652 5.27082 10.652Z" />
    </svg>
  );
};
