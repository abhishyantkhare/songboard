export enum URLTYPE {
  SPOTIFY="SPOTIFY",
  SOUNDCLOUD="SOUNDCLOUD",
  YOUTUBE="YOUTUBE",
  ERROR="ERROR"
}

export type Link = {
  url: string,
  urlType: URLTYPE
}

export interface Board {
  links:Link[]
}

export type POSTResponse = {
  success:boolean,
  message:string
}