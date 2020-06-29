import React from 'react';

const addItems = (props) => {
    const styles = {
        height: "20px",
        padding: '20px',
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
                    style={{ marginTop: '20px', backgroundColor: 'grey', color: 'white', padding: '12px 10px' }}
                    type="submit">Add Item</button>
            </form>

        </div>
    );
}

export default addItems;