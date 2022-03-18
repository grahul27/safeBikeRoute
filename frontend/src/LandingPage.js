import React from "react";

export default class LandingPage extends React.Component {
  render() {
    return (
      <header className="masthead">
        <div className="landing-media">
          <div className="overlay" onClick={this.props.clickAnywhere}>
            <div className="overlay-text">
              <h2 className="intro-lead-in">
                Mapping a Safer Future for Cyclists
              </h2>
              <h3 className="intro-heading">
                A web application to help cyclists visualize, process and update
                data to improve saftey.
              </h3>
            </div>
          </div>
        </div>
      </header>
    );
  }
}
