import { UNITS } from "../constant.js";

export function getOppositUnit(unit) {
  return unit === UNITS.celcius ? UNITS.fahrenheit : UNITS.celcius;
}

export function convertTempTo(unit, value) {
  if (unit === UNITS.celcius) {
    return (value - 32) * (5 / 9);
  } else {
    return value * (9 / 5) + 32;
  }
}

export function isIceTemp(value, unit) {
    if (unit === UNITS.celcius) {
      return value < 0;
    }
    return value < 32;
  }