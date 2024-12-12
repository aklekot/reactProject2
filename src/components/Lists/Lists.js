import { useSelector, useDispatch } from 'react-redux';
import { getAllLists, addListAction } from '../../redux/store';
import styles from './Lists.module.scss';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import ListForm from '../ListForm/ListForm';
const Lists = () => {
  const lists = useSelector(getAllLists);
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  return (
    <section className={styles.lists}>
      <h2 className={styles.heading}>Browse lists</h2>
      
      {lists.map((list) => (
        <Link key={list.id} to={`/list/${list.id}`} className={styles.listLink}>
          <h3>{list.title}</h3>
          <p>{list.description}</p>
        </Link>
      ))}
      <ListForm/>
    </section>
    
  );
};

export default Lists;
