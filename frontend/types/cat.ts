export interface CatConfig {
  head: string;
  eyes: string;
  mouth: string;
  whiskers: string;
}

export interface ComponentProps {
  config: CatConfig;
  setConfig: (config: CatConfig) => void;
}
