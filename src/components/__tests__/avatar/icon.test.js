import * as React from "react";
import renderer from "react-test-renderer";
import { default as Avatar } from "../../avatar";

describe("tests avatar with icon component", () => {
  it("renders avatar with icon with name and type", () => {
    const tree = renderer
      .create(<Avatar.Icon name="arrow-left" type="MaterialCommunityIcons" />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("renders avatar with icon with size", () => {
    const tree = renderer
      .create(
        <Avatar.Icon
          name="arrow-left"
          type="MaterialCommunityIcons"
          size={45}
        />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("renders avatar with icon with color", () => {
    const tree = renderer
      .create(
        <Avatar.Icon
          name="arrow-left"
          type="MaterialCommunityIcons"
          color="orange"
        />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("renders avatar with icon with backgroundColor", () => {
    const tree = renderer
      .create(
        <Avatar.Icon
          name="arrow-left"
          type="MaterialCommunityIcons"
          backgroundColor="royalblue"
        />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("renders avatar with icon custom style", () => {
    const tree = renderer
      .create(
        <Avatar.Icon
          name="arrow-left"
          type="MaterialCommunityIcons"
          style={{ marginLeft: 8 }}
        />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("renders icon with custom icon ", () => {
    const tree = renderer
      .create(
        <Avatar.Icon
          iconProps={{ name: "arrow-left", type: "MaterialCommunityIcons" }}
        />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
