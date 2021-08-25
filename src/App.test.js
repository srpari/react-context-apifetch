// import { render, screen } from "@testing-library/react";
import App from "./App";

import { shallow } from "enzyme";

// test("renders learn react link", () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

it("renders without crashing", () => {
  shallow(<App />);
});

it("renders Account header", () => {
  const wrapper = shallow(<App />);
  const welcome = <h1>React Context API</h1>;
  expect(wrapper.contains(welcome)).toEqual(true);
});
