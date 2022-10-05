import { useEffect, useState } from 'react';

type CopiedValue = string | null;
type CopyFn = (text: string) => Promise<boolean>; // Return success

/**
 * Copies a block of code to the clipboard.
 *
 * @source https://usehooks-ts.com/react-hook/use-copy-to-clipboard
 * @returns [CopiedValue, CopyFn]
 */
export const useCopyToClipboard = (): [CopiedValue, CopyFn] => {
  const [copiedText, setCopiedText] = useState<CopiedValue>(null);

  useEffect(() => {
    if (!copiedText) {
      return;
    }

    const timer = setTimeout(() => {
      setCopiedText(null);
    }, 500);

    return () => clearTimeout(timer);
  }, [copiedText]);

  const copy: CopyFn = async (text) => {
    if (!navigator?.clipboard) {
      console.warn('Clipboard not supported');
      return false;
    }

    // Try to save to clipboard then save it in the state if worked
    try {
      await navigator.clipboard.writeText(text);
      setCopiedText(text);
      return true;
    } catch (error) {
      console.warn('Copy failed', error);
      setCopiedText(null);
      return false;
    }
  };

  return [copiedText, copy];
};
