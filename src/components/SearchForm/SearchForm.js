import TextInput from '../TextInput/TextInput';
import styles from './SearchForm.module.scss';
import Button from '../Button/Button';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import {updateSearchStringAction} from '../../redux/store';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const SearchForm = () => {
    const dispatch = useDispatch();
    const [inputValue, setInputValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(updateSearchStringAction(inputValue));
    };

    return (
        <form className={styles.searchForm} onSubmit={handleSubmit}>
            <TextInput placeholder="Search..." value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
            <Button type="submit">
            <FontAwesomeIcon icon={faSearch} className={styles.icon} />
               
            </Button>
        </form>
    );
};

export default SearchForm;