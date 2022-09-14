import PropTypes from 'prop-types';
import styles from './FriendsListItem.module.css';

export const FriendsListItem = ({ avatar, name, isOnline }) => {
  const { friendItem, friendOnline, friendOffline, friendUserAvatar, friendUserName } = styles;

  return (
    <li className={friendItem}>
      <span className={isOnline ? friendOnline : friendOffline}></span>
      <img className={friendUserAvatar} src={avatar} alt="User avatar" width="48" />
      <p className={friendUserName}>{name}</p>
    </li>
  );
};

FriendsListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};