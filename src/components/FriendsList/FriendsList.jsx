import PropTypes from 'prop-types';
import styles from './FriendsList.module.css';
import { FriendsListItem } from '../FriendsListItem/FriendsListItem';

export const FriendsList = ({ listOfFriends }) => {
  const { friends } = styles;

  return (
    <ul className={friends}>
      {listOfFriends.map(({ avatar, name, isOnline, id }) => (
        <FriendsListItem
          avatar={avatar}
          name={name}
          isOnline={isOnline}
          key={id}
        />
      ))}
    </ul>
  );
};

FriendsList.propTypes = {
  listOfFriends: PropTypes.array.isRequired,
};
