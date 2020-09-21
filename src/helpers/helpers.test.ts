import { filter } from './helpers';

describe('Helpers', () => {
  describe('Filter', () => {
    const type = 'common_name';
    const option = 'daisy';
    it('filter should return a string', () => {
      expect(filter(type, option)).toEqual(`?filter[${type}]=${option}`);
    });
  });
});
