import React from 'react';
import styles from '../../components/InputTask/Task.module.css';

const addItems = (props) => {

    return (
        <div className={styles.Form}>
            <form id="todo-form" onSubmit={props.addItem}>
                {/* <label>Items</label> &nbsp; */}
                <input
                    placeholder="Enter Text"
                    value={props.currentValue}
                    onChange={props.handleChange}
                    type="text" name="add" />
                <button type="submit">ADD #{props.addStat} </button>
            </form>

        </div>
    );
}

export default addItems;