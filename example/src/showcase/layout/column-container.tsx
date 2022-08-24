import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function ColumnContainer({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.sectionTitle}>{title}</Text>
      <View style={styles.columnContainer}>{children}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    borderBottomColor: "#FFFFFF",
    paddingBottom: 24,
    borderBottomWidth: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  columnContainer: {
    justifyContent: "space-between",
    alignContent: "center",
  },
  sectionTitle: {
    textAlign: "center",
    marginVertical: 24,
    fontSize: 24,
    fontWeight: "700",
    color: "#FFFFFF",
  },
});
