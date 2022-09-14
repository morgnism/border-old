import React, { FC } from 'react';
import {
  Clipboard,
  DevTo,
  Facebook,
  Laptop,
  LinkedIn,
  Mail,
  Quote,
  TabletTouch,
  TrendingDownward,
  TrendingNeutral,
  TrendingUpward,
  Twitter,
  WindowCodeBlock,
  YouTube,
} from './SVGs';

type IconMap = {
  [key: string]: React.FC<IconProps>;
};

const iconNameMap: IconMap = {
  'dev-to': DevTo,
  facebook: Facebook,
  laptop: Laptop,
  linkedin: LinkedIn,
  mail: Mail,
  'tablet-touch': TabletTouch,
  twitter: Twitter,
  'window-code-block': WindowCodeBlock,
  youtube: YouTube,
  'trending-upward': TrendingUpward,
  'trending-downward': TrendingDownward,
  'trending-neutral': TrendingNeutral,
  quote: Quote,
  clipboard: Clipboard,
};

export type IconProps = {
  className?: string;
  color?: string;
  size?: number;
} & React.DOMAttributes<HTMLOrSVGElement>;

const IconPropDefaults: IconProps = {
  className: 'fill-current',
  color: 'text-secondary-700',
  size: 32,
};

const Icon: FC<IconProps & { name: string }> = ({ name, ...rest }) => {
  const SVG = iconNameMap[name];
  return <SVG {...rest} />;
};

export { IconPropDefaults, Icon };
