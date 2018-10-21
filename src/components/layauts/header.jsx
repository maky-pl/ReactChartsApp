import React, { Component, Fragment } from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";

export default class extends Component {
  render() {
    return (
      <Fragment>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h5" color="inherit" class="display2">
              Simple Graphs with Charts.js and Material Kit React. Click Labels
              to toggle data.
            </Typography>
          </Toolbar>
        </AppBar>
      </Fragment>
    );
  }
}
