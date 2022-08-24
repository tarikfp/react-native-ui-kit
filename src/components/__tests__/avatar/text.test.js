import * as React from "react";
import renderer from "react-test-renderer";
import { default as Avatar } from "../../avatar";

describe("tests avatar with text component", () => {
  it("renders avatar with text with label", () => {
    const tree = renderer.create(<Avatar.Text label="Test" />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("renders avatar with text with size", () => {
    const tree = renderer
      .create(<Avatar.Text label="Test" size={30} />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("renders avatar with text with label color", () => {
    const tree = renderer
      .create(<Avatar.Text label="Test" size={30} labelColor="royalblue" />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("renders avatar with text with backgroundColor", () => {
    const tree = renderer
      .create(
        <Avatar.Text
          label="Test"
          size={30}
          labelColor="royalblue"
          backgroundColor="orange"
        />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("renders avatar with text with custom style", () => {
    const tree = renderer
      .create(
        <Avatar.Text
          label="Test"
          style={{ marginLeft: 20 }}
          size={30}
          labelColor="royalblue"
          backgroundColor="orange"
        />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("renders avatar with text with custom label style", () => {
    const tree = renderer
      .create(
        <Avatar.Text
          label="Test"
          size={30}
          labelStyle={{ fontSize: 20, fontWeight: "700" }}
        />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
