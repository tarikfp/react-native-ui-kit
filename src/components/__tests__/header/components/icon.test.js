import * as React from "react";
import renderer from "react-test-renderer";
import HeaderIcon from "../../../header/components/icon";

describe("tests header icon component", () => {
  it("renders header icon with name and type", () => {
    const tree = renderer
      .create(<HeaderIcon name="arrow-left" type="MaterialCommunityIcons" />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("renders header icon with icon with size", () => {
    const tree = renderer
      .create(
        <HeaderIcon name="arrow-left" type="MaterialCommunityIcons" size={45} />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("renders header icon with color", () => {
    const tree = renderer
      .create(
        <HeaderIcon
          name="arrow-left"
          type="MaterialCommunityIcons"
          color="orange"
        />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("renders header icon with alignment", () => {
    const tree = renderer
      .create(
        <HeaderIcon
          name="arrow-left"
          type="MaterialCommunityIcons"
          alignment="end"
        />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("renders header icon with icon custom style", () => {
    const tree = renderer
      .create(
        <HeaderIcon
          name="arrow-left"
          type="MaterialCommunityIcons"
          style={{ marginLeft: 8 }}
        />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("renders header icon with custom wrapper style ", () => {
    const tree = renderer
      .create(
        <HeaderIcon
          name="arrow-left"
          type="MaterialCommunityIcons"
          wrapperStyle={{
            backgroundColor: "royalblue",
            width: 600,
            height: 50
          }}
        />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
