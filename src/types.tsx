export enum URLTYPE {
  SPOTIFY="SPOTIFY",
  SOUNDCLOUD="SOUNDCLOUD",
  YOUTUBE="YOUTUBE"
}

export type Link = {
  url: string,
  urlType: URLTYPE
}

export interface Board {
  links:Link[]
}

export interface POSTResponse extends Response{
  success:boolean,
  message:string
}