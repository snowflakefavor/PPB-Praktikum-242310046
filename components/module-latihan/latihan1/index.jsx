import { StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "pink",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default function index() {
  return (
    <View style={styles.container}>
      <Text> Welcome Yunita! </Text>
      <Text> Praktikum lab pemrograman perangkat bergerak </Text>
      <Text> Mari kita belajar pemograman </Text>
      <Text> LET'S GO </Text>
    </View>
  );
}
