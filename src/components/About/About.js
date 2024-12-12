import PageTitle from '../PageTitle/PageTitle';
import styles from './About.module.scss';
function About() {
  return (
    <div className={styles.about}>
      <PageTitle>ABOUT</PageTitle>
      <p className={styles.title}>Something about</p>
    </div>
  );
}

  export default About;