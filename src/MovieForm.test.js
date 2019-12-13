import React from "react";
import { render, cleanup, fireEvent } from "react-testing-library";
import MovieForm from "./MovieForm";

afterEach(cleanup);

test("<NewMovie /> ", () => {
  const { debug, getByTestId, queryByTestId, container, getByText } = render(<MovieForm />);
  expect(getByTestId("page-title").textContent).toBe("New Movie");
  expect(queryByTestId("movie-form")).toBeTruthy();

  fireEvent.click(getByText("Submit"));
});
