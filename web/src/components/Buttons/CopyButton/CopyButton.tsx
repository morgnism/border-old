import classNames from 'classnames';
import React from 'react';

type CopyButtonProps = {
  className: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

const CopyButton = ({ className, onClick }: CopyButtonProps) => (
  <button
    type="button"
    className={classNames([
      className,
      'px-3 py-1 text-sm rounded-lg bg-neutral-600 hover:bg-neutral-500 transition ease-out uppercase font-sans',
    ])}
    onClick={onClick}
  >
    Copy
  </button>
);

export default CopyButton;
