import classNames from 'classnames';
import React from 'react';

type CopyButtonProps = {
  className: string;
  isCopied: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

const CopyButton = ({ className, isCopied, onClick }: CopyButtonProps) => (
  <button
    type="button"
    className={classNames([
      className,
      'px-3 py-1 text-sm rounded-lg bg-neutral-600 hover:bg-neutral-500 transition ease-out uppercase font-sans',
    ])}
    onClick={onClick}
  >
    {isCopied ? 'Copied!' : 'Copy'}
  </button>
);

export default CopyButton;
