export interface BlogItem {
  label: string;
  heading: string;
  subHeading: string;
  date: string;
  img: string;
  points: Point[];
  id: number;
}

interface Point {
  head: string;
  body: string;
}
