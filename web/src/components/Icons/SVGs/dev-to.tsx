import React from 'react';
import classNames from 'classnames';
import { IconProps, IconPropDefaults } from '../icon';

export const DevTo: React.FC<IconProps> = ({
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
      <path d="M5.3625 7.87009C5.18929 7.74062 5.01562 7.67589 4.84241 7.67589H4.06384V12.3397H4.84286C5.01607 12.3397 5.18973 12.275 5.36295 12.1455C5.53616 12.0161 5.62277 11.8219 5.62277 11.5625V8.45312C5.62232 8.1942 5.53527 7.99955 5.3625 7.87009ZM18.0402 0H1.95982C0.879464 0 0.00267857 0.874554 0 1.95536V18.0446C0.00267857 19.1254 0.879464 20 1.95982 20H18.0402C19.121 20 19.9973 19.1254 20 18.0446V1.95536C19.9973 0.874554 19.1205 0 18.0402 0ZM6.88393 11.571C6.88393 12.4107 6.36562 13.683 4.725 13.6804H2.65357V6.29375H4.76875C6.35089 6.29375 6.88304 7.56429 6.88348 8.40446L6.88393 11.571ZM11.3786 7.61295H9V9.32812H10.454V10.6482H9V12.3629H11.379V13.683H8.60313C8.10491 13.696 7.69063 13.3022 7.67813 12.804V7.21875C7.66607 6.72098 8.06027 6.30759 8.55804 6.29509H11.379L11.3786 7.61295ZM16.0054 12.7598C15.4161 14.1326 14.3603 13.8594 13.8875 12.7598L12.1674 6.29554H13.6214L14.9478 11.3723L16.2679 6.29554H17.7223L16.0054 12.7598Z" />
    </svg>
  );
};