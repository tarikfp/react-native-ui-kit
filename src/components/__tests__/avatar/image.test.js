import * as React from "react";
import renderer from "react-test-renderer";
import { default as Avatar } from "../../avatar";

describe("tests avatar with image component", () => {
  it("renders avatar with image with source uri and custom style", () => {
    const tree = renderer
      .create(
        <Avatar.Image
          style={{ width: 50, height: 50 }}
          source={{
            uri: "https://reactjs.org/logo-og.png",
          }}
        />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("renders avatar with image with custom size", () => {
    const tree = renderer
      .create(
        <Avatar.Image
          size={70}
          style={{ width: 50, height: 50, borderRadius: 8 }}
          source={{
            uri: "https://reactjs.org/logo-og.png",
          }}
        />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("renders avatar with image with custom image style", () => {
    const tree = renderer
      .create(
        <Avatar.Image
          style={{ width: 50, height: 50, borderRadius: 8 }}
          source={{
            uri: "https://reactjs.org/logo-og.png",
          }}
          imageStyle={{ width: 30, height: 30 }}
        />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("renders avatar with image with backgroundColor", () => {
    const tree = renderer
      .create(
        <Avatar.Image
          style={{ width: 50, height: 50, borderRadius: 8 }}
          source={{
            uri: "https://reactjs.org/logo-og.png",
          }}
          backgroundColor="royalblue"
        />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
