import { StyleSheet, Text, View } from "react-native";
import React from "react";

import colors from "../../constants/colors";

const Title = ({ children }) => {
  return <Text style={styles.title}>{children}</Text>;
};

export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: colors.white,
    textAlign: "center",
    borderColor: colors.white,
    borderWidth: 2,
    padding: 12,
  },
});
