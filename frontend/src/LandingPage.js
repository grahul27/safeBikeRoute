import React from "react";
import { Button } from "reactstrap";

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
                An application to help cyclists and advocates visualize,
                process,
              </h3>
              <h3 className="intro-heading">
                and update data to improve bike-related safety.
              </h3>
              <h4 className="intro-click-anywhere">Click anywhere to begin</h4>
            </div>
          </div>
        </div>
      </header>
    );
  }
}
