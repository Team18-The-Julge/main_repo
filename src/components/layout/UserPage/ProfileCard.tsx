import Button from '@/components/common/Button';

import styles from './ProfileCard.module.scss';

type UserProfileProps = {
  isRegisterd: boolean;
  name: string;
  phone: string;
  address: string;
  bio: string;
  onClickEdit: () => void;
};

export default function ProfileCard({ isRegisterd, onClickEdit, ...props }: UserProfileProps) {
  if (!isRegisterd) {
    return (
      <div className={styles.nonDataWrapper}>
        <div className={styles.section}>
          <p>내 프로필을 등록하고 원하는 가게에 지원해 보세요.</p>
        </div>
        <div className={styles.section}>
          <Button className={styles.editButton} solid size="large" active onClick={onClickEdit}>
            내 프로필 등록하기
          </Button>
        </div>
      </div>
    );
  }
  return (
    <div className={styles.wrapper}>
      <div className={styles.section}>
        <div className={styles.nameSection}>
          <h1>이름</h1>
          <p>{props.name}</p>
        </div>
        <div className={styles.infoSection}>
          <p>☎ {props.phone}</p>
          <p>☎ {props.address}</p>
        </div>
        <div className={styles.bioSection}>
          <p>{props.bio}</p>
        </div>
      </div>

      <div className={styles.section}>
        <Button className={styles.editButton} solid size="large" active onClick={onClickEdit}>
          편집하기
        </Button>
      </div>
    </div>
  );
}
