import React from 'react';
import styles from '../ListItem/List.module.css';

const listItems = (props) => {
    const items = props.items;
    const listItems = items.map((item) => {
        return <div className={styles.List} key={item.id}>
            <p>{item.text}<i onClick={() => props.deleteItem(item.id)} className="fa fa-trash" aria-hidden="true"></i>
            </p>

        </div>
    });
    return (
        <div className="ListItem">
            {listItems}
        </div>
    );
}

export default listItems;