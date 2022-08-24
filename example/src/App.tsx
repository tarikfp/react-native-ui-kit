/* eslint-disable import/no-unresolved */
import * as React from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  View
} from "react-native";
import {
  Avatar,
  Button,
  Header,
  ListItem,
  TextInput
} from "react-native-ui-kit";
import ColumnContainer from "./showcase/layout/column-container";
import RowContainer from "./showcase/layout/row-container";

export default function App() {
  const [email, setEmail] = React.useState<string>("");
  const [pass, setPass] = React.useState<string>("");
  const [rnInputText, setRnInputText] = React.useState<string>("");
  const [loadingInputText, setLoadingInputText] = React.useState<string>("");
  const [notification, setNotification] = React.useState<boolean>(true);

  return (
    <SafeAreaView style={styles.safeArea}>
      <Header
        style={{
          justifyContent: "space-around",
          backgroundColor: "darkslateblue"
        }}>
        <Header.Icon
          size={30}
          name="arrow-left"
          type="MaterialCommunityIcons"
          color="#ffff"
        />

        <Header.Title title="React Native UI Kit" />

        <Avatar.Image
          style={{ marginLeft: 8 }}
          source={{
            uri: "https://reactnative.dev/img/logo-og.png"
          }}
        />

        <Avatar.Text
          style={{ marginLeft: 4 }}
          backgroundColor="cadetblue"
          label="TP"
        />

        <Avatar.Image
          style={{ marginLeft: 8, borderRadius: 100 }}
          source={{
            uri: "https://i.pravatar.cc/150?u=a142581f4e290235702"
          }}
        />

        <Header.Icon
          size={30}
          name="logo-react"
          type="Ionicons"
          color="#FFFFFF"
        />

        <Header.Icon
          size={30}
          name="infocirlceo"
          type="AntDesign"
          color="#FFFFFF"
        />
      </Header>

      <ScrollView contentContainerStyle={{ flexGrow: 1, padding: 12 }}>
        <ColumnContainer title="Text Inputs">
          <TextInput
            wrapperStyle={{ marginBottom: 16 }}
            label="E-Mail"
            labelStyle={{ color: "#FFFFFF" }}
            endText="Special one"
            endTextStyle={{ color: "grey" }}
            placeholder="Type your email"
            placeholderTextColor="grey"
            startIcon={{ type: "MaterialCommunityIcons", name: "email" }}
            value={email}
            onChangeText={setEmail}
          />
          <TextInput
            wrapperStyle={{ marginBottom: 16 }}
            isPassword
            label="Password"
            labelStyle={{ color: "#FFFFFF" }}
            endTextStyle={{ color: "grey" }}
            placeholderTextColor="grey"
            startIcon={{ type: "MaterialCommunityIcons", name: "key" }}
            value={pass}
            onChangeText={setPass}
          />

          <TextInput
            wrapperStyle={{ marginBottom: 16 }}
            renderStartElement={() => (
              <Image
                style={{ width: 28, height: 28, borderRadius: 999 }}
                source={{
                  uri: "https://reactjs.org/logo-og.png"
                }}
              />
            )}
            renderEndElement={() => (
              <Button
                size="xsmall"
                label="Submit"
                backgroundColor="royalblue"
              />
            )}
            label="Custom Start & End Elements"
            labelStyle={{ color: "#FFFFFF" }}
            endTextStyle={{ color: "grey" }}
            placeholderTextColor="grey"
            hideDefaultEndIcons
            startIcon={{ type: "MaterialCommunityIcons", name: "key" }}
            value={rnInputText}
            onChangeText={setRnInputText}
          />

          <TextInput
            wrapperStyle={{ marginBottom: 16 }}
            loading
            placeholder="Loading..."
            label="Loading type"
            labelStyle={{ color: "#FFFFFF" }}
            endTextStyle={{ color: "grey" }}
            placeholderTextColor="grey"
            hideDefaultEndIcons
            value={loadingInputText}
            onChangeText={setLoadingInputText}
          />
        </ColumnContainer>
        <ColumnContainer title="List Items">
          <ListItem hasShadow height={72}>
            <ListItem.Icon
              name="lightbulb"
              type="MaterialCommunityIcons"
              color="orange"
            />
            <ListItem.Title
              wrapperStyle={{ marginLeft: 80 }}
              title="Find new ideas!"
              subtitle="Subscribe here..."
              subtitleStyle={{ fontWeight: "300", color: "grey" }}
            />

            <ListItem.Image
              style={{ position: "absolute", right: 50 }}
              source={{
                uri: "data:image/png;base64,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"
              }}
            />

            <ListItem.Icon
              alignment="end"
              name="arrow-right"
              type="MaterialCommunityIcons"
            />
          </ListItem>

          <ListItem style={{ marginTop: 50 }} hasShadow height={150}>
            <ListItem.Title
              wrapperStyle={{ marginLeft: 8 }}
              title="React Native"
              style={{ fontSize: 32, lineHeight: 55, fontWeight: "500" }}
              subtitle="Flexible list item..."
              subtitleStyle={{ fontWeight: "300", color: "grey" }}
            />

            <ListItem.Button
              alignment="end"
              backgroundColor="royalblue"
              size="xsmall"
              label="List item button"
            />
          </ListItem>

          <ListItem style={{ marginTop: 50 }} hasShadow>
            <ListItem.Title
              wrapperStyle={{ marginLeft: 8 }}
              title="Push notifications"
            />
            <Switch
              style={{ right: 12, position: "absolute" }}
              value={notification}
              onValueChange={setNotification}
            />
          </ListItem>
        </ColumnContainer>

        <RowContainer title="Buttons">
          <Button
            size="xsmall"
            backgroundColor="royalblue"
            label="Start recording"
            startIcon={{
              name: "microphone",
              type: "FontAwesome",
              color: "white"
            }}
          />
          <Button
            size="xsmall"
            startIcon={{
              name: "hand-peace",
              type: "FontAwesome5",
              color: "white"
            }}
            backgroundColor="rebeccapurple"
            label="Hey!"
            endIcon={{
              name: "hand-wave",
              type: "MaterialCommunityIcons",
              color: "white"
            }}
          />

          <Button
            size="xsmall"
            disabled
            disabledBackgroundColor="grey"
            loading
            backgroundColor="royalblue"
            label="Loading..."
            startIcon={{
              name: "microphone",
              type: "FontAwesome",
              color: "white"
            }}
          />
        </RowContainer>

        <RowContainer title="Avatars">
          <View style={{ alignItems: "center" }}>
            <Avatar.Text backgroundColor="darkorange" size={65} label="TP" />
            <Text style={{ marginTop: 6, color: "#FFFFFF" }}>Avatar text</Text>
          </View>

          <View style={{ alignItems: "center" }}>
            <Avatar.Icon
              color="dodgerblue"
              size={65}
              name="react"
              type="Fontisto"
            />
            <Text style={{ marginTop: 6, color: "#FFFFFF" }}>Avatar icon</Text>
          </View>
          <View style={{ alignItems: "center" }}>
            <Avatar.Image
              size={65}
              backgroundColor="orange"
              source={{
                uri: "https://reactnative.dev/img/logo-og.png"
              }}
            />
            <Text style={{ marginTop: 6, color: "#FFFFFF" }}>Avatar image</Text>
          </View>
        </RowContainer>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "rgba(35, 47, 72, 1)"
  }
});
