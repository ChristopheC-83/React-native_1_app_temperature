
import {  Text, TouchableOpacity } from "react-native";
import { s } from "./ButtonConvert.style.js";


export default function ButtonConvert({onPress, unit}) {
  return (
    <TouchableOpacity style={s.button} onPress={onPress}>
      <Text style={s.text}>Convertir en {unit}</Text>
    </TouchableOpacity>
  )
}
