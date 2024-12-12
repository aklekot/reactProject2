import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addListAction } from '../../redux/store';
import styles from './ListForm.module.scss';
import Button from '../Button/Button';

const ListForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title.trim() && description.trim()) {
      dispatch(addListAction({ title, description }));
      setTitle(''); 
      setDescription(''); 
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.listForm}>
    <label>Title:</label>
    <input
      type="text"
      value={title}
      onChange={(e) => setTitle(e.target.value)}
    />
    <label>Description:</label>
    <input
      type="text"
      value={description}
      onChange={(e) => setDescription(e.target.value)}
    />
    <Button>Add list</Button>
  </form>
  );
};

export default ListForm;
