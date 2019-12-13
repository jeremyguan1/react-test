import React, { Component } from "react";
import MovieFrom from "./MovieForm";

export default class NewMovie extends Component {
  render() {
    return (
      <div>
        <h1 data-testid="page-title">New Movie</h1>
        <MovieFrom />
      </div>
    );
  }
}
