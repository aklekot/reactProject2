import PageTitle from '../PageTitle/PageTitle';
import styles from './Favorite.module.scss';
function Favorite() {
  return (
    <div className={styles.favorite}>
      <PageTitle>Favorite</PageTitle>
      <p className={styles.title}>Something favorite</p>
    </div>
  );
}

  export default Favorite;