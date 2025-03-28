import { ImageBackground, Text } from "react-native";
import { View } from "react-native";
import { s } from "./app.style.js";
import InputTemp from "./components/InputTemp.jsx";

export default function App() {
  return (
    <ImageBackground style={s.container}
    source={{
      uri: "https://images.unsplash.com/photo-1610179370434-797be964d74c?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fA%3D%3D",
    }}
    >
      <View style={s.workspace}>
        <View>
          <Text>Température</Text>
        </View>
          <InputTemp defaultValue={"12"}/>
        <View>
          <Text>Button</Text>
        </View>
      </View>
    </ImageBackground>
  );
}
