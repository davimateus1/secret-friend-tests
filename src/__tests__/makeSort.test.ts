import { makeSort } from '../state';

describe('Sort secret friend', () => {
  it('Should be able to dont sort owm name', () => {
    const participants = ['John Doe', 'Jane Doe', 'Foo Bar'];

    const sort = makeSort(participants);

    participants.forEach((participant) => {
      const secretFriend = sort.get(participant);
      expect(secretFriend).not.toEqual(participant);
    });
  });
});
