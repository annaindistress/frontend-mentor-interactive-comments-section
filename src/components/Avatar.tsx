import styles from "./Avatar.module.css";

interface AvatarProps {
  username: string;
}

function Avatar({ username }: AvatarProps) {
  const imgUrl = `/frontend-mentor-interactive-comments-section/images/avatars/${username}`;

  return (
    <picture className={styles.avatar}>
      <source type="image/webp" srcSet={`${imgUrl}.webp`} />
      <img
        src={`${imgUrl}.png`}
        alt={`${username}'s avatar`}
        width="32"
        height="32"
        title={username}
      />
    </picture>
  );
}

export default Avatar;
