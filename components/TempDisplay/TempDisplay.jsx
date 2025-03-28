import { Text, View } from "react-native";
import {s} from"./TempDisplay.style.js";


export default function TempDisplay({value, unit}) {



    return(
            <Text style={s.text}>{value} {unit}</Text>
       
    )


}