import React, { Component } from "react";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <h4 className="mt-3">Homepage</h4>
          <hr />

          <iframe
            width="908"
            height="600"
            src="https://www.youtube.com/embed/6u_j4d9D4Rc"
            title="Don Omar - Danza Kuduro [REMIX] | CAR VIDEO"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    );
  }
}

export default Home;
