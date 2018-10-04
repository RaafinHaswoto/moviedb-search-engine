import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        
        <table className="titleBar">
          <tbody>
            <tr>
              <td>
                <img alt="app-icon" width="100" src="green_app_icon.svg" />
              </td>
              <td width="8" />
              <td>
                <h1>MoviesDB Search</h1>
              </td>
            </tr>
          </tbody>
        </table>

        <input placeholder="Enter Search" />

      </div>
    );
  }
}

export default App;
