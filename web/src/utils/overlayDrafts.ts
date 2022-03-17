import { Documents } from '../../../studio/schema';

export const overlayDrafts = (docs: Documents[]) => {
  const documents = docs || [];
  const overlayed = documents.reduce((map, doc) => {
    if (!doc._id) {
      throw new Error('Ensure that `_id` is included in query projection');
    }

    const isDraft = doc._id.startsWith('drafts.');
    const id = isDraft ? doc._id.slice(7) : doc._id;
    return isDraft || !map.has(id) ? map.set(id, doc) : map;
  }, new Map());

  return Array.from(overlayed.values());
};
