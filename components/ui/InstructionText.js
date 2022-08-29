import { StyleSheet, Text } from "react-native";
import React from "react";

import colors from "../../constants/colors";

const InstructionText = ({ children, style }) => {
  return <Text style={[styles.instructionText, style]}>{children}</Text>;
};

export default InstructionText;

const styles = StyleSheet.create({
  instructionText: {
    color: colors.accent500,
    fontSize: 20,
    fontWeight: "bold",
    paddingBottom: 8,
  },
});
