export interface ThemeConfig {
  name: string;
  accent: string;
  wash: string;
  label: string;
  characterName?: string;
  background?: string;
  backgroundPosition?: string;
  source?: string;
}
const asset = (path: string) => `${import.meta.env.BASE_URL}assets/${path}`;
export const themes: Record<string, ThemeConfig> = {
  aws: {
    name: "Bocchi the Rock!",
    accent: "#b74770",
    wash: "#fff0f4",
    label: "A little courage. A new beginning.",
    characterName: "Hitori Gotoh",
    background: asset("scenes/bocchi-band-2d.png"),
    backgroundPosition: "center 16%",
    source: "https://bocchi.rocks/tv/character/",
  },
  hpc: {
    name: "Fate/stay night",
    accent: "#356bc1",
    wash: "#edf3ff",
    label: "Many cores. One shared goal.",
    characterName: "Saber",
    background: asset("scenes/fate-night-2d.png"),
    backgroundPosition: "center 7%",
    source: "https://www.fate-sn.com/ubw/character/",
  },
  ml: {
    name: "Re:Zero",
    accent: "#8264ad",
    wash: "#f5efff",
    label: "Every discovery starts with curiosity.",
    characterName: "Emilia",
    background: asset("scenes/rezero-dawn-2d.png"),
    backgroundPosition: "center 12%",
    source: "https://re-zero-anime.jp/tv/character/",
  },
  haskell: {
    name: "Bunny Girl Senpai",
    accent: "#5b629d",
    wash: "#eff1fb",
    label: "Find beauty in a different perspective.",
    characterName: "Mai Sakurajima",
    background: asset("scenes/mai-twilight-2d.png"),
    backgroundPosition: "center 9%",
    source: "https://ao-buta.com/tv/character/",
  },
  frontend: {
    name: "Too Many Losing Heroines!",
    accent: "#287f9d",
    wash: "#e8f7fa",
    label: "Shape the interface. Connect the experience.",
    characterName: "Anna Yanami & Tiara Basori",
    background: asset("scenes/makeine-frontend-2d.png"),
    backgroundPosition: "center 8%",
    source: "https://makeine-anime.com/character/",
  },
  database: {
    name: "Crossover Archive",
    accent: "#397c79",
    wash: "#ebf7f5",
    label: "Good ideas deserve a place to grow.",
    characterName: "The Archive Ensemble",
    background: asset("scenes/archive-crossover-2d.png"),
    backgroundPosition: "center 10%",
  },
  distributed: {
    name: "Mushoku Tensei",
    accent: "#327b9d",
    wash: "#ebf7fc",
    label: "A whole world of connections.",
    characterName: "Roxy Migurdia",
    background: asset("scenes/mushoku-journey-2d.png"),
    backgroundPosition: "center 6%",
    source: "https://mushokutensei.jp/character/",
  },
};
