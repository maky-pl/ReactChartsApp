import React from "react";
import App from "./App";
import { shallow } from "enzyme";
import { Bar, Line } from "react-chartjs-2";
import { configure } from "enzyme";

import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });

describe("App", () => {
  it("Should be able to run tests", () => {
    expect(1 + 2).toEqual(3);
  });
});

it("Renders App without crashing", () => {
  shallow(<App />);
});

it("Render Bar chart without crashing", () => {
  shallow(<Bar />);
});

it("Render Line chart without crashing", () => {
  shallow(<Line />);
});
