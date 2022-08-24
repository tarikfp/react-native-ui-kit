import * as React from "react";
import renderer from "react-test-renderer";
import HeaderImage from "../../../header/components/image";

describe("tests header image component", () => {
  it("renders header image with source", () => {
    const tree = renderer
      .create(
        <HeaderImage
          style={{ width: 50, height: 50 }}
          source={{
            uri: "https://reactjs.org/logo-og.png"
          }}
        />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
