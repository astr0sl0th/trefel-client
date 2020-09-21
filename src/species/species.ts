import { AxiosInstance } from 'axios';

export class Specie {
  private instance: AxiosInstance;
  
  constructor(instance: AxiosInstance) {
    this.instance = instance;
  }
  
  public getAllSpecies = () => this.instance.get<Specie>('/species');

}
