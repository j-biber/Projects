import React, { Component } from "react";
import "../PostDetailsComponents/PostDetails.css";
import { addComment } from "../../../../services/CommentService";

class AddComment extends Component {
  constructor(props) {
    super(props);

    this.state = {
      disabled: true,
      newComment: ""
    };
  }

  onValueChange = event => {
    this.setState({ newComment: event.target.value, disabled: false });
  };

  createComment = () => {
    addComment(this.props.post, this.state.newComment).then(() => {
      this.setState({ newComment: "", disabled: true });
      this.props.afterCreation();
    });
  };

  render() {
    return (
      <div className="row">
        <form className="col s12">
          <div className="row">
            <div className="input-field col s12">
              <textarea
                id="icon_prefix2"
                value={this.state.newComment}
                onChange={this.onValueChange}
                className="materialize-textarea"
                placeholder="Add Comment"
              />
              <input
                disabled={this.state.disabled}
                onClick={this.createComment}
                type="button"
                className="waves-effect waves-light btn"
                value="SEND"
              />
            </div>
          </div>
        </form>
      </div>
    );
  }
}
export { AddComment };
