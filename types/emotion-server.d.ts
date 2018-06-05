declare module 'emotion-server' {
  export function extractCritical(
    html: string,
  ): {
    ids: string[];
    css: string;
  };
}
