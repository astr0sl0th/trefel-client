import mockAxios from 'jest-mock-axios';
import { TrefelClient } from './index';

const trefel = new TrefelClient('superSecretLongToken');

afterEach(() => {
  mockAxios.reset();
});

describe('Plants', () => {
  it('should GET all plants', () => {
    trefel.getAllPlants().then(jest.fn()).catch(jest.fn());
    expect(mockAxios.get).toHaveBeenCalledWith('/plants');
  });
});
