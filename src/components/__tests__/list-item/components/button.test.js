import * as React from "react";
import renderer from "react-test-renderer";
import ListItemButton from "../../../list-item/components/button";

describe("tests list item with button component", () => {
  it("renders list item button with alignment", () => {
    const tree = renderer
      .create(<ListItemButton label="test" alignment="end" />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("renders list item button with custom wrapperStyle", () => {
    const tree = renderer
      .create(
        <ListItemButton label="test" wrapperStyle={{ marginBottom: 40 }} />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
