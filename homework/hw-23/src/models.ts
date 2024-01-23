export enum PostSize {
  Large = "large",
  Medium = "medium",
  Small = "small",
}

export interface IPost {
  id: number,
  date: string,
  title: string,
  description: string,
  image: string,
  body: string,
  urls: string,
  small: string,
}