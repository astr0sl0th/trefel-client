export interface ServerResponse {
  data: object[] | object;
  links: Links;
  meta: Meta;
}

interface Links {
  self: string;
  first: string;
  last: string;
}

interface Meta {
  total: number;
}
