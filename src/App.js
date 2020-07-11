import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import AddItems from './components/InputTask/Task';
import ListItems from './components/ListItem/List';
import * as actionType from './store/action';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      currentItem: {
        text: '',
        id: ''
      }

    }

  }

  //Handling submitting action
  addItemHandler = (event) => {
    event.preventDefault();
    if (this.state.currentItem.text.length === 0) {
      return;
    }

    const newItemAdded = this.state.currentItem;
    const newItems = [...this.state.items, newItemAdded];
    this.setState({
      items: newItems,
      currentItem: {
        text: '',
        id: ''
      }

    });
  }

  // Handing onChange behaviour of the input field
  handleChange(event) {
    this.setState({
      currentItem: {
        text: event.target.value,
        id: Date.now()
      }
    });
  }

  //deleting item
  deleteItemHadler = (id) => {
    const filterArr = [...this.state.items];
    const filterItems = filterArr.filter(item =>
      item.id !== id);
    this.setState({
      items: filterItems
    });
  }

  setUpdateHandler = (text, id) => {
    const items = [...this.state.items];
    items.map(item => {
      if (item.id === id) {
        item.text = text;
      }
      this.setState({
        items: items
      });
    });


  }
  render() {
    return (
      <div className="App">
        <h2>Todo Application</h2>
        <AddItems
          currentValue={this.state.currentItem.text}
          handleChange={this.handleChange.bind(this)}
          addItem={this.addItemHandler}
          addStat={this.state.items.length + 0}
        />
        <ListItems
          deleteItem={this.deleteItemHadler.bind(this)}
          items={this.state.items}
          setUpdate={this.setUpdateHandler.bind(this)} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    allItems: state.items,
    add: state.text,
    id: state.id,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAddItem: () => dispatch({ type: actionType.ADD_ITEM }),
    onDeleteItem: () => dispatch({ type: actionType.DELETE_ITEM })
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(App);
