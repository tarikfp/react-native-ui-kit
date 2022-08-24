import * as React from "react";
import renderer from "react-test-renderer";
import ListItemImage from "../../../list-item/components/image";

describe("tests list-item image component", () => {
  it("renders list-item image with source", () => {
    const tree = renderer
      .create(
        <ListItemImage
          style={{ width: 50, height: 50 }}
          source={{
            uri: "https://reactjs.org/logo-og.png",
          }}
        />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
