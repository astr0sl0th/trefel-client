import { HttpClient } from './httpClient';
import { Plant } from './plant/plant';
import { Specie } from './species/species';

export class TrefelClient extends HttpClient {
  constructor(token: string) {
    super(token);
  }
  
  public Plant = new Plant(this.instance);
  public Specie = new Specie(this.instance);
}
