export interface ThemeConfig {
  name: string; accent: string; wash: string; label: string;
  character?: string; background?: string; source?: string;
}
const asset = (path: string) => `${import.meta.env.BASE_URL}assets/${path}`;
export const themes: Record<string, ThemeConfig> = {
  aws: { name: 'Bocchi the Rock!', accent: '#b56d85', wash: '#fcf0f3', label: 'A little courage. A new beginning.', character: asset('bocchi/character.png'), source: 'https://bocchi.rocks/tv/character/' },
  hpc: { name: 'Arknights', accent: '#53869b', wash: '#edf5f8', label: 'Many cores. One shared goal.' },
  ml: { name: 'Re:Zero', accent: '#8d78b6', wash: '#f3effa', label: 'Every discovery starts with curiosity.', character: asset('rezero/character.webp'), source: 'https://re-zero-anime.jp/tv/character/' },
  haskell: { name: 'Bunny Girl Senpai', accent: '#797cae', wash: '#f0f1fa', label: 'Find beauty in a different perspective.' },
  database: { name: 'Quiet garden', accent: '#548d80', wash: '#edf7f1', label: 'Good ideas deserve a place to grow.' },
  distributed: { name: 'Mushoku Tensei', accent: '#6096a7', wash: '#edf7f8', label: 'A whole world of connections.' },
};
