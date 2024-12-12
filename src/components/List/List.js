import styles from './List.module.scss';
import Column from './../Column/Column';
import ColumnForm from './../ColumnForm/ColumnForm';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ListForm from '../ListForm/ListForm';

const List = () => {
    const { id } = useParams();
    const numericListId = id ? parseInt(id, 10) : null;
    const columns = useSelector((state) =>
        state.columns.filter((column) => column.listId === numericListId)
    );

    const listData = useSelector((state) =>
        state.lists.find((list) => list.id === numericListId)
    );


    return (
        <div className={styles.list}>
            {listData ? (
                <>
                    <header className={styles.header}>
                        <h2 className={styles.title}>
                            {listData.title}
                            <span>!</span>
                        </h2>
                    </header>
                    <p className={styles.description}>{listData.description}</p>
                    <section className={styles.columns}>
                        {columns.map((column) => (
                            <Column
                                key={column.id}
                                id={column.id}
                                title={column.title}
                                icon={column.icon}
                                cards={column.cards}
                            />
                        ))}
                    </section>
                    <ColumnForm listId={numericListId} />
                </>
            ) : (
                <p>List not found!</p>
            )}
        </div>
    );

};

export default List;
