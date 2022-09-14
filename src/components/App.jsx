import { Profile } from './Profile/Profile';
import user from './user.json'

import { Statistics } from './Statistics/Statistics';
import data from './data.json';

import { FriendsList } from './FriendsList/FriendsList';
import friends from './friends.json';

export const App = () => {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendsList listOfFriends={friends} />
    </>
  );
};
