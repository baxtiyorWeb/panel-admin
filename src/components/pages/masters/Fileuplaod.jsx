import React from "react";
import "./FileUpload.scss";

const ProfileImg = (props) => (
  <div className="profile-container">
    {props.imgUrl ? (
      <img src={props.imgUrl} alt="profile-img" className="profile" />
    ) : (
      <div className="icon-container drop-it-wrap" onClick={props.onUpload}>
        <i className="fas fa-camera icon"></i>
      </div>
    )}
  </div>
);

class Fileuplaod extends React.Component {
  state = {
    selectedFile: null,
    url: undefined,
  };
  fileSelectedHandler = (e) => {
    this.setState({
      selectedFile: e.target.files[0],
      url: "https://picsum.photos/200/300",
    });
  };
  fileUploadHandler = () => {
    console.log("test");
    console.log(this.state.selectedFile);
  };
  render() {
    return (
      <div>
        <ProfileImg
          imgUrl={this.state.url}
          onUpload={() => {
            this.fileInput.click();
          }}
        />
        <input
          type="file"
          className="file-input"
          style={{
            opacity: "0",
            scale: 0,
          }}
          onChange={this.fileSelectedHandler}
          ref={(fileInput) => {
            this.fileInput = fileInput;
          }}
        />
      </div>
    );
  }
}
export default Fileuplaod;
