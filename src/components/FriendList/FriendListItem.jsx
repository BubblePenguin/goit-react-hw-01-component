import css from './FriendList.module.css';
import PropTypes from 'prop-types';
export const FriendListItem = ({ avatar, name, isOnline, id }) => {
  return (
    <li className={css.item} key={id}>
      <span className={isOnline ? css.status_green : css.status_red}></span>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
  id: PropTypes.number,
};
