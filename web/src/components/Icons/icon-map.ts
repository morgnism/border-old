import { IconProps } from './icon';
import {
  ChevronUp,
  Clipboard,
  DevTo,
  Facebook,
  Laptop,
  LinkedIn,
  Mail,
  Quote,
  Twitter,
  WindowCodeBlock,
  YouTube,
} from './SVGs';

const enum ICON_NAMES {
  'chevron-up',
  'clipboard',
  'dev-to',
  'facebook',
  'laptop',
  'linkedin',
  'mail',
  'twitter',
  'window-code-block',
  'youtube',
  'quote',
}

export type IconKeyNames = keyof typeof ICON_NAMES;

export const ICONS_MAP = new Map<IconKeyNames, React.FC<IconProps>>([
  ['chevron-up', ChevronUp],
  ['clipboard', Clipboard],
  ['dev-to', DevTo],
  ['facebook', Facebook],
  ['laptop', Laptop],
  ['linkedin', LinkedIn],
  ['mail', Mail],
  ['twitter', Twitter],
  ['window-code-block', WindowCodeBlock],
  ['youtube', YouTube],
  ['quote', Quote],
]);
