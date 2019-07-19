export enum URLTYPE {
  SPOTIFY="SPOTIFY",
  SOUNDCLOUD="SOUNDCLOUD",
  YOUTUBE="YOUTUBE"
}

export type Link = {
  url: string,
  urlType: URLTYPE
}