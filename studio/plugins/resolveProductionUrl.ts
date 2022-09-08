const SANITY_PREVIEW_SECRET =
  'dS9QEHXTVS8x4n90rTdeVCTHBQ3bqfnJJufGeRpDzrIpUsdPFjFdxIoBqi6C';

const remoteUrl = `https://border.dev`;
const localUrl = `http://localhost:3000`;

export default function resolveProductionUrl(doc) {
  const baseUrl =
    window.location.hostname === 'localhost' ? localUrl : remoteUrl;

  const previewUrl = new URL(baseUrl);

  previewUrl.pathname = `/api/preview`;
  previewUrl.searchParams.append(`secret`, SANITY_PREVIEW_SECRET);
  previewUrl.searchParams.append(`slug`, doc?.slug?.current ?? `/`);

  return previewUrl.toString();
}
