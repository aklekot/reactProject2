import { useSelector } from 'react-redux';
import styles from './Column.module.scss';
import Card from './../Card/Card';
import CardForm from './../CardForm/CardForm';
import { getFilteredCards } from '../../redux/store';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faFilm, faGamepad, faMusic } from '@fortawesome/free-solid-svg-icons';


const Column = ({ id, title, icon }) => {
  const searchString = useSelector(state => state.searchString || '');
  const cards = useSelector(state => getFilteredCards(state, id));

  const iconMapping = {
    book: faBook,
    film: faFilm,
    gamepad: faGamepad,
    music: faMusic,
  };

  return (
    <div className={styles.column}>
      <header className={styles.header}>
        <h2 className={styles.title}>
          <FontAwesomeIcon icon={iconMapping[icon]} className={styles.icon} /> 
          {title}
        </h2>
      </header>
      <section className={styles.cards}>
        {cards.map(card => (
          <Card key={card.id} {...card} />
        ))}
      </section>
      <CardForm columnId={id} />
    </div>
  );

};

export default Column;
