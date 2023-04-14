export interface mediaDetailsType {
  id: number;
  name: string;
  rating: number;
  time: string;
  desc: string;
  starring: string;
  genres: string;
  tags: string;
  cover: string;
  video?: string;
  date: string;
}

export interface mediaCardType {
  id: number;
  cover: string;
  name: string;
  time: string;
}
