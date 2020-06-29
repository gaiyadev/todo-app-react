import React from 'react';
import styles from '../ListItem/List.module.css';

const listItem = (props) => {
    const items = props.items;
    const listItems = items.map((item) => {
        return <div className="list" key={item.id}>
            <p>{item.text}</p>
        </div>
    });
    return (
        <div>
            {listItems}
        </div>
    );
}

export default listItem;