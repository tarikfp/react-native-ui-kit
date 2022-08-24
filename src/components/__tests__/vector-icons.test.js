import * as React from "react";
import renderer from "react-test-renderer";
import Icon from "../vector-icons";

describe("tests icon component", () => {
  it("renders icon with type and name", () => {
    const tree = renderer
      .create(<Icon name="arrow-left" type="MaterialCommunityIcons" />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
