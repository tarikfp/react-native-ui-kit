import * as React from "react";
import renderer from "react-test-renderer";
import { ListItem } from "../../list-item";

describe("tests list item component", () => {
  it("renders list item with title", () => {
    const tree = renderer
      .create(
        <ListItem>
          <ListItem.Title title="test" />
        </ListItem>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("renders list item with icon", () => {
    const tree = renderer
      .create(
        <ListItem>
          <ListItem.Icon name="arrow-left" type="MaterialCommunityIcons" />
        </ListItem>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("renders list item with image", () => {
    const tree = renderer
      .create(
        <ListItem>
          <ListItem.Image
            style={{ width: 40, height: 40 }}
            source={{ uri: "https://reactjs.org/logo-og.png" }}
          />
        </ListItem>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("renders list item with custom height", () => {
    const tree = renderer
      .create(
        <ListItem height={75}>
          <ListItem.Title title="Test" />
        </ListItem>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders list item with shadow", () => {
    const tree = renderer
      .create(
        <ListItem height={75} hasShadow>
          <ListItem.Title title="Test" />
        </ListItem>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders list item with custom backgroundColor", () => {
    const tree = renderer
      .create(
        <ListItem height={75} backgroundColor="orange">
          <ListItem.Title title="Test" />
        </ListItem>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders list item with custom style", () => {
    const tree = renderer
      .create(
        <ListItem style={{ paddingHorizontal: 20 }}>
          <ListItem.Title title="Test" />
        </ListItem>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
