import styles from './CardForm.module.scss';
import { useState } from 'react';
import Button from './../Button/Button';
import TextInput from './../TextInput/TextInput';
import { addCardAction } from '../../redux/store';
import { useDispatch } from 'react-redux';

const CardForm = ({ columnId }) => {
    const dispatch = useDispatch();
    const [title, setTitle] = useState('');
    const handleSubmit = e => {
        e.preventDefault();
        if (title.trim()) {
            dispatch(addCardAction({ title, columnId }));
            setTitle('');
        }
        setTitle('');
    };

    return (
        <form className={styles.cardForm} onSubmit={handleSubmit}>
            <TextInput value={title} onChange={e => setTitle(e.target.value)} />
            <Button>Add card</Button>
        </form>
    );
};

export default CardForm;