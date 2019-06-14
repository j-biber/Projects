import React, { Component } from "react";
import * as profileService from "../../../services/ProfileService";

class ProfilePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      profile: {}
    };
  }

  componentDidMount() {
    profileService
      .fetchProfile()
      .then(data => this.setState({ profile: data }));
  }

  render() {
    return (
      <div className="container col s12 m8 offset-m2 l6 offset-l3">
        <div style={{ padding: 30 }}>
          <div className="row ">
            <div className="col s6 offset-m2 l4 offset-l4">
              <img
                src={this.state.profile.photo}
                alt=""
                className="circle responsive-img"
              />
              <h3 style={{ textAlign: "center", paddingBottom: "50px" }}>
                {this.state.profile.name}
              </h3>
            </div>
            <div className="col s12 col s6 offset-m2 l6 offset-l3">
              <p
                style={{ textAlign: "center", paddingBottom: "50px" }}
                className="black-text"
              >
                {this.state.profile.description}
              </p>
              <span>
                <span
                  className="square "
                  style={{
                    backgroundColor: "#3d5998",
                    padding: "5px",
                    color: "white"
                  }}
                >
                  {`Comment Number: `}
                  {this.state.profile.postNum}
                </span>
              </span>
              <span style={{ float: "right" }}>
                <span
                  className="square"
                  style={{
                    backgroundColor: "#3d5998",
                    padding: "5px",
                    color: "white"
                  }}
                >
                  {`Comment Number: `} {this.state.profile.commentsNum}
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export { ProfilePage };
