import FriendListItem from "../FriendListItem/FriendListItem";
import styles from "../FriendList/FriendList.module.css";
import friendsData from "../../data/friends.json";

const FriendList = () => {
  return (
    <ul className={styles.friendList}>
      {friendsData.map(({ id, avatar, name, isOnline }) => (
        <FriendListItem
          key={id}
          avatar={avatar}
          name={name}
          isOnline={isOnline}
        />
      ))}
    </ul>
  );
};

export default FriendList;
