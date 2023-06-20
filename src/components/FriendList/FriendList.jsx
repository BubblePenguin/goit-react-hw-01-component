import css from './FriendList.module.css';
import { FriendListItem } from './FriendListItem';
export const FriendList = ({ friends }) => {
  return (
    <ul className={css.friend_list}>
      {friends.map(friend => (
        <FriendListItem {...friend} />
      ))}
    </ul>
  );
};
