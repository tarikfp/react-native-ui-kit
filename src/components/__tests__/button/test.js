import { fireEvent, render } from "@testing-library/react-native";
import * as React from "react";
import renderer from "react-test-renderer";
import { Button } from "../../button";

describe("tests button component", () => {
  it("renders button with label", () => {
    const tree = renderer.create(<Button label="button label" />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("renders button with size", () => {
    const tree = renderer
      .create(<Button label="Test" size="medium" />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("renders button with loading state", () => {
    const tree = renderer
      .create(<Button loading loadingProps={{ testID: "button-loading" }} />)
      .toJSON();

    expect(tree).toMatchSnapshot();

    const { getByTestId } = render(
      <Button loading loadingProps={{ testID: "button-loading" }} />
    );

    expect(getByTestId("button-loading")).toBeDefined();
  });

  it("renders button with custom label style", () => {
    const tree = renderer
      .create(
        <Button label="Test" labelStyle={{ fontSize: 24, fontWeight: "700" }} />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("renders button with custom background color", () => {
    const tree = renderer
      .create(<Button label="Test" backgroundColor="orange" />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("renders button with custom disabled background color", () => {
    const tree = renderer
      .create(
        <Button label="Test" disabled disabledBackgroundColor="slategray" />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("renders button with custom start icon", () => {
    const tree = renderer
      .create(
        <Button
          label="Test"
          startIcon={{ name: "arrow-left", type: "MaterialCommunityIcons" }}
        />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("renders button with custom end icon", () => {
    const tree = renderer
      .create(
        <Button
          label="Test"
          endIcon={{ name: "arrow-right", type: "MaterialCommunityIcons" }}
        />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("should execute onPress", () => {
    const onPressMock = jest.fn();

    const { getByTestId } = render(
      <Button
        testID="button"
        onPress={onPressMock}
        loading
        loadingProps={{ testID: "button-loading" }}
      />
    );

    fireEvent(getByTestId("button"), "onPress");

    expect(onPressMock).toHaveBeenCalledTimes(1);
  });

  it("should execute onPressIn", () => {
    const onPressInMock = jest.fn();

    const { getByTestId } = render(
      <Button
        testID="button"
        onPressIn={onPressInMock}
        loading
        loadingProps={{ testID: "button-loading" }}
      />
    );

    fireEvent(getByTestId("button"), "onPressIn");

    expect(onPressInMock).toHaveBeenCalledTimes(1);
  });

  it("should execute onPressOut", () => {
    const onPressOutMock = jest.fn();

    const { getByTestId } = render(
      <Button
        testID="button"
        onPressOut={onPressOutMock}
        loading
        loadingProps={{ testID: "button-loading" }}
      />
    );

    fireEvent(getByTestId("button"), "onPressOut");

    expect(onPressOutMock).toHaveBeenCalledTimes(1);
  });
});
