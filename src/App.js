import React from 'react';
import logo from './logo.svg';
import './App.css';
import EntryForm from './EntryForm';

class App extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <EntryForm/>
        </header>
      </div>
    );
  }
}

export default App;
