import React, { FC } from 'react';
import { IconKeyNames, ICONS_MAP } from './icon-map';

export type IconProps = {
  className?: string;
  color?: string;
  size?: number;
  fill?: string;
} & React.DOMAttributes<HTMLOrSVGElement>;

const IconPropDefaults: IconProps = {
  className: '',
  color: '',
  size: 24,
};

const Icon: FC<IconProps & { name: IconKeyNames }> = ({ name, ...rest }) => {
  const SVG = ICONS_MAP.get(name) as React.FC<IconProps>;
  return <SVG {...rest} />;
};

export { IconPropDefaults, Icon };
