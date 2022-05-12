import React from "react";


class Profile extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedFile: "",
      login: "false",
    };
  }

  componentDidMount() {
    const login = localStorage.getItem("login");
    this.setState({ login: login });
  }
  render() {
    if (this.state.login === "true") {
      return (
        <div>
          Home Page
        </div>
      );
    } else {
      return (
        <div>
          <p>You're not authorized</p>
        </div>
      );
    }
  }
}

export default Profile;
