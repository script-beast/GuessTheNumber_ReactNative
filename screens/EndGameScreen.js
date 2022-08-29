import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

import Title from "../components/ui/Title";
import PrimaryButton from "../components/ui/PrimaryButton";
import colors from "../constants/colors";

const EndGameScreen = (props) => {
  return (
    <View style={styles.rootContainer}>
      <Title>Game Over</Title>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={require("../assets/success.png")} />
      </View>
      <Text style={styles.summaryText}>
        Your phone needed <Text style={styles.highlight}>{props.rounds}</Text>{" "}
        rounds to guess to guess the number{" "}
        <Text style={styles.highlight}>{props.userNumber}</Text>.
      </Text>
      <PrimaryButton onPress={props.newGameHandler}>
        Start New Game
      </PrimaryButton>
    </View>
  );
};

export default EndGameScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: colors.primary800,
    overflow: "hidden",
    margin: 36,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  summaryText: {
    fontSize: 24,
    textAlign: "center",
    marginBottom: 24,
  },
  highlight: {
    color: colors.primary500,
  },
});
