
import PageTitle from '../PageTitle/PageTitle';
import styles from './Hero.module.scss';
function Hero() {
  return (
    <div className={styles.hero}>
      <PageTitle>My first React App</PageTitle>

      <p className={styles.title}>A simple to-do app, with lists, columns and card</p>
    </div>
  );
}

  export default Hero;