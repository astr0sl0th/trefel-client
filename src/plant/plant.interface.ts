export interface GetAllPlants {
  data: Plant[];
  links: Links;
  meta: Meta;
}

export interface Plant {
  id: number;
  common_name: string;
  slug: string;
  scientific_name: string;
  year: number;
  bibliography: string;
  author: string;
  status: string;
  rank: string;
  family_common_name: string;
  genus_id: number;
  image_url: string;
  synonyms: Array<string>;
  genus: string;
  family: string;
  links: Links;
}

export interface Links {
  self: string;
  plant: string;
  genus: string;
}

export interface Meta {
  total: number;
}

export interface FilterAny {
  author: string;
  bloom_months: string;
  common_name: string;
  duration: string;
  edible: string;
  family_common_name: string;
  family_name: string;
  flower_conspicuous: string;
  foliage_texture: string;
}
