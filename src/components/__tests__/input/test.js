import { fireEvent, render } from "@testing-library/react-native";
import * as React from "react";
import { Image, Text, View } from "react-native";
import renderer from "react-test-renderer";
import { TextInput } from "../../input";
import Icon from "../../vector-icons";

describe("tests input component", () => {
  it("renders input with label", () => {
    const tree = renderer.create(<TextInput label="test" />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("renders input with custom backgroundColor", () => {
    const tree = renderer
      .create(<TextInput label="test" backgroundColor="orange" />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("renders input with custom inputStyle", () => {
    const tree = renderer
      .create(<TextInput inputStyle={{ marginBottom: 20 }} />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("renders input with custom wrapperStyle", () => {
    const tree = renderer
      .create(<TextInput wrapperStyle={{ marginBottom: 20 }} />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("renders input with error message", () => {
    const tree = renderer
      .create(<TextInput errorMessage="error message" />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("renders input with custom errorMessageIconProps", () => {
    const tree = renderer
      .create(
        <TextInput
          errorMessage="error message"
          errorMessageIconProps={{
            name: "error",
            type: "MaterialIcons",
          }}
        />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("renders input with custom startIcon", () => {
    const tree = renderer
      .create(
        <TextInput
          label="Test"
          startIcon={{
            name: "arrow-left",
            type: "MaterialCommunityIcons",
          }}
        />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("renders input with custom endIcon", () => {
    const tree = renderer
      .create(
        <TextInput
          label="Test"
          endIcon={{
            name: "arrow-right",
            type: "MaterialCommunityIcons",
          }}
        />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("renders input with custom start element", () => {
    const tree = renderer
      .create(
        <TextInput
          label="Test"
          renderStartElement={() => (
            <View>
              <Image
                style={{ width: 30, height: 30 }}
                source={{
                  uri: "https://reactjs.org/logo-og.png",
                }}
              />
            </View>
          )}
        />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("renders input with custom end element", () => {
    const tree = renderer
      .create(
        <TextInput
          label="Test"
          renderEndElement={() => (
            <View>
              <Image
                style={{ width: 30, height: 30 }}
                source={{
                  uri: "https://reactjs.org/logo-og.png",
                }}
              />
            </View>
          )}
        />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("renders input with end text", () => {
    const tree = renderer
      .create(<TextInput label="Test" endText="input end text" />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("renders input with custom end text style", () => {
    const tree = renderer
      .create(
        <TextInput
          label="Test"
          endText="input end text"
          endTextStyle={{ fontSize: 40 }}
        />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("renders input with loading state", () => {
    const tree = renderer.create(<TextInput loading label="Test" />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("renders input with custom loading props", () => {
    const tree = renderer
      .create(
        <TextInput label="Test" loadingProps={{ color: "gold", size: 40 }} />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("renders input with custom loading element", () => {
    const tree = renderer
      .create(
        <TextInput
          label="Test"
          renderLoading={(containerStyle) => (
            <View style={[containerStyle]}>
              <Text>Loading...</Text>
            </View>
          )}
        />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("renders input with custom password icon", () => {
    const tree = renderer
      .create(
        <TextInput
          label="Test"
          renderPasswordIcon={({ isSecureTextEntry, toggleSecureTextEntry }) =>
            isSecureTextEntry ? (
              <Icon onPress={toggleSecureTextEntry} name="eye" type="Feather" />
            ) : (
              <Icon
                onPress={toggleSecureTextEntry}
                name="eye-off"
                type="Feather"
              />
            )
          }
        />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("renders input with custom disabled state", () => {
    const tree = renderer.create(<TextInput disabled label="Test" />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("renders input with hiding default end icons state", () => {
    const tree = renderer
      .create(<TextInput hideDefaultEndIcons label="Test" />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("renders input with custom height", () => {
    const tree = renderer
      .create(<TextInput height={75} label="Test" />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("renders input with custom borderRadius", () => {
    const tree = renderer
      .create(<TextInput borderRadius={8} label="Test" />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("renders input with custom label style", () => {
    const tree = renderer
      .create(<TextInput labelStyle={{ fontSize: 40 }} label="Test" />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("renders input with custom border color", () => {
    const tree = renderer
      .create(<TextInput borderColor="purple" label="Test" />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("renders input with custom error color", () => {
    const tree = renderer
      .create(<TextInput errorColor="crimson" label="Test" />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("renders input with custom error section", () => {
    const tree = renderer
      .create(
        <TextInput
          label="test"
          renderErrorSection={({ containerStyle, errorMessage }) => {
            return (
              <View style={[containerStyle]}>
                <Text>{errorMessage}</Text>
              </View>
            );
          }}
        />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("should change input value with onChangeText", async () => {
    const onChangeTextMock = jest.fn();

    const { getByTestId } = render(
      <TextInput
        testID="text-input"
        label="test"
        value="initial-text-value"
        onChangeText={onChangeTextMock}
      />
    );

    const input = getByTestId("text-input");

    await fireEvent(input, "onChangeText", "changed-text-value");

    expect(onChangeTextMock).toHaveBeenCalledWith("changed-text-value");
  });
});
