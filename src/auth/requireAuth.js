import React, { Component } from "react";
import { connect } from "react-redux";

export default function requireAuth(ChildComponent) {
  class ComposedComponent extends Component {
    componentDidMount() {
      this.navigate();
    }

    componentDidUpdate() {
      this.navigate();
    }

    navigate() {
      console.log(this.props.isLoggedIn);
      if (!this.props.isLoggedIn) {
        this.props.history.push("/login");
      }
    }
    render() {
      return <ChildComponent {...this.props} />;
    }
  }

  const mapStateToProps = (state) => {
    return {
      isLoggedIn: state.isLoggedIn.authenticated,
    };
  };

  return connect(mapStateToProps)(ComposedComponent);
}
