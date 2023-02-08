import {valueToNumber} from "./value-to-number";

export const addedSpaces = (value: string, min: number, max: number) => {
    if (valueToNumber(value) > max) {
        value = max.toString()
    }
    if (valueToNumber(value) < min) {
        value = min.toString()
    }
    return value.replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, "$1" + ' ')
}