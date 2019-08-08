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

export type Board = {
  id: string,
  links:Link[]
}

export type POSTResponse = {
  success:boolean,
  message:string
}