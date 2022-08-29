import React from "react";
import { StyleSheet, ImageBackground } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";

import colors from "./constants/colors";
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import EndGameScreen from "./screens/EndGameScreen";

export default function App() {
  const [userNumber, setUserNumber] = React.useState();
  const [guessRounds, setGuessRounds] = React.useState(0);
  const [isGameOver, setIsGameOver] = React.useState(false);

  const pickedNumber = (number) => {
    setUserNumber(number);
  };

  const newGameHandler = () => {
    setGuessRounds(0);
    setIsGameOver(false);
    setUserNumber(null);
  };

  let content = <StartGameScreen onStartGame={pickedNumber} />;

  if (userNumber) {
    content = (
      <GameScreen
        userNumber={userNumber}
        setGuessRounds={setGuessRounds}
        setIsGameOver={setIsGameOver}
      />
    );
  }

  if (isGameOver) {
    content = (
      <EndGameScreen
        rounds={guessRounds}
        userNumber={userNumber}
        newGameHandler={newGameHandler}
      />
    );
  }

  return (
    <LinearGradient
      colors={[colors.primary700, colors.accent500]}
      style={styles.rootScreen}
    >
      <StatusBar style="light" />
      <ImageBackground
        source={require("./assets/background.png")}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={styles.rootScreen}>{content}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  },
});
