import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function RowContainer({
  children,
  title
}: {
  children: React.ReactNode;
  title: string;
}) {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.sectionTitle}>{title}</Text>
      <View style={styles.rowContainer}>{children}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    borderBottomColor: "#FFFFFF",
    paddingBottom: 24,
    borderBottomWidth: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  rowContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  sectionTitle: {
    marginVertical: 24,
    textAlign: "center",
    fontSize: 24,
    fontWeight: "700",
    color: "#FFFFFF"
  }
});
