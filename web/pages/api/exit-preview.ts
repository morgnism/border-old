export default function exit(req, res) {
  res.clearPreviewData();
  res.writeHead(307, { Location: `/post/${req?.query?.slug}` ?? `/post/` });
}