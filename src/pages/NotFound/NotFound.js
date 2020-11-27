import React, { Component } from "react";

export class NotFoundPage extends Component {
  render() {
    return (
      <div className="Container">
          
          <div className="alert">
            <button type="button" className="close" data-dismiss="alert" aria-hidden="true">&times;</button>
            <strong>NotFound!</strong> The request page is not available ...
          </div>
          
      </div>
    );
  }
}

export default NotFoundPage;
