import React from "react";
import "./App.css";
import Title, { Team2 } from "./Text";
import Text from "./Text";
import { Team1 } from "./Text";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      team1Score: 0,
      team2Score: 0,
    };
  }

  render() {
    const Text = Title();
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>{Text}</p>
          <div className="Teams">
            <div className="Team">
              <h1 className="red">{Team1()}</h1>
              <p className="red">{this.state.team1Score}</p>
              <button
                onClick={() =>
                  this.setState({ team1Score: this.state.team1Score + 1 })
                }
              >
                Add Point
              </button>
            </div>
            <div className="Team">
              <h1 className="blue">{Team2()}</h1>
              <p className="blue">{this.state.team2Score}</p>
              <button
                onClick={() =>
                  this.setState({ team2Score: this.state.team2Score + 1 })
                }
              >
                Add Point
              </button>
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
