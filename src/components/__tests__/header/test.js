import * as React from "react";
import renderer from "react-test-renderer";
import { Header } from "../../header";

describe("tests header component", () => {
  it("renders header with title", () => {
    const tree = renderer
      .create(
        <Header>
          <Header.Title title="test" />
        </Header>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("renders header with icon", () => {
    const tree = renderer
      .create(
        <Header>
          <Header.Icon name="arrow-left" type="MaterialCommunityIcons" />
        </Header>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("renders header with image", () => {
    const tree = renderer
      .create(
        <Header>
          <Header.Image
            style={{ width: 40, height: 40 }}
            source={{ uri: "https://reactjs.org/logo-og.png" }}
          />
        </Header>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("renders header with custom height", () => {
    const tree = renderer
      .create(
        <Header height={75}>
          <Header.Title title="Test" />
        </Header>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders header with shadow", () => {
    const tree = renderer
      .create(
        <Header height={75} hasShadow>
          <Header.Title title="Test" />
        </Header>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders header with custom backgroundColor", () => {
    const tree = renderer
      .create(
        <Header height={75} backgroundColor="orange">
          <Header.Title title="Test" />
        </Header>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders header with custom style", () => {
    const tree = renderer
      .create(
        <Header style={{ paddingHorizontal: 20 }}>
          <Header.Title title="Test" />
        </Header>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
