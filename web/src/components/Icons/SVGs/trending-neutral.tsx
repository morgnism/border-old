import React from 'react';
import classNames from 'classnames';
import { IconProps, IconPropDefaults } from '../icon';

export const TrendingNeutral: React.FC<IconProps> = ({
  className = IconPropDefaults.className,
  color = IconPropDefaults.color,
  size = IconPropDefaults.size,
}: IconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 23 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={classNames([className, color])}
    >
      <path d="M21.7296 11.519C21.7295 11.4149 21.7091 11.3108 21.6683 11.2124C21.6274 11.1151 21.5685 11.0268 21.495 10.9521L16.9665 6.42359C16.6535 6.11054 16.1478 6.11013 15.8354 6.4226C15.5229 6.7351 15.5233 7.24073 15.8363 7.55375L18.9927 10.7101L1.12244 10.6732C0.892819 10.673 0.67517 10.7707 0.52205 10.9419C0.369481 11.1137 0.298435 11.3421 0.326897 11.5706C0.326897 12.0053 0.857255 12.2221 1.12243 12.2762L10.0259 12.2762L19.0054 12.3095L15.8433 15.4717C15.5308 15.7842 15.5312 16.2898 15.8443 16.6028C16.1573 16.9159 16.6629 16.9163 16.9754 16.6038L21.496 12.0832C21.513 12.0663 21.5192 12.0442 21.535 12.0261C21.5864 11.9645 21.6361 11.9012 21.6677 11.8255C21.7061 11.7328 21.7241 11.6344 21.7268 11.5354C21.7268 11.5297 21.7296 11.5258 21.7296 11.519Z" />
    </svg>
  );
};
