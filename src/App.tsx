import React, {Component, FormEvent} from 'react';
import './App.css';

import Logs from './components/Logs';
import ItemBox from './components/ItemBox';

interface AppState {
  itemBoxSize: number;
  itemsLabel: string;
}

export default class App extends Component<{}, AppState> {
  state = {
    itemBoxSize: 3,
    itemsLabel: 'ITEM',
  }

  onChangeSize  = (event: FormEvent<HTMLInputElement>)=>{
    const currentTarget = event.currentTarget;
    const value  = parseInt(currentTarget.value, 10);
    if(isNaN(value))return;
    this.setState(
        {
          itemBoxSize: value
        }
    );
  }

  onChangeText  = (event: FormEvent<HTMLInputElement>)=>{
    const currentTarget = event.currentTarget;
    const value  = currentTarget.value;
    this.setState(
        {
          itemsLabel: value
        }
    );
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
        </header>
        <Logs lines={[]} />
      <div className="container">
      <div className="components">
        <label htmlFor="itemBoxSize">Nb Components:</label>
        <input
          type="number"
          name="itemBoxSize"
          id="itemBoxSize"
          onChange={this.onChangeSize}
          value={this.state.itemBoxSize}
          />
        <label htmlFor="itemsLabel">Label:</label>
        <input
          type="text"
          name="itemsLabel"
          id="itemsLabel"
          onChange={this.onChangeText}
          value={this.state.itemsLabel}
          />
        <ItemBox size={this.state.itemBoxSize} itemsLabel={this.state.itemsLabel} />
      </div>
      </div>
    </div>
    );
  }
}
