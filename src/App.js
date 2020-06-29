import React, { Component } from 'react';
import './App.css';
import AddItems from './components/InputTask/Task';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      text: ''
    }

  }

  addItemHandler = (event) => {
    event.preventDefault();
    if (this.state.text.length === 0) {
      return;
    }

    const newItemAdded = {
      text: this.state.text,
      id: Date.now()
    };
    this.setState(state => ({
      items: state.items.concat(newItemAdded),
      text: ''
    }));
    console.log('added')


  }

  handleChange(event) {
    this.setState({ text: event.target.value });
  }

  render() {
    let list = this.state.items.map((item) => {
      return (<ul>
        <li key={item.id} > {item.text} </li>
      </ul>);

    });

    return (
      <div className="App">
        <h2 style={{ color: 'brown', textTransform: 'capitalize' }} >To do App</h2>
        <AddItems
          currentValue={this.state.text}
          handleChange={this.handleChange.bind(this)}
          addItem={this.addItemHandler}
        />
        {list}
      </div>
    );
  }
}

export default App;
