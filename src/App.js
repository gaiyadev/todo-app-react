import React, { Component } from 'react';
import './App.css';
import AddItems from './components/InputTask/Task';
import ListItems from './components/ListItem/List';

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

  deleteItemHadler = (id) => {
    const filterItems = [...this.state.items];
    let l = filterItems.splice(id, 1);
    console.log(l);

    this.setState({
      items: filterItems

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
        <ListItems deleteItem={this.deleteItemHadler.bind(this)} items={this.state.items} />
      </div>
    );
  }
}

export default App;
