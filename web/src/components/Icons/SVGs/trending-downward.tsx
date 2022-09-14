import React from 'react';
import classNames from 'classnames';
import { IconProps, IconPropDefaults } from '../icon';

export const TrendingDownward: React.FC<IconProps> = ({
  className = IconPropDefaults.className,
  color = IconPropDefaults.color,
  size = IconPropDefaults.size,
}: IconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={classNames([className, color])}
    >
      <path d="M18.9581 11.506C18.9174 11.6045 18.8582 11.6926 18.7847 11.7662C18.7799 11.771 18.7751 11.7719 18.7711 11.7758C18.6992 11.8439 18.6169 11.9007 18.5242 11.9392C18.4483 11.9704 18.3684 11.98 18.2885 11.9872C18.2645 11.9888 18.2445 12 18.2205 12H11.8275C11.3856 12 11.0283 11.6422 11.0283 11.1995C11.0283 10.7567 11.3855 10.3989 11.8275 10.3989H16.2994L9.97345 4.02588L7.56647 7.11274C7.42742 7.29124 7.22044 7.40173 6.9967 7.41855C6.76416 7.43537 6.54997 7.35611 6.38697 7.2016L0.249632 1.38091C-0.070836 1.0767 -0.0843947 0.56998 0.218466 0.24895C0.376713 0.0832443 0.587671 0 0.799447 0C0.996847 0 1.19421 0.0728607 1.34844 0.218547L6.84726 5.43402L9.27104 2.32558C9.41249 2.14387 9.62427 2.03257 9.85362 2.01898C10.083 2.00618 10.3059 2.09103 10.4681 2.25353L17.4214 9.25899V4.7952C17.4214 4.35252 17.7786 3.99465 18.2205 3.99465C18.6624 3.99465 19.0197 4.35249 19.0197 4.7952V11.1994V11.2002C19.0189 11.3051 18.9981 11.4084 18.9581 11.506Z" />
    </svg>
  );
};
