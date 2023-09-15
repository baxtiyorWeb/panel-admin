import React from "react";
import "./ToggleBtn.scss";
class ToggleBtn extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isActive: false };
  }

  toggle() {
    this.setState({ isActive: !this.state.isActive });
  }

  render() {
    const state = this.state;
    const activeCls = state.isActive ? " is-active" : "";
    const activeTxt = state.isActive ? "On" : "Off";
    return (
      <button
        className={"SlideBtn" + activeCls}
        onClick={this.toggle.bind(this)}
      >
        <span className="SlideBtn-label visuallyhidden">{activeTxt}</span>
        <span className="SlideBtn-knob"></span>
      </button>
    );
  }
}

export default ToggleBtn;
