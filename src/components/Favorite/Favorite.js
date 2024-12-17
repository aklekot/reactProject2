import PageTitle from '../PageTitle/PageTitle';
import Card from '../Card/Card';
import styles from './Favorite.module.scss';
import { useSelector } from 'react-redux';
import { getFavoriteCards } from '../../redux/store'; 

function Favorite() {
  const favoriteCards = useSelector(getFavoriteCards);

  return (
    <div className={styles.favorite}>
      <PageTitle>Favorite</PageTitle>
      {favoriteCards.length > 0 ? (
        <ul className={styles.cardList}>
          {favoriteCards.map(card => (
            <Card 
              key={card.id} 
              id={card.id} 
              title={card.title} 
              isFavorite={card.isFavorite} 
             
            />
          ))}
        </ul>
      ) : (
        <p className={styles.message}>No cards</p>
      )}
    </div>
  );
}

export default Favorite;
