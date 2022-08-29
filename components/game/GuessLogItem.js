import { StyleSheet, Text, View } from "react-native";
import React from "react";

import colors from "../../constants/colors";

const GuessLogItem = (props) => {
  return (
    <View style={styles.listItem}>
      <Text>#{props.roundNumber}</Text>
      <Text>Opponent Guess: {props.guess}</Text>
    </View>
  );
};

export default GuessLogItem;

const styles = StyleSheet.create({
  listItem: {
    borderColor: colors.primary800,
    borderWidth: 1,
    borderRadius: 40,
    padding: 14,
    marginVertical: 8,
    backgroundColor: colors.accent500,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.25,
    shadowRadius: 3,
  },
});
