export interface CatConfig {
  head: string
  eyes: string
  mouth: string
  whiskers: string
}

export interface PreviewProps {
  config: CatConfig
  speechText: string
  fontColor: string
  textY: number
}

export interface ControlsProps {
  config: CatConfig
  setConfig: React.Dispatch<React.SetStateAction<CatConfig>>
}