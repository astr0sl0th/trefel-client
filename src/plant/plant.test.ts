import mockAxios from 'jest-mock-axios';
import axios from 'axios';
import { Plant } from './plant';

afterEach(() => {
  mockAxios.reset();
});

const plant = new Plant(axios);

describe('Plants', () => {
  it('should GET all plants', () => {
    plant.getAllPlants().then(jest.fn()).catch(jest.fn());
    expect(mockAxios.get).toHaveBeenCalledWith('/plants');
  });
});
