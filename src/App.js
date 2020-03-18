import React from 'react';
import logo from './logo.svg';
import './App.css';
import EntryForm from './EntryForm';
import ItemTable from './ItemTable';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {records: [], newItem: {}}
  }


  addRecord = (newItem) =>{
    this.setState({newItem: newItem});
  }

  render(){
    let table = this.state.newItem.data !== '' ?  <ItemTable record = {this.state.newItem}/> : '';
    return (
      <div className="App">
        <header className="App-header">
          <EntryForm addRecord = {this.addRecord}/>
          {table}
        </header>
      </div>
    );
  }
}

export default App;
