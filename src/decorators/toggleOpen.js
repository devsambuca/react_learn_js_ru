import React, { Component as ReactComponent } from "react";

export default OriginalComponent =>
  class WrapperComponent extends ReactComponent {
    render() {
      return <OriginalComponent {...this.props} />;
    }
  };
