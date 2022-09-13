import PropTypes from 'prop-types';
import styles from './Profile.module.css';

export const Profile = ({ username, tag, location, avatar, stats }) => {
    const {
        userCard,
        userDescription,
        userAvatarImg,
        userName,
        userTag,
        userLocation,
        userStats,
        userStatsItem,
        userLabel,
        userQuantity,
    } = styles;
    
    return (
        <section className="profile">
            <div className={userCard}>
                <div className={userDescription}>
                    <img src={avatar} alt="User avatar" className={userAvatarImg} />
                    <p className={userName}>{username}</p>
                    <p className={userTag}>@{tag}</p>
                    <p className={userLocation}>{location}</p>
                </div>

                <ul className={userStats}>
                    <li className={userStatsItem}>
                        <span className={userLabel}>Followers</span>
                        <span className={userQuantity}>
                            {stats.followers.toLocaleString('en-EN')}
                        </span>
                    </li>
                    <li className={userStatsItem}>
                        <span className={userLabel}>Views</span>
                        <span className={userQuantity}>
                            {stats.views.toLocaleString('en-EN')}
                        </span>
                    </li>
                    <li className={userStatsItem}>
                        <span className={userLabel}>Likes</span>
                        <span className={userQuantity}>
                            {stats.likes.toLocaleString('en-EN')}
                        </span>
                    </li>
                </ul>
            </div>
        </section>
    );
};

Profile.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.object,
};