import React from 'react';
import { render, screen } from "@testing-library/react";
import { Provider } from 'react-redux';
import {mockStore} from './mocks/storeMock';
import '@testing-library/jest-dom';
import Home from "../pages";

jest.mock("next/router", () => ({
    useRouter() {
        return {
            route: "/",
            pathname: "",
            query: "",
            asPath: "",
            replace: () => {}
        };
    },
}));

describe("App", () => {
  it("renders without crashing", () => {
    render(<Provider store={mockStore}><Home /></Provider>)
    expect(
      screen.getByRole("heading", { name: "Filters" })
    ).toBeInTheDocument();
  });
});