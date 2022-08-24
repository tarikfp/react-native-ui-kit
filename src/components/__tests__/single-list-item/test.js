import * as React from "react";
import { Text, View } from "react-native";
import renderer from "react-test-renderer";
import { SingleListItem } from "../../single-list-item";

describe("tests single list item component", () => {
  it("renders single list item with title", () => {
    const tree = renderer.create(<SingleListItem startTitle="test" />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("renders single list item with start title custom style", () => {
    const tree = renderer
      .create(
        <SingleListItem
          startTitle="test"
          startTitleStyle={{ fontSize: 32, fontWeight: "700" }}
        />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("renders single list item with start subtitle", () => {
    const tree = renderer
      .create(<SingleListItem startSubtitle="test" />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("renders single list item with start subtitle custom style", () => {
    const tree = renderer
      .create(
        <SingleListItem
          startSubtitle="test"
          startSubtitleStyle={{ fontSize: 32, fontWeight: "700" }}
        />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("renders single list item with startTitleSubtitleContainer custom style", () => {
    const tree = renderer
      .create(
        <SingleListItem
          startTitle="test"
          startTitleSubtitleContainerStyle={{ padding: 8 }}
        />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("renders single list item with startIcon", () => {
    const tree = renderer
      .create(
        <SingleListItem
          startTitle="test"
          startIcon={{ name: "arrow-left", type: "MaterialCommunityIcons" }}
        />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("renders single list item with endIcon", () => {
    const tree = renderer
      .create(
        <SingleListItem
          startTitle="test"
          endIcon={{ name: "arrow-right", type: "MaterialCommunityIcons" }}
        />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("renders single list item with custom height", () => {
    const tree = renderer
      .create(<SingleListItem height={75} startTitle="test" />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("renders single list item with custom start element", () => {
    const tree = renderer
      .create(
        <SingleListItem
          startTitle="test"
          renderStartElement={() => (
            <View>
              <Text>Start element text</Text>
            </View>
          )}
        />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("renders single list item with custom end element", () => {
    const tree = renderer
      .create(
        <SingleListItem
          startTitle="test"
          renderEndElement={() => (
            <View>
              <Text>End element text</Text>
            </View>
          )}
        />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("renders single list item with end title", () => {
    const tree = renderer.create(<SingleListItem endTitle="test" />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("renders single list item with custom end title style", () => {
    const tree = renderer
      .create(
        <SingleListItem
          endTitle="test"
          endTitleStyle={{
            fontSize: 32,
            fontWeight: "700",
          }}
        />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("renders single list item with end subtitle", () => {
    const tree = renderer
      .create(<SingleListItem endSubtitle="test" />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("renders single list item with custom end subtitle style", () => {
    const tree = renderer
      .create(
        <SingleListItem
          endSubtitle="test"
          endSubtitleStyle={{
            fontSize: 32,
            fontWeight: "700",
          }}
        />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("renders single list item with custom endTitleSubtitleContainerStyle custom style", () => {
    const tree = renderer
      .create(
        <SingleListItem
          endTitle="test-title"
          endSubtitle="test-subtitle"
          endTitleSubtitleContainerStyle={{ padding: 8 }}
        />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("renders single list item with shadow applied", () => {
    const tree = renderer
      .create(<SingleListItem hasShadow startTitle="test" />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
