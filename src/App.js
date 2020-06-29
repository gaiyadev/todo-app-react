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
        id: Date.now() * 40
      }
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
          addStat={this.state.items.length + 1}
        />
        <ListItems items={this.state.items}> </ListItems>
      </div>
    );
  }
}

export default App;
