import React from 'react';
import classNames from 'classnames';

type CardTags = {
  tags: string[];
};

const CardTags = ({ tags }: CardTags) => (
  <p
    className={classNames([tags.length ? 'mt-4' : 'mt-9', 'flex items-center'])}
  >
    {tags.map((tag) => (
      <span
        key={tag}
        className="inline-block bg-slate-100 text-gray-600 rounded-full px-3 py-1 text-sm mr-2 mb-2"
      >
        {tag.toLocaleLowerCase()}
      </span>
    ))}
  </p>
);

export default CardTags;
