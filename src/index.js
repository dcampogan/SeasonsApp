import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";

class App extends React.Component {
  state = { lat: null, errorMessage: "" };
  // ABOVE STATE INITIALIZATION REFACTORED FROM BELOW..
  // constructor(props) {
  //   super(props);
  //   this.state = { lat: null, errorMessage: "" };
  // }

  // good place to do data loading
  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({ lat: position.coords.latitude });
      },
      (err) => {
        this.setState({ errorMessage: err.message });
      }
    );
  }

  renderContent() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }
    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />;
    }
    return <Spinner message="Please accept location request" />;
  }

  // render gets called a lot, don't do data loading here
  render() {
    return (
      <div>
        {this.renderContent()}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
