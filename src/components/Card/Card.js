import styles from './Card.module.scss';
import { useDispatch } from 'react-redux';
import { toggleCardFavoriteAction, removeCardAction } from '../../redux/store';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as faSolidStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as faRegularStar } from '@fortawesome/free-regular-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import clsx from 'clsx';


const Card = ({ id, title, isFavorite }) => {
    const dispatch = useDispatch();


    const toggleFavorite = () => {
        dispatch(toggleCardFavoriteAction(id));
    };

    const removeCard = () => {
        dispatch(removeCardAction(id));
    };

    return (
        <li className={styles.card}>
            <span>{title}</span>
            <button
                onClick={toggleFavorite}
                className={clsx(styles.starButton, {
                    [styles.starIconActive]: isFavorite,
                })}
            >
                <FontAwesomeIcon icon={isFavorite ? faSolidStar : faRegularStar} />
            </button>
            <button onClick={removeCard} className={styles.removeButton}>
          <FontAwesomeIcon icon={faTrash} />
        </button>
        </li>
    );
};

export default Card;
