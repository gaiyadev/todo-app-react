import React from 'react';

const addItems = (props) => {
    const styles = {
        height: "15px",
        padding: '10px',
    }
    return (
        <div>
            <form onSubmit={props.addItem}>
                <label>Items</label> &nbsp;
            <input
                    value={props.currentValue}
                    onChange={props.handleChange}
                    style={styles} type="text" name="add" /><br />
                <button
                    style={{ marginTop: '20px', backgroundColor: 'red', color: 'white', padding: '12px 10px' }}
                    type="submit">Add Item #{props.addStat} </button>
            </form>

        </div>
    );
}

export default addItems;