import { AxiosInstance } from 'axios';
import { GetAllPlants } from './plant.interface';

export class Plant {
  private instance: AxiosInstance;

  constructor(instance: AxiosInstance) {
    this.instance = instance;
  }

  public getAllPlants = () => this.instance.get<GetAllPlants>('/plants');

  public getPlantByIdOrSlug = (idOrSlug: number | number) =>
    this.instance.get<Plant>(`/plants/${idOrSlug}`);

  public search = (
    query: string,
    page?: number,
    filter?: object
    // filter_any: object,
  ) =>
    this.instance.get(
      `/plants/q=${query}${page && `?page=${page}`}${
        filter && `?filter=${filter}`
      }`
    );

  public getByCommonName = (commonName: string) =>
    this.instance.get(
      `/plants?filter[common_name]=${encodeURIComponent(commonName)}`
    );
}
