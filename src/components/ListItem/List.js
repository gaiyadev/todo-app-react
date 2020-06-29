import React from 'react';
import styles from '../ListItem/List.module.css';
import FlipMove from 'react-flip-move';

const listItems = (props) => {
    const items = props.items;
    const listItems = items.map((item) => {
        return <div className={styles.List} key={item.id}>
            <p> <input type="text" onChange={
                (event) => {
                    props.setUpdate(event.target.value, item.id)
                }
            } value={item.text} key={item.id} />
                <i onClick={() => props.deleteItem(item.id, item.id)
                } className="fa fa-trash" aria-hidden="true">
                </i>
            </p>

        </div>
    });
    return (
        <div className="ListItem">
            <FlipMove duration={300} easing="ease-in-out">
                {listItems}
            </FlipMove>
        </div>
    );
}

export default listItems;