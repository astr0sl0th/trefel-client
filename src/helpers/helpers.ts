export const filter = (type: string, option: string): string =>
  `?filter[${type}]=${option}`;
