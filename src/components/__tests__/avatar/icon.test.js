import * as React from "react";
import renderer from "react-test-renderer";
import { default as Avatar } from "../../avatar";

it("renders avatar icon with name and type props", () => {
  const tree = renderer
    .create(<Avatar.Icon name="arrow-left" type="MaterialCommunityIcons" />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

it("renders avatar icon with size prop", () => {
  const tree = renderer
    .create(
      <Avatar.Icon name="arrow-left" type="MaterialCommunityIcons" size={45} />,
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});

it("renders avatar icon with color prop", () => {
  const tree = renderer
    .create(
      <Avatar.Icon
        name="arrow-left"
        type="MaterialCommunityIcons"
        color="orange"
      />,
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});

it("renders avatar icon with backgroundColor prop", () => {
  const tree = renderer
    .create(
      <Avatar.Icon
        name="arrow-left"
        type="MaterialCommunityIcons"
        backgroundColor="royalblue"
      />,
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});

it("renders avatar icon custom style", () => {
  const tree = renderer
    .create(
      <Avatar.Icon
        name="arrow-left"
        type="MaterialCommunityIcons"
        style={{ marginLeft: 8 }}
      />,
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});

it("renders icon with custom icon props ", () => {
  const tree = renderer
    .create(
      <Avatar.Icon
        iconProps={{ name: "arrow-left", type: "MaterialCommunityIcons" }}
      />,
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
