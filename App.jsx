import { ImageBackground, Text } from "react-native";
import { View } from "react-native";
import { s } from "./app.style.js";
import InputTemp from "./components/InputTemps/InputTemp.jsx";
import TempDisplay from "./components/TempDisplay/TempDisplay.jsx";
import {  useEffect, useState } from "react";
import {
  DEFAULT_TEMP,
  DEFAULT_UNIT,
  UNITS,
  HOT_BG,
  COLD_BG,
} from "./constant.js";
import { getOppositUnit, convertTempTo, isIceTemp } from "./services/temp-service.js";
import ButtonConvert from "./components/ButtonConvert/ButtonConvert.jsx";

export default function App() {
  const [inputValue, setInputValue] = useState(DEFAULT_TEMP);
  const [currentUnit, setCurrentUnit] = useState(DEFAULT_UNIT);
  const [background, setBackground] = useState(HOT_BG);

  const oppositUnit = getOppositUnit(currentUnit);

  function getConvertedTemp() {
    const valueAsFloat = Number.parseFloat(inputValue);
    return isNaN(valueAsFloat)
      ? ""
      : convertTempTo(oppositUnit, valueAsFloat).toFixed(1);
  }
  
  useEffect(() => {
    const tempAsFloat = Number.parseFloat(inputValue);
    if (!isNaN(tempAsFloat)) {
      const isIce= isIceTemp(tempAsFloat, currentUnit)
      console.log('isIce',isIce);
      isIceTemp(tempAsFloat, currentUnit)
      setBackground(isIce ? COLD_BG : HOT_BG);
    }
  }, [inputValue, currentUnit]);

  return (
    <ImageBackground
      style={s.container}
      source={{
        uri: background,
      }}
    >
      <View style={s.workspace}>
        <TempDisplay value={getConvertedTemp()} unit={oppositUnit} />
        <InputTemp
          defaultValue={DEFAULT_TEMP}
          onChangeText={setInputValue}
          unit={currentUnit}
        />
        <ButtonConvert
          unit={currentUnit}
          onPress={() => setCurrentUnit(oppositUnit)}
        />
      </View>
    </ImageBackground>
  );
}
