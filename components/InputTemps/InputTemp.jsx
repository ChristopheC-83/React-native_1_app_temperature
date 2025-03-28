import { Text, TextInput } from "react-native";
import { s } from "./InputTemp.style.js";
import { View } from "react-native";

export default function InputTemp({ defaultValue, onChangeText, unit }) {

  return (
    <View style={s.container}> 
      <TextInput
        placeholder="Propose une température"
        style={s.input}
        keyboardType="numeric" 
        maxLength={4}
        defaultValue={defaultValue}
        onChangeText={onChangeText}
      />
      <Text style={s.unity}>{unit}</Text>
    </View>
  );
}
