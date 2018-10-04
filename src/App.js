import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
  super(props)

    const movies = [
      {id: 0, title: "Avanger: Infinity War", overview: "As the Avengers and their allies have continued to protect the world from threats too large for any one hero to handle, a new danger has emerged from the cosmic shadows: Thanos. A despot of intergalactic infamy, his goal is to collect all six Infinity Stones, artifacts of unimaginable power, and use them to inflict his twisted will on all of reality. Everything the Avengers have fought for has led up to this moment - the fate of Earth and existence itself has never been more uncertain."},
      {id: 1, title: "The Avengers", overview: "When an unexpected enemy emerges and threatens global safety and security, Nick Fury, director of the international peacekeeping agency known as S.H.I.E.L.D., finds himself in need of a team to pull the world back from the brink of disaster. Spanning the globe, a daring recruitment effort begins!"},
      {id: 2, title: "Avengers: Age of Ultron", overview: "When Tony Stark tries to jumpstart a dormant peacekeeping program, things go awry and Earth’s Mightiest Heroes are put to the ultimate test as the fate of the planet hangs in the balance. As the villainous Ultron emerges, it is up to The Avengers to stop him from enacting his terrible plans, and soon uneasy alliances and unexpected action pave the way for an epic and unique global adventure."}
    ]
  
    var movieRows = []
     movies.forEach((movie) => {
       const movieRow = <table key={movie.id}>
         <tbody>
           <tr>
             <td>
               <img alt="poster" src="" />
             </td>
             <td>
               {movie.title}
             </td>
           </tr>
         </tbody>
       </table>
     movieRows.push(<p key={movie.id}>movie title: {movie.title}</p>)       
    })

    this.state = {rows: movieRows}
  }



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

        <input style={{
          fontSize: 24,
          display: 'block',
          width: "99%",
          paddingTop: 8,
          paddingBottom: 8,
          paddingLeft: 16,
        }} placeholder="Enter Search" />
         
         {this.state.rows}

      </div>
    );
  }
}

export default App;
