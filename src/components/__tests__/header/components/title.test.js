import * as React from "react";
import renderer from "react-test-renderer";
import HeaderTitle from "../../../header/components/title";

describe("tests header title component", () => {
  it("renders header title", () => {
    const tree = renderer.create(<HeaderTitle title="Test" />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("renders header title with subtitle", () => {
    const tree = renderer
      .create(<HeaderTitle title="Test" subtitle="Test subtitle" />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("renders header title with custom title style", () => {
    const tree = renderer
      .create(<HeaderTitle title="Test" style={{ fontSize: 40 }} />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("renders header title with custom subtitle style", () => {
    const tree = renderer
      .create(
        <HeaderTitle
          title="Test"
          subtitleStyle={{ fontSize: 40, fontWeight: "700" }}
        />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("renders header title with custom wrapper style", () => {
    const tree = renderer
      .create(
        <HeaderTitle title="Test" wrapperStyle={{ height: 70, padding: 8 }} />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
