import * as React from "react";
import renderer from "react-test-renderer";
import ListItemIcon from "../../../list-item/components/icon";

describe("tests list item with icon component", () => {
  it("renders list item icon with name and type", () => {
    const tree = renderer
      .create(<ListItemIcon name="arrow-left" type="MaterialCommunityIcons" />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("renders list item icon with size", () => {
    const tree = renderer
      .create(
        <ListItemIcon
          name="arrow-left"
          type="MaterialCommunityIcons"
          size={45}
        />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("renders list item icon with color", () => {
    const tree = renderer
      .create(
        <ListItemIcon
          name="arrow-left"
          type="MaterialCommunityIcons"
          color="orange"
        />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("renders list item icon with backgroundColor", () => {
    const tree = renderer
      .create(
        <ListItemIcon
          name="arrow-left"
          type="MaterialCommunityIcons"
          backgroundColor="royalblue"
        />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("renders list item icon custom style", () => {
    const tree = renderer
      .create(
        <ListItemIcon
          name="arrow-left"
          type="MaterialCommunityIcons"
          style={{ marginLeft: 8 }}
        />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("renders list item icon custom wrapperStyle", () => {
    const tree = renderer
      .create(
        <ListItemIcon
          name="arrow-left"
          type="MaterialCommunityIcons"
          wrapperStyle={{ marginLeft: 8 }}
        />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("renders list item icon custom alignment", () => {
    const tree = renderer
      .create(
        <ListItemIcon
          name="arrow-left"
          type="MaterialCommunityIcons"
          alignment="start"
        />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("renders icon with custom icon props", () => {
    const tree = renderer
      .create(
        <ListItemIcon
          iconProps={{ name: "arrow-left", type: "MaterialCommunityIcons" }}
        />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
