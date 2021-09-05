export default interface RSSResponse {
  body: string;
  headers: {
    'Cache-Control': string;
    'Content-Type': string;
  };
}