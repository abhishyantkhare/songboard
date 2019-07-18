export enum URLTYPE {
  SPOTIFY,
  SOUNDCLOUD,
  YOUTUBE
}

export type Link = {
  url: string,
  urlType: URLTYPE
}