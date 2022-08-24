import * as React from "react";
import renderer from "react-test-renderer";
import ListItemTitle from "../../../list-item/components/title";

describe("tests list item title component", () => {
  it("renders list item title", () => {
    const tree = renderer.create(<ListItemTitle title="Test" />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("renders list item title with subtitle", () => {
    const tree = renderer
      .create(<ListItemTitle title="Test" subtitle="Test subtitle" />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("renders list item title with custom title style", () => {
    const tree = renderer
      .create(<ListItemTitle title="Test" style={{ fontSize: 40 }} />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("renders list item title with custom subtitle style", () => {
    const tree = renderer
      .create(
        <ListItemTitle
          title="Test"
          subtitleStyle={{ fontSize: 40, fontWeight: "700" }}
        />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("renders list item title with custom wrapper style", () => {
    const tree = renderer
      .create(
        <ListItemTitle title="Test" wrapperStyle={{ height: 70, padding: 8 }} />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
