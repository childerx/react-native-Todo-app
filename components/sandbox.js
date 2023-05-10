import { StyleSheet, Text, View } from "react-native";

export default function Sandbox() {
  return (
    <View style={styels.container}>
      <Text style={styels.boxOne}>one</Text>
      <Text style={styels.boxTwo}>two</Text>
      <Text style={styels.boxThree}>three</Text>
      <Text style={styels.boxFour}>four</Text>
    </View>
  );
}

const styels = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    backgroundColor: "#ddd",
  },
  boxOne: {
    backgroundColor: "violet",
    padding: 10,
  },
  boxTwo: {
    backgroundColor: "gold",
    padding: 10,
  },
  boxThree: {
    backgroundColor: "coral",
    padding: 10,
  },
  boxFour: {
    backgroundColor: "skyblue",
    padding: 10,
  },
});
